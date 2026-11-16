import { FC } from "react";
import { ArrowUpRight, FolderGit2, BookOpenText } from "lucide-react";

interface DestinationCardProps {
  index: string;
  title: string;
  subtitle: string;
  cta: string;
  url: string;
  badge: string;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  index,
  title,
  subtitle,
  cta,
  url,
  badge,
  ariaLabel,
}) => {
  const isPortfolio = index === "01";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B]"
    >
      {/* Left Icon & Information Stack */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0ECE3] group-hover:bg-[#EAE4D7] border border-[#E4DFD3] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200">
          {isPortfolio ? (
            <FolderGit2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
          ) : (
            <BookOpenText className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-[9px] sm:text-[10px] font-semibold text-[#71717A] tracking-wider uppercase">
              {index} / {badge}
            </span>
          </div>
          <h2 className="font-['Manrope',sans-serif] text-sm sm:text-base font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight truncate">
            {title}
          </h2>
          <p className="font-['Manrope',sans-serif] text-[11px] sm:text-xs text-[#52525B] leading-snug truncate hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Action CTA Pill */}
      <div className="shrink-0 flex items-center justify-between xs:justify-end w-full xs:w-auto pt-1.5 xs:pt-0 border-t border-[#E8E4DA]/60 xs:border-0">
        <span className="font-mono text-[9px] text-[#71717A] uppercase tracking-wider xs:hidden">
          {isPortfolio ? "PORTFOLIO" : "BLOGS"}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#E2DDD2] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-[11px] sm:text-xs font-semibold transition-all duration-200">
          <span>{cta}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
