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
      className="group relative flex flex-col justify-between bg-slate-900/70 hover:bg-slate-800/80 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 curved-card-interactive overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shadow-xl"
    >
      {/* Ambient background hover glow */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${
          isPortfolio ? "bg-sky-400" : "bg-indigo-400"
        }`}
      />

      {/* Top Meta Header Row */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 font-mono text-xs font-bold text-sky-400">
              {index}
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              {badge}
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-sky-400 group-hover:text-slate-950 group-hover:border-sky-400 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Title & Icon Header */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-2 rounded-xl bg-white/5 text-sky-400 border border-white/10">
            {isPortfolio ? (
              <FolderGit2 className="w-5 h-5" />
            ) : (
              <BookOpenText className="w-5 h-5 text-indigo-400" />
            )}
          </div>
          <h2 className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {title}
          </h2>
        </div>

        {/* Subtitle / Description */}
        <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* Bottom CTA Action Bar */}
      <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-sky-400 transition-colors">
          <span>{cta}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>

        <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest hidden xs:inline">
          DIRECT ROUTING
        </span>
      </div>
    </a>
  );
};
