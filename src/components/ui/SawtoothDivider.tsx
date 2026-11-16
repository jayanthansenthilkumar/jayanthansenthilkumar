import { FC } from "react";

interface SawtoothDividerProps {
  className?: string;
  color?: string;
  height?: number;
  inverted?: boolean;
}

export const SawtoothDivider: FC<SawtoothDividerProps> = ({
  className = "",
  color = "#171717",
  height = 14,
  inverted = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${className}`}
      aria-hidden="true"
      style={{ height: `${height}px` }}
    >
      <svg
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
      >
        <pattern
          id={`sawtooth-${inverted ? "inv" : "norm"}`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          {inverted ? (
            <polygon points="0,24 12,0 24,24" fill={color} />
          ) : (
            <polygon points="0,0 12,24 24,0" fill={color} />
          )}
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill={`url(#sawtooth-${inverted ? "inv" : "norm"})`}
        />
      </svg>
    </div>
  );
};

