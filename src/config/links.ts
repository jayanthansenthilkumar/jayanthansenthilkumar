export const PORTAL_CONFIG = {
  branding: {
    siteName: "JAYANTHAN.FYI",
    monogram: "JS",
    domain: "jayanthan.fyi",
  },
  hero: {
    introLabel: "HEY, I'M",
    name: "JAYANTHAN!",
    headline: "SOFTWARE ENGINEER · CREATIVE THINKER · TECHNOLOGY EXPLORER",
    supportingLine: "Turning ideas into experiences, one build at a time.",
    statusBadge: "AVAILABLE FOR WORK",
  },
  stickers: [
    { text: "THINK DIFFERENT.", color: "#EF79A9", rotation: -6 },
    { text: "KEEP BUILDING.", color: "#F2ED37", rotation: 4 },
    { text: "GOOD VIBES ONLY.", color: "#46D9BC", rotation: -3 },
  ],
  destinations: {
    portfolio: {
      id: "portfolio",
      number: "01",
      title: "MY PORTFOLIO",
      description: "Explore my professional journey and work.",
      cta: "EXPLORE PORTFOLIO ↗",
      url: "https://hilo.jayanthan.fyi",
      accentColor: "#FF713D", // Signal Orange
      tag: "CODE & PRODUCTION",
    },
    blogs: {
      id: "blogs",
      number: "02",
      title: "MY BLOGS",
      description: "Discover my thoughts, articles and technical insights.",
      cta: "READ MY BLOGS ↗",
      url: "https://blogs.jayanthan.fyi",
      accentColor: "#46D9BC", // Mint Green
      tag: "NOTES & ESSAYS",
    },
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/jayanthansenthilkumar",
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jayanthan18",
      label: "LinkedIn Profile",
    },
    {
      name: "Email",
      url: "mailto:jayanthansenthilkumar18@gmail.com",
      label: "Send Email",
    },
  ],
  meta: {
    title: "JAYANTHAN.FYI // Software Engineer & Creator",
    description:
      "Single-screen personal identity gateway for Jayanthan Senthilkumar — Software Engineer, Creative Thinker, Technology Explorer. Direct routing to Portfolio and Blogs.",
  },
} as const;
