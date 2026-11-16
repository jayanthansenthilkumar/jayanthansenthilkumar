import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  number: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  accentColor: string;
  tag: string;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  number,
  title,
  description,
  cta,
  url,
  accentColor,
  tag,
  ariaLabel,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex flex-col justify-between bg-[#FFFDF7] border-[2.5px] sm:border-[3px] border-[#171717] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 brutal-card overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#171717] focus-visible:ring-offset-2 cursor-pointer transition-all duration-200"
    >
      {/* Top Card Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center px-2.5 py-0.5 border-2 border-[#171717] rounded-md font-mono text-[10px] sm:text-xs font-bold tracking-wider brutal-shadow-sm text-[#171717]"
              style={{ backgroundColor: accentColor }}
            >
              CARD {number}
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#171717]/70 uppercase tracking-wider hidden xs:inline">
              {tag}
            </span>
          </div>

          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#171717] flex items-center justify-center text-[#171717] group-hover:scale-110 group-hover:rotate-12 transition-all duration-150"
            style={{ backgroundColor: accentColor }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-['Archivo_Black',sans-serif] text-lg sm:text-2xl md:text-3xl uppercase tracking-tight text-[#171717] group-hover:text-[#FF713D] transition-colors leading-tight mb-1 sm:mb-1.5">
          {title}
        </h2>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[#171717]/80 leading-snug font-medium line-clamp-2">
          {description}
        </p>
      </div>

      {/* Compact CTA Footer */}
      <div className="pt-2.5 sm:pt-3.5 mt-2.5 sm:mt-3.5 border-t-2 border-[#171717]/15">
        <div
          className="w-full flex items-center justify-between px-3.5 py-2 sm:py-2.5 border-2 border-[#171717] rounded-lg sm:rounded-xl font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-bold tracking-wider brutal-btn uppercase"
          style={{ backgroundColor: accentColor }}
        >
          <span className="text-[#171717]">{cta}</span>
          <ArrowUpRight className="w-4 h-4 text-[#171717] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};
