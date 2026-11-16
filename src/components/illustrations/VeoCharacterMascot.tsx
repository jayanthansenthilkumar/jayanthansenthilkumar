import { FC, useState, useEffect, useRef } from "react";

const QUOTES = [
  "console.log('LET\\'S BUILD!')",
  "BUGS FEAR THIS BEANIE ⚡",
  "COFFEE IN, CLEAN CODE OUT ☕",
  "READY FOR DISCOVERY 🚀",
  "TESTS PASSED (ON MY MACHINE) 😎",
  "GIT PUSH --PROD ✨",
];

interface VeoCharacterProps {
  className?: string;
}

export const VeoCharacterMascot: FC<VeoCharacterProps> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);

  // Cycle quote on click + playful bounce
  const handleClick = () => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Subtle 3D tilt calculation (-10deg to +10deg)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      const rotateY = Math.max(-10, Math.min(10, deltaX * 12));
      const rotateX = Math.max(-8, Math.min(8, -deltaY * 10));

      setTilt({ rotateX, rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
      }}
      className={`relative select-none cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Interactive animated 3D male developer mascot. Click to change quote."
    >
      {/* 3D Parallax Container */}
      <div
        className={`relative transition-transform duration-200 ease-out ${
          isBouncing ? "scale-105 -rotate-2" : ""
        }`}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${
            isHovered && !isBouncing ? 1.03 : 1
          })`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Floating Interactive Speech Bubble with Animated Click Hint */}
        <div
          className="absolute -top-7 -right-2 z-30 bg-[#FFFDF7] border-2 border-[#171717] px-3 py-1 rounded-xl brutal-shadow-sm font-mono text-[10px] sm:text-xs font-bold text-[#171717] rotate-3 animate-brutal-float flex items-center gap-1.5 transition-transform duration-150"
          style={{ transform: "translateZ(35px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF713D] animate-ping" />
          <span>{QUOTES[quoteIndex]}</span>
        </div>

        {/* Floating Mini Sticker: ⚡ CODE WIZARD */}
        <div
          className="absolute -bottom-3 -left-3 z-30 bg-[#F2ED37] border-2 border-[#171717] px-2.5 py-1 rounded-lg brutal-shadow-sm font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-black text-[#171717] -rotate-6 hidden xs:flex items-center gap-1"
          style={{ transform: "translateZ(30px)" }}
        >
          <span>⚡</span>
          <span>CODE WIZARD</span>
        </div>

        {/* Floating Sparkle Stars */}
        <div
          className="absolute top-10 -left-4 z-20 hidden sm:block animate-sparkle-spin"
          style={{ transform: "translateZ(25px)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#EF79A9" stroke="#171717" strokeWidth="2">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* =====================================================================
            MAIN SVG MALE CARTOON MASCOT (Clean Masculine Features & Animation)
            ===================================================================== */}
        <svg
          viewBox="0 0 380 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[8px_10px_0px_#171717] animate-mascot-bob"
        >
          <defs>
            {/* Glossy 3D Highlight for Glasses */}
            <linearGradient id="glassesGlareAnim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFDF7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FFFDF7" stopOpacity="0.5" />
            </linearGradient>

            {/* Dimensional Laptop Screen Glow */}
            <radialGradient id="screenGlowAnim" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#46D9BC" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#171717" stopOpacity="1" />
            </radialGradient>
          </defs>

          {/* ------------------------------------------------------------------
              LAYER 1: DYNAMIC GROUND SHADOW
              ------------------------------------------------------------------ */}
          <ellipse
            cx="190"
            cy="375"
            rx="110"
            ry="18"
            fill="#171717"
            opacity="0.15"
          />

          {/* ------------------------------------------------------------------
              LAYER 2: BODY & MASCULINE STREETWEAR HOODIE (Signal Orange)
              ------------------------------------------------------------------ */}
          <g id="body">
            {/* Broad Shoulders & Torso */}
            <path
              d="M100 280 C100 235, 135 225, 190 225 C245 225, 280 235, 280 280 L290 365 C290 375, 280 380, 265 380 L115 380 C100 380, 90 375, 90 365 Z"
              fill="#FF713D"
              stroke="#171717"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Hoodie 3D Shadow Plane (Left facet) */}
            <path
              d="M100 280 L90 365 C90 375, 100 380, 115 380 L135 380 L125 290 Z"
              fill="#D95321"
              stroke="#171717"
              strokeWidth="3"
            />

            {/* Kangaroo Pocket */}
            <path
              d="M125 320 L255 320 L245 370 L135 370 Z"
              fill="#FFFDF7"
              stroke="#171717"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Pocket Stitch Detail */}
            <line
              x1="140"
              y1="335"
              x2="240"
              y2="335"
              stroke="#171717"
              strokeWidth="2"
              strokeDasharray="4 3"
            />

            {/* Hoodie Drawstrings with gentle sway */}
            <path d="M165 235 L160 280" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
            <circle cx="160" cy="282" r="3.5" fill="#F2ED37" stroke="#171717" strokeWidth="2" />
            <path d="M215 235 L220 280" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
            <circle cx="220" cy="282" r="3.5" fill="#F2ED37" stroke="#171717" strokeWidth="2" />

            {/* Strong Masculine Neck / Collar */}
            <path
              d="M150 220 C165 240, 215 240, 230 220"
              fill="#F4E4CC"
              stroke="#171717"
              strokeWidth="3.5"
            />
          </g>

          {/* ------------------------------------------------------------------
              LAYER 3: ARMS & 3D LAPTOP PROP
              ------------------------------------------------------------------ */}
          {/* Left Arm holding glowing 3D Laptop */}
          <g id="left-arm-laptop">
            <path
              d="M100 280 C85 310, 95 350, 135 355"
              fill="#FF713D"
              stroke="#171717"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* 3D Angled Laptop Base */}
            <polygon
              points="135,320 250,300 270,335 150,360"
              fill="#FFFDF7"
              stroke="#171717"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Keyboard Grid */}
            <polygon
              points="145,323 245,306 258,328 157,347"
              fill="#171717"
            />
            {/* Neon Key Lines */}
            <line x1="151" y1="330" x2="248" y2="314" stroke="#46D9BC" strokeWidth="2" />
            <line x1="155" y1="337" x2="253" y2="321" stroke="#F2ED37" strokeWidth="2" />
            <line x1="159" y1="344" x2="240" y2="330" stroke="#EF79A9" strokeWidth="2" />

            {/* 3D Laptop Screen with Pulsing Glow */}
            <g className="animate-screen-pulse">
              <polygon
                points="135,320 250,300 240,240 130,260"
                fill="#171717"
                stroke="#171717"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Screen Active Canvas */}
              <polygon
                points="139,316 244,298 236,246 135,264"
                fill="url(#screenGlowAnim)"
              />
              {/* Active Code Lines */}
              <text
                x="144"
                y="280"
                fill="#171717"
                fontFamily="'Space Mono', monospace"
                fontSize="9"
                fontWeight="bold"
                transform="rotate(-9 144 280)"
              >
                &lt;CODE_ACTIVE/&gt;
              </text>
              <text
                x="148"
                y="298"
                fill="#FFFDF7"
                fontFamily="'Space Mono', monospace"
                fontSize="8"
                fontWeight="bold"
                transform="rotate(-9 148 298)"
              >
                npm run deploy
              </text>
              {/* Blinking Cursor █ */}
              <rect
                x="222"
                y="284"
                width="5"
                height="8"
                fill="#F2ED37"
                className="animate-cursor-blink"
                transform="rotate(-9 222 284)"
              />
            </g>

            {/* Sticker on laptop lid */}
            <circle cx="145" cy="270" r="5" fill="#EF79A9" stroke="#171717" strokeWidth="1.5" />
          </g>

          {/* Right Arm: Raised Animated Waving Peace Sign Hand ✌ */}
          <g id="right-arm-peace" className="animate-hand-wave">
            {/* Sleeve */}
            <path
              d="M275 280 C315 270, 325 220, 295 200"
              fill="#FF713D"
              stroke="#171717"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Sleeve Cuff */}
            <ellipse cx="295" cy="200" rx="14" ry="7" fill="#171717" />

            {/* Hand with Peace Sign ✌ */}
            <g transform="translate(290, 140)">
              {/* Palm */}
              <circle cx="16" cy="45" r="16" fill="#F4E4CC" stroke="#171717" strokeWidth="3.5" />
              {/* Index Finger */}
              <rect
                x="4"
                y="10"
                width="11"
                height="32"
                rx="5"
                fill="#F4E4CC"
                stroke="#171717"
                strokeWidth="3"
                transform="rotate(-15 4 10)"
              />
              {/* Middle Finger */}
              <rect
                x="17"
                y="8"
                width="11"
                height="34"
                rx="5"
                fill="#F4E4CC"
                stroke="#171717"
                strokeWidth="3"
                transform="rotate(10 17 8)"
              />
              {/* Folded Thumb & Fingers */}
              <circle cx="8" cy="46" r="6" fill="#F4E4CC" stroke="#171717" strokeWidth="2.5" />
              <circle cx="22" cy="48" r="6" fill="#F4E4CC" stroke="#171717" strokeWidth="2.5" />
            </g>
          </g>

          {/* ------------------------------------------------------------------
              LAYER 4: MALE CHARACTER HEAD (Trimmed Beard, Defined Jaw & Beanie)
              ------------------------------------------------------------------ */}
          <g id="head">
            {/* Male Ears */}
            <circle cx="85" cy="145" r="18" fill="#F4E4CC" stroke="#171717" strokeWidth="3.5" />
            <path d="M85 140 C80 145, 85 152, 90 150" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="295" cy="145" r="18" fill="#F4E4CC" stroke="#171717" strokeWidth="3.5" />
            <path d="M295 140 C300 145, 295 152, 290 150" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

            {/* Defined Male Jawline & Face Canvas */}
            <path
              d="M95 130 C95 80, 285 80, 285 130 C285 180, 255 220, 190 225 C125 220, 95 180, 95 130 Z"
              fill="#F4E4CC"
              stroke="#171717"
              strokeWidth="4.5"
            />

            {/* ----------------------------------------------------------------
                TRIMMED DEVELOPER BEARD & STUBBLE (Unmistakably Male Feature)
                ---------------------------------------------------------------- */}
            {/* Beard Contour covering lower jaw and chin */}
            <path
              d="M97 150 C95 185, 125 220, 190 225 C255 220, 285 185, 283 150 C270 175, 240 195, 190 195 C140 195, 110 175, 97 150 Z"
              fill="#171717"
            />
            {/* Soul Patch below lower lip */}
            <polygon points="186,188 194,188 192,194 188,194" fill="#171717" />

            {/* Neat Trimmed Mustache */}
            <path
              d="M165 174 C175 168, 185 170, 190 172 C195 170, 205 168, 215 174 C205 178, 195 176, 190 177 C185 176, 175 178, 165 174 Z"
              fill="#171717"
            />

            {/* Male Sideburns connecting to beard */}
            <polygon points="94,115 105,115 102,150 94,145" fill="#171717" />
            <polygon points="286,115 275,115 278,150 286,145" fill="#171717" />

            {/* ----------------------------------------------------------------
                OVERSIZED DEVELOPER BEANIE (Electric Yellow)
                ---------------------------------------------------------------- */}
            <path
              d="M95 90 C95 10, 285 10, 285 90 Z"
              fill="#F2ED37"
              stroke="#171717"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            {/* Beanie Texture Ribs */}
            <path d="M140 30 C155 50, 155 80, 150 90" stroke="#171717" strokeWidth="2.5" />
            <path d="M190 22 C190 50, 190 80, 190 90" stroke="#171717" strokeWidth="2.5" />
            <path d="M240 30 C225 50, 225 80, 230 90" stroke="#171717" strokeWidth="2.5" />

            {/* Beanie Folded Cuff */}
            <rect
              x="80"
              y="75"
              width="220"
              height="35"
              rx="12"
              fill="#171717"
              stroke="#171717"
              strokeWidth="3.5"
            />
            {/* Beanie Pin */}
            <rect
              x="175"
              y="82"
              width="30"
              height="20"
              rx="5"
              fill="#EF79A9"
              stroke="#FFFDF7"
              strokeWidth="2"
            />
            <text
              x="182"
              y="96"
              fill="#171717"
              fontFamily="'Archivo Black', sans-serif"
              fontSize="9"
              fontWeight="bold"
            >
              JS
            </text>

            {/* ----------------------------------------------------------------
                MALE SPECTACLES & ANIMATED BLINKING EYES
                ---------------------------------------------------------------- */}
            {/* Strong, Defined Masculine Eyebrows */}
            <path d="M115 108 C135 100, 158 102, 165 108" stroke="#171717" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M215 108 C222 102, 245 100, 265 108" stroke="#171717" strokeWidth="5.5" strokeLinecap="round" />

            {/* Glasses Frame Bridge */}
            <path d="M172 133 C182 128, 198 128, 208 133" stroke="#171717" strokeWidth="5" strokeLinecap="round" />

            {/* Left Glass Lens Frame */}
            <rect
              x="110"
              y="114"
              width="65"
              height="53"
              rx="14"
              fill="#80B5EB"
              stroke="#171717"
              strokeWidth="4.5"
            />
            {/* Animated Specular Sweep Glare */}
            <g className="animate-glare-sweep">
              <polygon points="118,118 145,118 125,158 118,158" fill="url(#glassesGlareAnim)" />
            </g>
            {/* Left Animated Blinking Eye Pupil */}
            <g className="animate-eye-blink">
              <ellipse cx="145" cy="140" rx="9" ry="11" fill="#171717" />
              <circle cx="148" cy="136" r="3.5" fill="#FFFDF7" />
              <circle cx="142" cy="144" r="1.5" fill="#FFFDF7" />
            </g>

            {/* Right Glass Lens Frame */}
            <rect
              x="205"
              y="114"
              width="65"
              height="53"
              rx="14"
              fill="#80B5EB"
              stroke="#171717"
              strokeWidth="4.5"
            />
            {/* Animated Specular Sweep Glare */}
            <g className="animate-glare-sweep">
              <polygon points="213,118 240,118 220,158 213,158" fill="url(#glassesGlareAnim)" />
            </g>
            {/* Right Animated Blinking Eye Pupil */}
            <g className="animate-eye-blink">
              <ellipse cx="235" cy="140" rx="9" ry="11" fill="#171717" />
              <circle cx="238" cy="136" r="3.5" fill="#FFFDF7" />
              <circle cx="232" cy="144" r="1.5" fill="#FFFDF7" />
            </g>

            {/* Nose */}
            <path
              d="M185 154 C188 162, 195 162, 198 156"
              stroke="#171717"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Confident Smirking Grin through the mustache */}
            <path
              d="M165 176 C175 188, 205 188, 215 176"
              fill="#171717"
              stroke="#171717"
              strokeWidth="3"
            />
            {/* Subtle White Tooth Line */}
            <path d="M172 178 C180 182, 200 182, 208 178" fill="#FFFDF7" />
          </g>
        </svg>
      </div>
    </div>
  );
};
