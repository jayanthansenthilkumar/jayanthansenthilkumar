import { FC } from "react";

// Helper component for a flat-shaded 3D hexagonal prism (zero gradients, pure isometric depth)
interface HexPrismProps {
  cx: number;
  cy: number;
  r: number;
  h: number;
  theme?: "charcoal" | "lime" | "dark";
  opacity?: number;
  className?: string;
  label?: string;
}

const HexPrism: FC<HexPrismProps> = ({
  cx,
  cy,
  r,
  h,
  theme = "charcoal",
  opacity = 1,
  className = "",
  label,
}) => {
  // Vertices of the top hexagon (pointy-topped)
  // cos(30) = 0.866, sin(30) = 0.5
  const w = r * 0.866;
  const p0 = [cx, cy - r];
  const p1 = [cx + w, cy - r * 0.5];
  const p2 = [cx + w, cy + r * 0.5];
  const p3 = [cx, cy + r];
  const p4 = [cx - w, cy + r * 0.5];
  const p5 = [cx - w, cy - r * 0.5];

  // Colors for flat-shaded 3D faces
  const colors = {
    charcoal: {
      top: "#1E2721",
      left: "#141A16",
      right: "#0D110E",
      stroke: "#2A382F",
      highlightStroke: "#C6FF00",
    },
    lime: {
      top: "#C6FF00",
      left: "#9ABF00",
      right: "#6F8A00",
      stroke: "#080A09",
      highlightStroke: "#C6FF00",
    },
    dark: {
      top: "#121713",
      left: "#0B0E0C",
      right: "#060807",
      stroke: "#1C241E",
      highlightStroke: "#858B83",
    },
  }[theme];

  return (
    <g className={className} opacity={opacity}>
      {/* Left Extrusion Face */}
      <polygon
        points={`
          ${p4[0]},${p4[1]} 
          ${p3[0]},${p3[1]} 
          ${p3[0]},${p3[1] + h} 
          ${p4[0]},${p4[1] + h}
        `}
        fill={colors.left}
        stroke={colors.stroke}
        strokeWidth="1"
      />
      {/* Right Extrusion Face */}
      <polygon
        points={`
          ${p3[0]},${p3[1]} 
          ${p2[0]},${p2[1]} 
          ${p2[0]},${p2[1] + h} 
          ${p3[0]},${p3[1] + h}
        `}
        fill={colors.right}
        stroke={colors.stroke}
        strokeWidth="1"
      />
      {/* Top Hexagon Face */}
      <polygon
        points={`
          ${p0[0]},${p0[1]} 
          ${p1[0]},${p1[1]} 
          ${p2[0]},${p2[1]} 
          ${p3[0]},${p3[1]} 
          ${p4[0]},${p4[1]} 
          ${p5[0]},${p5[1]}
        `}
        fill={colors.top}
        stroke={theme === "lime" ? colors.stroke : colors.highlightStroke}
        strokeWidth={theme === "lime" ? "1.5" : "1"}
      />
      {/* Center Technical Detail or Reticle */}
      {theme === "lime" && (
        <circle cx={cx} cy={cy} r={r * 0.15} fill="#080A09" />
      )}
      {label && (
        <text
          x={cx}
          y={cy + 3}
          textAnchor="middle"
          fill={theme === "lime" ? "#080A09" : "#C6FF00"}
          fontSize={r * 0.28}
          fontFamily="monospace"
          fontWeight="bold"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export const HoneycombBackground: FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#080A09]"
      aria-hidden="true"
    >
      {/* =========================================================================
          REFERENCE 02: Full-screen Honeycomb Grid with Glowing Green Seams & Vertices
          ========================================================================= */}
      <svg className="absolute inset-0 w-full h-full opacity-65">
        <defs>
          {/* Repeating regular hexagon grid pattern */}
          <pattern
            id="hex-matrix-pattern"
            width="56"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 48 L56 64 L56 96 L28 112 L0 96 L0 64 Z"
              fill="none"
              stroke="#151C17"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>

        {/* Base Grid Layer */}
        <rect width="100%" height="100%" fill="url(#hex-matrix-pattern)" />

        {/* Illuminated Neon-Green Seams & Lines (Active Energy Paths from Ref 02) */}
        <g stroke="#C6FF00" strokeWidth="1.8" fill="none" opacity="0.85">
          {/* Horizontal Seam Path across Upper Quadrant */}
          <path
            d="M -50 160 L 140 160 L 196 128 L 280 128 L 336 160 L 560 160 L 616 128 L 784 128 L 840 160 L 1120 160 L 1176 128 L 1400 128 L 1456 160 L 1920 160"
            className="animate-pulse"
          />
          {/* Mid-Lower Diagonal Circuit Path */}
          <path
            d="M 280 480 L 336 448 L 420 448 L 476 480 L 644 480 L 700 448 L 868 448 L 924 480 L 1260 480 L 1316 448 L 1600 448"
            opacity="0.6"
          />
        </g>

        {/* Illuminated Vertex Points (Bright glowing nodes at seam junctions) */}
        <g fill="#C6FF00">
          <circle cx="196" cy="128" r="3" />
          <circle cx="336" cy="160" r="2.5" />
          <circle cx="616" cy="128" r="3" />
          <circle cx="840" cy="160" r="3.5" />
          <circle cx="1176" cy="128" r="3" />
          <circle cx="1456" cy="160" r="3.5" />
          
          <circle cx="476" cy="480" r="3" />
          <circle cx="700" cy="448" r="3" />
          <circle cx="924" cy="480" r="3.5" />
          <circle cx="1316" cy="448" r="3" />
        </g>
      </svg>

      {/* =========================================================================
          REFERENCE 01: 3D Floating Hexagonal Architecture Blocks with Real Depth
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          {/* TOP RIGHT CLUSTER: Layered 3D Hexagonal Prisms floating in space */}
          <g className="animate-hex-drift">
            {/* Deep Background Prism */}
            <HexPrism cx={1240} cy={140} r={55} h={35} theme="dark" opacity={0.7} />
            {/* Mid-Depth Charcoal Prism */}
            <HexPrism cx={1330} cy={190} r={70} h={45} theme="charcoal" opacity={0.9} label="01" />
            {/* Primary Neon-Lime Accent Prism */}
            <HexPrism cx={1220} cy={250} r={48} h={30} theme="lime" opacity={1} label="SYS" />
            {/* Small Foreground Floating Satellite */}
            <HexPrism cx={1360} cy={310} r={32} h={20} theme="charcoal" opacity={0.85} />
          </g>

          {/* MID LEFT CLUSTER: Layered Asymmetric 3D Prisms */}
          <g className="animate-hex-pulse">
            {/* Dark Anchored Prism */}
            <HexPrism cx={120} cy={380} r={65} h={40} theme="dark" opacity={0.65} />
            {/* Foreground Charcoal Prism */}
            <HexPrism cx={70} cy={460} r={50} h={32} theme="charcoal" opacity={0.85} label="HEX" />
            {/* Small Floating Lime Accent Cube */}
            <HexPrism cx={160} cy={490} r={30} h={18} theme="lime" opacity={0.95} />
          </g>

          {/* BOTTOM RIGHT CLUSTER: Structural Foundation Prisms */}
          <g>
            <HexPrism cx={1180} cy={760} r={75} h={45} theme="dark" opacity={0.6} />
            <HexPrism cx={1280} cy={710} r={55} h={35} theme="charcoal" opacity={0.85} label="NODE" />
            <HexPrism cx={1360} cy={790} r={40} h={25} theme="charcoal" opacity={0.7} />
          </g>

          {/* =========================================================================
              REFERENCE 03: Experimental Brutalist Graphic Accents & Technical Calipers
              ========================================================================= */}
          {/* Top-Left Technical Ruler & Barcode Stamp */}
          <g transform="translate(60, 40)" opacity="0.75">
            {/* Corner Bracket */}
            <path d="M 0 30 L 0 0 L 30 0" stroke="#C6FF00" strokeWidth="2" fill="none" />
            <text x="38" y="12" fill="#C6FF00" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="0.15em">
              H74 // FNT.DEV: CYBER_GATEWAY
            </text>
            <text x="38" y="24" fill="#858B83" fontSize="8" fontFamily="monospace">
              STATUS: SEC_LVL_01 // ALL_CELLS_STABLE
            </text>
            {/* Diagonal Hatch Stamp Block */}
            <g transform="translate(320, 0)">
              <line x1="0" y1="0" x2="8" y2="24" stroke="#C6FF00" strokeWidth="2" />
              <line x1="6" y1="0" x2="14" y2="24" stroke="#C6FF00" strokeWidth="2" />
              <line x1="12" y1="0" x2="20" y2="24" stroke="#C6FF00" strokeWidth="2" />
              <line x1="18" y1="0" x2="26" y2="24" stroke="#C6FF00" strokeWidth="2" />
              <line x1="24" y1="0" x2="32" y2="24" stroke="#C6FF00" strokeWidth="2" />
            </g>
          </g>

          {/* Top-Right Caliper Bracket */}
          <g transform="translate(1380, 40)" opacity="0.75">
            <path d="M 0 0 L -30 0" stroke="#C6FF00" strokeWidth="2" fill="none" />
            <path d="M 0 0 L 0 30" stroke="#C6FF00" strokeWidth="2" fill="none" />
          </g>

          {/* Bottom-Left Caliper Bracket */}
          <g transform="translate(60, 860)" opacity="0.75">
            <path d="M 0 -30 L 0 0 L 30 0" stroke="#C6FF00" strokeWidth="2" fill="none" />
            <text x="38" y="-8" fill="#858B83" fontSize="8" fontFamily="monospace">
              COORD // 10.9601° N, 78.0766° E [IN]
            </text>
          </g>

          {/* Midfield Target Crosshairs */}
          <g stroke="#C6FF00" strokeWidth="1" opacity="0.4">
            <line x1="720" y1="360" x2="720" y2="376" />
            <line x1="712" y1="368" x2="728" y2="368" />

            <line x1="480" y1="240" x2="480" y2="256" />
            <line x1="472" y1="248" x2="488" y2="248" />

            <line x1="960" y1="580" x2="960" y2="596" />
            <line x1="952" y1="588" x2="968" y2="588" />
          </g>
        </svg>
      </div>
    </div>
  );
};
