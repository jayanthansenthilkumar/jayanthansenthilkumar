import { FC } from "react";

export const PlusSticker: FC<{
  color?: string;
  size?: number;
  className?: string;
}> = ({ color = "#EF79A9", size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none filter drop-shadow-[2px_2px_0px_#171717] ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 4V20M4 12H20"
      stroke="#171717"
      strokeWidth="4"
      strokeLinecap="square"
    />
    <path
      d="M12 5V19M5 12H19"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
    />
  </svg>
);

export const SquiggleSticker: FC<{
  color?: string;
  className?: string;
}> = ({ color = "#171717", className = "" }) => (
  <svg
    width="48"
    height="16"
    viewBox="0 0 48 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M2 4C5.5 1 9.5 1 13 4C16.5 7 20.5 7 24 4C27.5 1 31.5 1 35 4C38.5 7 42.5 7 46 4"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M2 9C5.5 6 9.5 6 13 9C16.5 12 20.5 12 24 9C27.5 6 31.5 6 35 9C38.5 12 42.5 12 46 9"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M2 14C5.5 11 9.5 11 13 14C16.5 17 20.5 17 24 14C27.5 11 31.5 11 35 14C38.5 17 42.5 17 46 14"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TiltedSquare: FC<{
  color?: string;
  size?: number;
  rotation?: number;
  className?: string;
  children?: React.ReactNode;
}> = ({
  color = "#EF79A9",
  size = 28,
  rotation = 6,
  className = "",
  children,
}) => (
  <div
    className={`inline-flex items-center justify-center border-2 border-[#171717] brutal-shadow-sm select-none ${className}`}
    style={{
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${rotation}deg)`,
    }}
    aria-hidden="true"
  >
    {children}
  </div>
);

export const SparkleBadge: FC<{
  color?: string;
  size?: number;
  className?: string;
}> = ({ color = "#F2ED37", size = 26, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none filter drop-shadow-[2px_2px_0px_#171717] ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      fill={color}
      stroke="#171717"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const EyeStamp: FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`inline-flex items-center justify-center bg-[#FFFDF7] border-2 border-[#171717] px-2.5 py-1 brutal-shadow-sm font-mono text-[10px] font-bold tracking-wider uppercase select-none ${className}`}
  >
    <span className="w-2 h-2 rounded-full bg-[#46D9BC] mr-1.5 border border-[#171717]" />
    <span>ONLINE</span>
  </div>
);

