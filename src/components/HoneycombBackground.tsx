import { FC } from "react";

interface HoneycombBackgroundProps {
  className?: string;
}

export const HoneycombBackground: FC<HoneycombBackgroundProps> = ({ className = "" }) => {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#080A09] ${className}`}
      aria-hidden="true"
    >
      {/* SVG Pattern Definition for Honeycomb Tiling */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <pattern
            id="cyber-honeycomb-pattern"
            width="56"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 48 L56 64 L56 96 L28 112 L0 96 L0 64 Z"
              fill="none"
              stroke="#172019"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cyber-honeycomb-pattern)" />
      </svg>

      {/* Asymmetric Geometric Feature Hexagons */}
      <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full relative">
        
        {/* Top-Right Large Cyber Lime Hexagon Cluster */}
        <div className="absolute -top-10 right-4 sm:right-12 lg:right-20 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 opacity-60 animate-hex-drift">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            {/* Outer thick lime border */}
            <polygon
              points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
              fill="#111512"
              fillOpacity="0.7"
              stroke="#C6FF00"
              strokeWidth="1.5"
            />
            {/* Inner nested polygon */}
            <polygon
              points="50 15, 87 36, 87 79, 50 100, 13 79, 13 36"
              fill="none"
              stroke="#172019"
              strokeWidth="1"
            />
            {/* Center target crosshair */}
            <circle cx="50" cy="57.7" r="3" fill="#C6FF00" />
            <line x1="42" y1="57.7" x2="58" y2="57.7" stroke="#C6FF00" strokeWidth="0.8" />
            <line x1="50" y1="49.7" x2="50" y2="65.7" stroke="#C6FF00" strokeWidth="0.8" />
            <text
              x="50"
              y="74"
              textAnchor="middle"
              fill="#858B83"
              fontSize="4.5"
              fontFamily="monospace"
              letterSpacing="0.1em"
            >
              HEX-GRID // C-09
            </text>
          </svg>
        </div>

        {/* Mid-Left Floating Accent Hexagon */}
        <div className="absolute top-1/3 -left-6 sm:left-4 lg:left-10 w-24 sm:w-36 h-28 sm:h-40 opacity-70 animate-hex-pulse">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
              fill="#172019"
              fillOpacity="0.5"
              stroke="#C6FF00"
              strokeWidth="1"
              strokeDasharray="4 2"
            />
            <circle cx="50" cy="57.7" r="4" fill="#C6FF00" />
          </svg>
        </div>

        {/* Bottom-Right Sub-Cluster Accent Hexagon */}
        <div className="absolute bottom-20 right-8 sm:right-24 lg:right-36 w-28 sm:w-40 h-32 sm:h-48 opacity-50">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
              fill="#111512"
              fillOpacity="0.8"
              stroke="#858B83"
              strokeWidth="1"
            />
            <polygon
              points="50 20, 80 37, 80 78, 50 95, 20 78, 20 37"
              fill="#172019"
              stroke="#C6FF00"
              strokeWidth="0.8"
            />
            <text
              x="50"
              y="61"
              textAnchor="middle"
              fill="#C6FF00"
              fontSize="6"
              fontFamily="monospace"
              fontWeight="bold"
            >
              02
            </text>
          </svg>
        </div>

        {/* Asymmetric Technical Grid Coordinates Stamp in Top Left */}
        <div className="absolute top-6 left-6 font-mono text-[9px] text-[#858B83]/60 hidden sm:block">
          <div>LOC // 10.9601° N, 78.0766° E</div>
          <div>NODE // GATEWAY-HONEYCOMB-V4</div>
        </div>

      </div>
    </div>
  );
};

