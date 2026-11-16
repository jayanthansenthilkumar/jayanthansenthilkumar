import { FC } from "react";

export const PortfolioIllustration: FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto filter drop-shadow-[4px_4px_0px_#171717]"
      >
        {/* Background Card Foundation */}
        <rect
          x="8"
          y="8"
          width="304"
          height="164"
          rx="12"
          fill="#FFFDF7"
          stroke="#171717"
          strokeWidth="3"
        />

        {/* Backing Pattern Dots */}
        <g opacity="0.2">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 9 }).map((__, c) => (
              <circle
                key={`p-dot-${r}-${c}`}
                cx={35 + c * 30}
                cy={45 + r * 28}
                r="1.5"
                fill="#171717"
              />
            ))
          )}
        </g>

        {/* Browser / Project App Window Preview */}
        <g transform="translate(24, 24)">
          <rect
            x="0"
            y="0"
            width="175"
            height="115"
            rx="8"
            fill="#F4E4CC"
            stroke="#171717"
            strokeWidth="2.5"
          />
          {/* Header Bar */}
          <rect
            x="0"
            y="0"
            width="175"
            height="22"
            rx="8"
            fill="#171717"
          />
          <circle cx="12" cy="11" r="3" fill="#FF713D" />
          <circle cx="22" cy="11" r="3" fill="#F2ED37" />
          <circle cx="32" cy="11" r="3" fill="#46D9BC" />
          <text
            x="45"
            y="14"
            fill="#FFFDF7"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
          >
            hilo.jayanthan.fyi
          </text>

          {/* Screen Content: UI Dashboard Blocks */}
          <g transform="translate(10, 32)">
            {/* Hero Banner in Mockup */}
            <rect
              x="0"
              y="0"
              width="155"
              height="28"
              rx="4"
              fill="#FF713D"
              stroke="#171717"
              strokeWidth="2"
            />
            <rect x="8" y="7" width="55" height="5" rx="2" fill="#FFFDF7" />
            <rect x="8" y="16" width="35" height="4" rx="2" fill="#F2ED37" />

            {/* Grid Cards in Mockup */}
            <rect
              x="0"
              y="34"
              width="74"
              height="38"
              rx="4"
              fill="#FFFDF7"
              stroke="#171717"
              strokeWidth="1.75"
            />
            <rect x="6" y="40" width="30" height="4" rx="2" fill="#171717" />
            <rect x="6" y="48" width="55" height="3" rx="1.5" fill="#80B5EB" />
            <rect x="6" y="55" width="40" height="3" rx="1.5" fill="#46D9BC" />

            <rect
              x="81"
              y="34"
              width="74"
              height="38"
              rx="4"
              fill="#F2ED37"
              stroke="#171717"
              strokeWidth="1.75"
            />
            <rect x="87" y="40" width="45" height="4" rx="2" fill="#171717" />
            <rect x="87" y="48" width="50" height="3" rx="1.5" fill="#FF713D" />
            <rect x="87" y="55" width="30" height="3" rx="1.5" fill="#171717" />
          </g>
        </g>

        {/* Floating Rocket / Project Badge on the Right */}
        <g transform="translate(215, 30)">
          {/* Tilted Sticker Background */}
          <rect
            x="0"
            y="0"
            width="75"
            height="85"
            rx="8"
            fill="#EF79A9"
            stroke="#171717"
            strokeWidth="2.5"
            transform="rotate(6 37 42)"
          />
          {/* Code Icon inside sticker */}
          <text
            x="12"
            y="32"
            fill="#171717"
            fontFamily="'Archivo Black', sans-serif"
            fontSize="18"
            fontWeight="bold"
            transform="rotate(6 37 42)"
          >
            DEV
          </text>
          <text
            x="12"
            y="52"
            fill="#FFFDF7"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
            fontWeight="bold"
            transform="rotate(6 37 42)"
          >
            PROD // 01
          </text>
          {/* Sparkle */}
          <polygon
            points="37,60 41,70 51,74 41,78 37,88 33,78 23,74 33,70"
            fill="#F2ED37"
            stroke="#171717"
            strokeWidth="1.5"
          />
        </g>

        {/* Launch Arrow Badge at Bottom Right */}
        <g transform="translate(225, 122)">
          <rect
            x="0"
            y="0"
            width="65"
            height="26"
            rx="6"
            fill="#80B5EB"
            stroke="#171717"
            strokeWidth="2"
          />
          <text
            x="8"
            y="17"
            fill="#171717"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fontWeight="bold"
          >
            LIVE ↗
          </text>
        </g>
      </svg>
    </div>
  );
};

