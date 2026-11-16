import { FC } from "react";
import { cn } from "@/lib/utils";

interface MarqueeTickerProps {
  items?: string[];
  variant?: "lime" | "black" | "paper";
  reverse?: boolean;
  className?: string;
  speed?: "normal" | "slow" | "fast";
}

const DEFAULT_ITEMS = [
  "AI & ML ENGINEER",
  "MLOPS INFRASTRUCTURE",
  "LLMOPS & AGENTIC RAG",
  "HIGH-PERFORMANCE ASGI",
  "SCALABLE REACT SYSTEMS",
  "NEURAL NETWORK ARCHITECTURE",
  "DEEP LEARNING PIPELINES",
  "CONTAINERIZED CLOUD DEPLOYMENTS",
  "ENTERPRISE SEARCH & RETRIEVAL",
  "AVAILABLE GLOBALLY (AUS / USA / IND)",
];

export const MarqueeTicker: FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  variant = "lime",
  reverse = false,
  className,
}) => {
  const bgStyles = {
    lime: "bg-[#CCFF00] text-[#0A0A0A] border-y-2 border-[#0A0A0A]",
    black: "bg-[#0A0A0A] text-[#CCFF00] border-y-2 border-[#0A0A0A]",
    paper: "bg-[#FAF8F5] text-[#0A0A0A] border-y-2 border-[#0A0A0A]",
  };

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden py-3 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase select-none",
        bgStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          reverse ? "animate-marquee-infinite-reverse" : "animate-marquee-infinite"
        )}
      >
        {repeated.map((item, idx) => (
          <span key={idx} className="inline-flex items-center mx-4 gap-4">
            <span>{item}</span>
            <span className={variant === "lime" ? "text-[#0A0A0A]" : "text-[#CCFF00]"}>
              [//]
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

