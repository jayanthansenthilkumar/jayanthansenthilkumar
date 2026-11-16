import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "01_mobile_small_320x568", width: 320, height: 568 },
  { name: "02_mobile_std_360x800", width: 360, height: 800 },
  { name: "03_mobile_iphone_375x812", width: 375, height: 812 },
  { name: "04_mobile_390x844", width: 390, height: 844 },
  { name: "05_mobile_393x873", width: 393, height: 873 },
  { name: "06_mobile_414x896", width: 414, height: 896 },
  { name: "07_mobile_large_430x932", width: 430, height: 932 },
  { name: "08_foldable_compact_600x800", width: 600, height: 800 },
  { name: "09_foldable_expanded_768x1024", width: 768, height: 1024 },
  { name: "10_tablet_820x1180", width: 820, height: 1180 },
  { name: "11_tablet_1024x1366", width: 1024, height: 1366 },
  { name: "12_laptop_short_1280x720", width: 1280, height: 720 },
  { name: "13_laptop_std_1366x768", width: 1366, height: 768 },
  { name: "14_laptop_mac_1440x900", width: 1440, height: 900 },
  { name: "15_desktop_1600x900", width: 1600, height: 900 },
  { name: "16_desktop_fhd_1920x1080", width: 1920, height: 1080 },
  { name: "17_qhd_2560x1440", width: 2560, height: 1440 },
  { name: "18_ultrawide_3440x1440", width: 3440, height: 1440 },
  { name: "19_super_ultrawide_5120x1440", width: 5120, height: 1440 },
  { name: "20_mobile_landscape_844x390", width: 844, height: 390 },
  { name: "21_tablet_landscape_1024x768", width: 1024, height: 768 }
];

async function runVerification() {
  const outputDir = path.resolve(process.cwd(), "screenshots/verify");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({
    channel: "chrome",
    headless: true
  });

  const results = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();
    
    const errors = [];
    page.on("pageerror", err => errors.push(err.message));
    page.on("console", msg => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });

    // Check for overflow and layout details
    const layoutInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      const hasHorizontalScroll = docWidth > winWidth + 1;
      const hasVerticalScroll = docHeight > winHeight + 1;

      // Find any element causing overflow
      const overflowingElements = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > winWidth + 1 || rect.left < -1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: el.className?.toString().substring(0, 50),
            rect: { left: rect.left, right: rect.right, width: rect.width }
          });
        }
      }

      // Check footer visibility
      const footer = document.querySelector('footer');
      const footerRect = footer ? footer.getBoundingClientRect() : null;
      const isFooterInViewport = footerRect ? (footerRect.bottom <= winHeight + 2) : false;

      // Check hero image visibility and height
      const heroImg = document.querySelector('img[src*="hero.png"]');
      const heroRect = heroImg ? heroImg.getBoundingClientRect() : null;

      // Check name text
      const nameElements = Array.from(document.querySelectorAll('.editorial-name-layer')).map(el => ({
        text: el.textContent?.trim(),
        width: el.getBoundingClientRect().width,
        height: el.getBoundingClientRect().height,
        fontSize: window.getComputedStyle(el).fontSize
      }));

      return {
        docWidth,
        winWidth,
        docHeight,
        winHeight,
        hasHorizontalScroll,
        hasVerticalScroll,
        isFooterInViewport,
        heroRect: heroRect ? { width: heroRect.width, height: heroRect.height, top: heroRect.top, bottom: heroRect.bottom } : null,
        nameElements,
        overflowingElements: overflowingElements.slice(0, 5)
      };
    });

    const shotPath = path.join(outputDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });

    results.push({
      ...vp,
      ...layoutInfo,
      errors,
      screenshot: shotPath
    });

    await context.close();
  }

  await browser.close();

  fs.writeFileSync(
    path.join(outputDir, "verify_results.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("Verification complete. Results summary:");
  console.log(JSON.stringify(results.map(r => ({
    name: r.name,
    hScroll: r.hasHorizontalScroll,
    vScroll: r.hasVerticalScroll,
    footerInVP: r.isFooterInViewport,
    errors: r.errors.length,
    heroH: r.heroRect?.height,
    nameW: r.nameElements?.[0]?.width,
    nameFontSize: r.nameElements?.[0]?.fontSize
  })), null, 2));
}

runVerification().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});

