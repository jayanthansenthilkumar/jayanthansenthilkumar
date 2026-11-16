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
      className="group relative flex flex-col justify-between items-center sm:items-start text-center sm:text-left h-full p-2 xs:p-2.5 sm:p-4 md:p-5 rounded-none border border-[#E4DFD3] hover:border-[#18181B] editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] min-w-0"
    >
      {/* Top Section: Centered on mobile, row on tablet/desktop */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-1 sm:gap-3.5 w-full min-w-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3.5 w-full sm:w-auto min-w-0 text-center sm:text-left">
          {/* Icon Box */}
          <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-none bg-[#EFEAE0] group-hover:bg-[#E7E0D2] border border-[#DDD5C5] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200 mx-auto sm:mx-0">
            {isPortfolio ? (
              <FolderGit2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={1.75} />
            ) : (
              <BookOpenText className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={1.75} />
            )}
          </div>

          {/* Title and Index Stacked: Centered Below Icon on Mobile, Beside Icon on Desktop */}
          <div className="min-w-0 w-full sm:w-auto text-center sm:text-left">
            <span className="font-mono text-[8px] xs:text-[9px] sm:text-[11px] font-semibold text-[#71717A] tracking-wider uppercase block truncate text-center sm:text-left">
              <span className="sm:hidden">{index} · {isPortfolio ? "PORTFOLIO" : "BLOGS"}</span>
              <span className="hidden sm:inline">{index} / {badge}</span>
            </span>
            <h2 className="font-['Manrope',sans-serif] text-[11px] xs:text-xs sm:text-lg md:text-xl font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight truncate text-center sm:text-left">
              {title}
            </h2>
          </div>
        </div>

        {/* Desktop Quick Action Arrow on Top Right */}
        <div className="text-[#71717A] group-hover:text-[#18181B] shrink-0 hidden sm:block">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Middle Desktop Subtitle */}
      <p className="font-['Manrope',sans-serif] text-xs sm:text-[13px] md:text-sm text-[#52525B] leading-relaxed line-clamp-2 hidden md:block mt-2 min-w-0">
        {subtitle}
      </p>

      {/* Bottom CTA Action Bar: Centered on mobile, spaced between on tablet/desktop */}
      <div className="shrink-0 flex items-center justify-center sm:justify-between w-full pt-1.5 sm:pt-2.5 border-t border-[#E8E4DA]/70 mt-1.5 sm:mt-2.5">
        <span className="font-mono text-[8px] sm:text-[10px] text-[#71717A] uppercase tracking-wider truncate hidden sm:inline">
          {isPortfolio ? "PORTFOLIO" : "BLOGS"}
        </span>

        <span className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-none bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#DDD7C9] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-200 shrink-0 shadow-2xs mx-auto sm:mx-0">
          <span className="sm:hidden">{isPortfolio ? "Explore" : "Read"}</span>
          <span className="hidden sm:inline">{cta}</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
