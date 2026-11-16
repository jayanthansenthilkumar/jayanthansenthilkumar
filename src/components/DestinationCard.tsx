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
      className="group relative flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4 md:gap-5 p-3.5 sm:p-4 md:p-5 rounded-none border border-[#E4DFD3] hover:border-[#18181B] editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B]"
    >
      {/* Left Icon & Information Stack */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-[#EFEAE0] group-hover:bg-[#E7E0D2] border border-[#DDD5C5] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200">
          {isPortfolio ? (
            <FolderGit2 className="w-5 h-5" strokeWidth={1.75} />
          ) : (
            <BookOpenText className="w-5 h-5" strokeWidth={1.75} />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#71717A] tracking-wider uppercase">
              {index} / {badge}
            </span>
          </div>
          <h2 className="font-['Manrope',sans-serif] text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight">
            {title}
          </h2>
          <p className="font-['Manrope',sans-serif] text-xs sm:text-[13px] text-[#52525B] leading-relaxed line-clamp-2 hidden sm:block mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Action CTA Button (Squared) */}
      <div className="shrink-0 flex items-center justify-between xs:justify-end w-full xs:w-auto pt-2 xs:pt-0 border-t border-[#E8E4DA]/70 xs:border-0">
        <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider xs:hidden">
          {isPortfolio ? "PORTFOLIO" : "BLOGS"}
        </span>
        <span className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-none bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#DDD7C9] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs">
          <span>{cta}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
