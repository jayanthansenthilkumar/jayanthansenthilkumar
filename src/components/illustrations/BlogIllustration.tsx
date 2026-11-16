import { FC } from "react";

export const BlogIllustration: FC<{ className?: string }> = ({
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
                key={`b-dot-${r}-${c}`}
                cx={35 + c * 30}
                cy={45 + r * 28}
                r="1.5"
                fill="#171717"
              />
            ))
          )}
        </g>

        {/* Open Editorial Article / Journal View on Left */}
        <g transform="translate(24, 24)">
          <rect
            x="0"
            y="0"
            width="175"
            height="115"
            rx="8"
            fill="#FFFDF7"
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
          <circle cx="12" cy="11" r="3" fill="#46D9BC" />
          <circle cx="22" cy="11" r="3" fill="#EF79A9" />
          <circle cx="32" cy="11" r="3" fill="#F2ED37" />
          <text
            x="45"
            y="14"
            fill="#FFFDF7"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
          >
            blogs.jayanthan.fyi
          </text>

          {/* Article Typography Lines */}
          <g transform="translate(12, 34)">
            {/* Article Category Pill */}
            <rect
              x="0"
              y="0"
              width="60"
              height="14"
              rx="4"
              fill="#46D9BC"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="8"
              y="10"
              fill="#171717"
              fontFamily="'Space Mono', monospace"
              fontSize="7"
              fontWeight="bold"
            >
              TECH NOTES
            </text>

            {/* Article Title Header Bar */}
            <rect x="0" y="20" width="125" height="8" rx="2" fill="#171717" />
            <rect x="0" y="32" width="85" height="8" rx="2" fill="#171717" />

            {/* Text Paragraph lines */}
            <rect x="0" y="46" width="145" height="4" rx="2" fill="#EF79A9" />
            <rect x="0" y="54" width="130" height="4" rx="2" fill="#80B5EB" />
            <rect x="0" y="62" width="115" height="4" rx="2" fill="#171717" />
          </g>
        </g>

        {/* Floating Ideas & Lightbulb Sticker on Right */}
        <g transform="translate(215, 26)">
          <rect
            x="0"
            y="0"
            width="75"
            height="90"
            rx="8"
            fill="#F2ED37"
            stroke="#171717"
            strokeWidth="2.5"
            transform="rotate(-5 37 45)"
          />
          {/* Lightbulb / Idea Vector */}
          <g transform="translate(18, 12)">
            {/* Bulb Dome */}
            <circle cx="20" cy="20" r="14" fill="#FFFDF7" stroke="#171717" strokeWidth="2.5" />
            {/* Filament */}
            <path
              d="M16 20C16 16 24 16 24 20"
              stroke="#FF713D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Base */}
            <rect x="14" y="32" width="12" height="7" rx="2" fill="#171717" />
            {/* Idea Rays */}
            <line x1="20" y1="0" x2="20" y2="4" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="6" y1="8" x2="9" y2="11" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="34" y1="8" x2="31" y2="11" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text
            x="14"
            y="68"
            fill="#171717"
            fontFamily="'Archivo Black', sans-serif"
            fontSize="11"
            fontWeight="bold"
            transform="rotate(-5 37 45)"
          >
            INSIGHTS
          </text>
        </g>

        {/* Read Indicator Badge at Bottom Right */}
        <g transform="translate(225, 122)">
          <rect
            x="0"
            y="0"
            width="65"
            height="26"
            rx="6"
            fill="#EF79A9"
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
            READ ↗
          </text>
        </g>
      </svg>
    </div>
  );
};

