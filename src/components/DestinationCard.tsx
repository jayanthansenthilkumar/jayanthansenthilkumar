import { FC } from "react";
import { ArrowUpRight, FolderGit2, BookOpenText } from "lucide-react";

interface DestinationCardProps {
  index: string;
  title: string;
  subtitle: string;
  cta: string;
  url: string;
  ariaLabel: string;
}

export const DestinationCard: FC<DestinationCardProps> = ({
  index,
  title,
  subtitle,
  cta,
  url,
  ariaLabel,
}) => {
  const isPortfolio = index === "01";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex flex-col justify-between p-2.5 sm:p-4 md:p-5 rounded-none border border-[#E4DFD3] hover:border-[#18181B] editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] min-w-0"
    >
      {/* Top Meta: Index/Badge and Floating Action Arrow */}
      <div className="flex items-center justify-between gap-1.5 mb-1 sm:mb-2 min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-none bg-[#EFEAE0] group-hover:bg-[#E7E0D2] border border-[#DDD5C5] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200">
            {isPortfolio ? (
              <FolderGit2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={1.75} />
            ) : (
              <BookOpenText className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={1.75} />
            )}
          </div>
        </div>

        {/* Mobile quick arrow indicator */}
        <div className="sm:hidden text-[#18181B] shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Middle Headline & Desktop Subtitle */}
      <div className="min-w-0 my-0.5 sm:my-1">
        <h2 className="font-['Manrope',sans-serif] text-xs xs:text-sm sm:text-lg md:text-xl font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight truncate sm:whitespace-normal">
          {title}
        </h2>
        <p className="font-['Manrope',sans-serif] text-xs sm:text-[13px] md:text-sm text-[#52525B] leading-relaxed line-clamp-2 hidden md:block mt-1">
          {subtitle}
        </p>
      </div>

      {/* Bottom CTA Action Bar (Aligned in single row) */}
      <div className="shrink-0 flex items-center justify-between w-full pt-1.5 sm:pt-2.5 border-t border-[#E8E4DA]/70 mt-1 sm:mt-2">
        <span className="font-mono text-[8px] sm:text-[10px] text-[#71717A] uppercase tracking-wider truncate">
          {isPortfolio ? "PORTFOLIO" : "BLOGS"}
        </span>

        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-none bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#DDD7C9] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-200 shrink-0">
          <span className="sm:hidden">{isPortfolio ? "Explore" : "Read"}</span>
          <span className="hidden sm:inline">{cta}</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
