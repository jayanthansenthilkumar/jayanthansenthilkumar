import { FC } from "react";

export const WorkstationIllustration: FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`}>
      {/* Decorative Floating Stickers around Workstation */}
      <div className="absolute -top-6 -left-4 z-20 hidden sm:block animate-brutal-float">
        <div className="bg-[#EF79A9] text-[#171717] border-2 border-[#171717] px-2.5 py-1 brutal-shadow-sm font-mono text-[11px] font-bold tracking-wider -rotate-6">
          &lt;/&gt; CODE_FLOW
        </div>
      </div>

      <div className="absolute -top-4 -right-3 z-20 hidden sm:block animate-brutal-float-alt">
        <div className="bg-[#F2ED37] text-[#171717] border-2 border-[#171717] px-2.5 py-1 brutal-shadow-sm font-mono text-[11px] font-bold tracking-wider rotate-6 flex items-center gap-1.5">
          <span className="text-[#FF713D]">⚡</span> INNOVATION
        </div>
      </div>

      {/* Main Vector Workstation Composition */}
      <svg
        viewBox="0 0 540 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none filter drop-shadow-[6px_6px_0px_#171717]"
      >
        {/* Ambient Backing Plate (Neo-Brutalist Frame) */}
        <rect
          x="15"
          y="15"
          width="510"
          height="330"
          rx="16"
          fill="#FFFDF7"
          stroke="#171717"
          strokeWidth="3.5"
        />

        {/* Backing Grid Dots */}
        <g opacity="0.25">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 12 }).map((__, c) => (
              <circle
                key={`dot-${r}-${c}`}
                cx={45 + c * 40}
                cy={45 + r * 35}
                r="1.75"
                fill="#171717"
              />
            ))
          )}
        </g>

        {/* Window Chrome Header Bar */}
        <rect
          x="15"
          y="15"
          width="510"
          height="36"
          rx="16"
          fill="#171717"
        />
        <rect
          x="15"
          y="35"
          width="510"
          height="16"
          fill="#171717"
        />
        <circle cx="36" cy="33" r="5" fill="#FF713D" />
        <circle cx="52" cy="33" r="5" fill="#F2ED37" />
        <circle cx="68" cy="33" r="5" fill="#46D9BC" />
        <text
          x="90"
          y="37"
          fill="#FFFDF7"
          fontFamily="'Space Mono', monospace"
          fontSize="11"
          fontWeight="bold"
          letterSpacing="1"
        >
          ENGINEER_WORKSPACE.SH — v2026.4
        </text>

        {/* Terminal Window on the Left */}
        <g transform="translate(35, 70)">
          <rect
            x="0"
            y="0"
            width="210"
            height="185"
            rx="8"
            fill="#171717"
            stroke="#171717"
            strokeWidth="2.5"
          />
          {/* Terminal Title Bar */}
          <rect
            x="0"
            y="0"
            width="210"
            height="26"
            rx="8"
            fill="#80B5EB"
            stroke="#171717"
            strokeWidth="2"
          />
          <text
            x="12"
            y="17"
            fill="#171717"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
            fontWeight="bold"
          >
            &gt; terminal.zsh
          </text>
          {/* Terminal Commands & Output */}
          <text
            x="12"
            y="48"
            fill="#46D9BC"
            fontFamily="'Space Mono', monospace"
            fontSize="11"
            fontWeight="bold"
          >
            $ git checkout main
          </text>
          <text
            x="12"
            y="70"
            fill="#FFFDF7"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
          >
            Switched to branch 'main'
          </text>
          <text
            x="12"
            y="94"
            fill="#F2ED37"
            fontFamily="'Space Mono', monospace"
            fontSize="11"
            fontWeight="bold"
          >
            $ deploy --prod
          </text>
          <text
            x="12"
            y="116"
            fill="#EF79A9"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
          >
            ✔ Systems Active [100%]
          </text>
          <text
            x="12"
            y="136"
            fill="#80B5EB"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
          >
            ✔ Ready for Discovery
          </text>
          {/* Blinking Cursor */}
          <rect x="12" y="152" width="8" height="13" fill="#46D9BC" />
        </g>

        {/* Code Editor Window on the Right */}
        <g transform="translate(265, 70)">
          <rect
            x="0"
            y="0"
            width="240"
            height="185"
            rx="8"
            fill="#F4E4CC"
            stroke="#171717"
            strokeWidth="2.5"
          />
          {/* Editor Header Bar with Tabs */}
          <rect
            x="0"
            y="0"
            width="240"
            height="28"
            rx="8"
            fill="#FFFDF7"
            stroke="#171717"
            strokeWidth="2"
          />
          <rect
            x="8"
            y="4"
            width="90"
            height="20"
            rx="4"
            fill="#FF713D"
            stroke="#171717"
            strokeWidth="1.5"
          />
          <text
            x="18"
            y="18"
            fill="#FFFDF7"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fontWeight="bold"
          >
            App.tsx
          </text>
          <rect
            x="104"
            y="4"
            width="80"
            height="20"
            rx="4"
            fill="#FFFDF7"
            stroke="#171717"
            strokeWidth="1.5"
          />
          <text
            x="114"
            y="18"
            fill="#171717"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fontWeight="bold"
          >
            Portal.ts
          </text>

          {/* Syntax Lines (Neo-Brutalist Code representation) */}
          <g transform="translate(14, 42)">
            <rect x="0" y="0" width="40" height="7" rx="3" fill="#EF79A9" />
            <rect x="46" y="0" width="70" height="7" rx="3" fill="#171717" />
            <rect x="122" y="0" width="30" height="7" rx="3" fill="#46D9BC" />

            <rect x="14" y="16" width="55" height="7" rx="3" fill="#FF713D" />
            <rect x="75" y="16" width="90" height="7" rx="3" fill="#171717" />

            <rect x="14" y="32" width="110" height="7" rx="3" fill="#80B5EB" />
            <rect x="130" y="32" width="45" height="7" rx="3" fill="#F2ED37" />

            <rect x="28" y="48" width="60" height="7" rx="3" fill="#46D9BC" />
            <rect x="94" y="48" width="85" height="7" rx="3" fill="#EF79A9" />

            <rect x="28" y="64" width="120" height="7" rx="3" fill="#171717" />

            <rect x="14" y="80" width="40" height="7" rx="3" fill="#FF713D" />

            <rect x="0" y="96" width="30" height="7" rx="3" fill="#EF79A9" />
          </g>

          {/* Mini Interactive Preview Badge in Editor */}
          <g transform="translate(14, 150)">
            <rect
              x="0"
              y="0"
              width="212"
              height="22"
              rx="4"
              fill="#FFFDF7"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="11" r="4" fill="#46D9BC" />
            <text
              x="24"
              y="15"
              fill="#171717"
              fontFamily="'Space Mono', monospace"
              fontSize="9"
              fontWeight="bold"
            >
              STATUS: ZERO_ERRORS • READY_FOR_ROUTING
            </text>
          </g>
        </g>

        {/* Physical Desktop Workstation Elements below Windows */}
        <g transform="translate(35, 272)">
          {/* Desk Surface Strip */}
          <rect
            x="0"
            y="20"
            width="470"
            height="18"
            rx="4"
            fill="#F2ED37"
            stroke="#171717"
            strokeWidth="3"
          />

          {/* Coffee Mug with Steam */}
          <g transform="translate(42, -6)">
            <rect
              x="0"
              y="0"
              width="26"
              height="26"
              rx="4"
              fill="#EF79A9"
              stroke="#171717"
              strokeWidth="2.5"
            />
            {/* Handle */}
            <path
              d="M26 6C31 6 31 20 26 20"
              stroke="#171717"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Steam Wiggles */}
            <path
              d="M7 -6C5 -10 9 -13 7 -17"
              stroke="#171717"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17 -4C15 -8 19 -11 17 -15"
              stroke="#171717"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Mechanical Keyboard */}
          <g transform="translate(130, 2)">
            <rect
              x="0"
              y="0"
              width="150"
              height="18"
              rx="4"
              fill="#FFFDF7"
              stroke="#171717"
              strokeWidth="2.5"
            />
            {/* Key Rows */}
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={`k-${i}`}
                x={10 + i * 16}
                y="4"
                width="11"
                height="10"
                rx="2"
                fill={i % 2 === 0 ? "#FF713D" : "#46D9BC"}
                stroke="#171717"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Mouse with Cable */}
          <g transform="translate(300, 2)">
            <rect
              x="0"
              y="0"
              width="20"
              height="20"
              rx="7"
              fill="#46D9BC"
              stroke="#171717"
              strokeWidth="2.5"
            />
            <line
              x1="10"
              y1="0"
              x2="10"
              y2="10"
              stroke="#171717"
              strokeWidth="2"
            />
          </g>

          {/* Potted Plant for Creative Desk Vibe */}
          <g transform="translate(385, -12)">
            {/* Pot */}
            <polygon
              points="6,16 26,16 22,32 10,32"
              fill="#FF713D"
              stroke="#171717"
              strokeWidth="2.5"
            />
            {/* Leaves */}
            <ellipse cx="11" cy="8" rx="6" ry="10" fill="#46D9BC" stroke="#171717" strokeWidth="2" />
            <ellipse cx="21" cy="7" rx="6" ry="10" fill="#46D9BC" stroke="#171717" strokeWidth="2" />
            <ellipse cx="16" cy="2" rx="5" ry="9" fill="#46D9BC" stroke="#171717" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
};

