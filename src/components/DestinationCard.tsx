import { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  number: string;
  title: string;
  subtitle: string;
  cta: string;
  url: string;
  accentColor: string;
  tag: string;
  illustration: ReactNode;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  number,
  title,
  subtitle,
  cta,
  url,
  accentColor,
  tag,
  illustration,
  ariaLabel,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex flex-col justify-between bg-[#FFFDF7] border-[3px] border-[#171717] rounded-2xl p-5 sm:p-7 brutal-card overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#171717] focus-visible:ring-offset-4 cursor-pointer"
    >
      {/* Top Header Row with Number Pill and Tag */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center px-3 py-1 border-2 border-[#171717] rounded-lg font-mono text-xs sm:text-sm font-bold tracking-wider brutal-shadow-sm text-[#171717]"
              style={{ backgroundColor: accentColor }}
            >
              CARD {number}
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-bold text-[#171717]/70 uppercase tracking-wider hidden xs:inline">
              {tag}
            </span>
          </div>

          {/* Mini Corner Sticker Badge */}
          <div className="w-8 h-8 rounded-full border-2 border-[#171717] bg-[#171717] text-[#FFFDF7] flex items-center justify-center group-hover:bg-[#FF713D] group-hover:text-[#171717] group-hover:rotate-45 transition-all duration-200">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Custom Vector Illustration Canvas */}
        <div className="mb-6 p-2 sm:p-4 bg-[#F4E4CC]/40 border-2 border-[#171717] rounded-xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-200">
          {illustration}
        </div>

        {/* Card Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="font-['Archivo_Black',sans-serif] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#171717] group-hover:text-[#FF713D] transition-colors leading-[1.05]">
            {title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#171717]/80 leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Action CTA Button at Bottom */}
      <div className="pt-6 mt-6 border-t-2 border-[#171717]/20">
        <div
          className="w-full flex items-center justify-between px-5 py-3.5 border-2 border-[#171717] rounded-xl font-['Space_Grotesk',sans-serif] text-sm sm:text-base font-bold tracking-wider brutal-btn uppercase"
          style={{ backgroundColor: accentColor }}
        >
          <span className="text-[#171717]">{cta}</span>
          <ArrowUpRight className="w-5 h-5 text-[#171717] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};
