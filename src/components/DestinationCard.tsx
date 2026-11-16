import { FC } from "react";
import { ArrowUpRight, FolderGit2, BookOpenText } from "lucide-react";

interface DestinationCardProps {
  index: string;
  title: string;
  subtitle: string;
  cta: string;
  url: string;
  badge: string;
  badgeShort?: string;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  index,
  title,
  subtitle,
  cta,
  url,
  badge,
  badgeShort,
  ariaLabel,
}) => {
  const isPortfolio = index === "01";
  const displayBadgeShort = badgeShort || (isPortfolio ? "PORTFOLIO" : "BLOGS");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex flex-col justify-between h-full p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border border-[#E4DFD3] hover:border-[#18181B] editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] focus-visible:ring-offset-2 transition-all duration-200 min-w-0"
    >
      {/* Top Header Block: Icon, Badge, and Title */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-1 sm:gap-2.5 w-full min-w-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3 w-full min-w-0">
          {/* Architectural Icon Container */}
          <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-[#EFEAE0] group-hover:bg-[#E8E1D3] border border-[#DDD5C5] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200">
            {isPortfolio ? (
              <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-[#18181B]" strokeWidth={1.8} />
            ) : (
              <BookOpenText className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-[#18181B]" strokeWidth={1.8} />
            )}
          </div>

          {/* Index and Title */}
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-semibold text-[#71717A] tracking-wider uppercase block truncate">
              <span className="sm:hidden">{index} · {displayBadgeShort}</span>
              <span className="hidden sm:inline">{index} / {badge}</span>
            </span>
            <h2 className="font-['Manrope',sans-serif] text-xs xs:text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight mt-0.5">
              {title}
            </h2>
          </div>
        </div>

        {/* Desktop Quick Action Arrow on Top Right */}
        <div className="text-[#8E8A80] group-hover:text-[#18181B] shrink-0 hidden lg:block transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>

      {/* Middle Descriptive Text: Visible on large desktop to keep compact viewports pristine */}
      <p className="font-['Manrope',sans-serif] text-xs md:text-[13px] text-[#52525B] leading-snug line-clamp-2 hidden xl:block mt-1.5 min-w-0">
        {subtitle}
      </p>

      {/* Bottom CTA Action Bar */}
      <div className="shrink-0 flex items-center justify-between w-full pt-1.5 sm:pt-2 border-t border-[#E8E4DA]/80 mt-1.5 sm:mt-2">
        <span className="font-mono text-[9px] sm:text-[10px] text-[#71717A] uppercase tracking-wider hidden sm:inline truncate">
          {displayBadgeShort}
        </span>

        <span className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#DDD7C9] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-[10px] xs:text-[11px] sm:text-xs font-bold transition-all duration-200 shrink-0 shadow-2xs ml-auto sm:ml-0">
          <span className="sm:hidden">{isPortfolio ? "Explore" : "Read"}</span>
          <span className="hidden sm:inline">{cta}</span>
          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </span>
      </div>
    </a>
  );
};
