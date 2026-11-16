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
      className="group relative flex flex-col xs:flex-row xs:items-center justify-between gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-none border border-[#E4DFD3] hover:border-[#18181B] editorial-card-interactive cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B]"
    >
      {/* Left Icon & Information Stack */}
      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-[#EFEAE0] group-hover:bg-[#E7E0D2] border border-[#DDD5C5] text-[#18181B] flex items-center justify-center shrink-0 transition-colors duration-200">
          {isPortfolio ? (
            <FolderGit2 className="w-6 h-6" strokeWidth={1.75} />
          ) : (
            <BookOpenText className="w-6 h-6" strokeWidth={1.75} />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[11px] sm:text-xs md:text-[13px] font-semibold text-[#71717A] tracking-wider uppercase">
              {index} / {badge}
            </span>
          </div>
          <h2 className="font-['Manrope',sans-serif] text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#18181B] group-hover:text-black transition-colors leading-tight">
            {title}
          </h2>
          <p className="font-['Manrope',sans-serif] text-[13px] sm:text-sm text-[#52525B] leading-relaxed line-clamp-2 hidden sm:block mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Action CTA Button (Squared & Scaled) */}
      <div className="shrink-0 flex items-center justify-between xs:justify-end w-full xs:w-auto pt-2.5 xs:pt-0 border-t border-[#E8E4DA]/70 xs:border-0">
        <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider xs:hidden">
          {isPortfolio ? "PORTFOLIO" : "BLOGS"}
        </span>
        <span className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-none bg-[#EFECE5] group-hover:bg-[#18181B] text-[#18181B] group-hover:text-[#FAF8F5] border border-[#DDD7C9] group-hover:border-[#18181B] font-['Manrope',sans-serif] text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs">
          <span>{cta}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
