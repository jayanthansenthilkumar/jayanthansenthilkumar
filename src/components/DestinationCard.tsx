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
      className="group relative flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-3 sm:gap-4 bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 curved-card-interactive overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shadow-lg transition-all duration-200"
    >
      {/* Ambient background hover glow */}
      <div
        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none ${
          isPortfolio ? "bg-sky-400" : "bg-indigo-400"
        }`}
      />

      {/* Left icon & content */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <div
          className={`p-2 sm:p-2.5 rounded-xl border border-white/10 shrink-0 ${
            isPortfolio
              ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
              : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
          }`}
        >
          {isPortfolio ? (
            <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <BookOpenText className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-sky-400 uppercase tracking-wider">
              {badge}
            </span>
          </div>
          <h2 className="font-['Outfit',sans-serif] text-sm sm:text-base md:text-lg font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors leading-tight truncate">
            {title}
          </h2>
          <p className="font-sans text-[11px] sm:text-xs text-slate-400 leading-normal font-normal truncate hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Action CTA Pill */}
      <div className="shrink-0 flex items-center justify-between xs:justify-end w-full xs:w-auto pt-1 xs:pt-0 border-t border-white/5 xs:border-0">
        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest xs:hidden">
          {index === "01" ? "PORTFOLIO" : "BLOGS"}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 group-hover:bg-sky-400 group-hover:text-slate-950 border border-white/10 group-hover:border-sky-400 text-slate-300 font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-xs font-semibold transition-all duration-200">
          <span>{cta}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};
