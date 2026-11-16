import { FC } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { branding, social } = PORTAL_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toUpperCase()) {
      case "GITHUB":
        return <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />;
      case "LINKEDIN":
        return <LinkedinIcon className="w-3.5 h-3.5" aria-hidden="true" />;
      case "EMAIL":
        return <MailIcon className="w-3.5 h-3.5" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Portal Footer"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2 sm:py-2.5 shrink-0 z-20"
    >
      <div className="flex flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-white/10 text-slate-400 font-sans text-[11px] sm:text-xs">
        {/* Left: Branding & Copyright */}
        <div className="flex items-center gap-2 truncate">
          <span className="font-['Outfit',sans-serif] font-bold text-white tracking-tight">
            {branding.siteName}
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-slate-400 truncate">
            &copy; {currentYear} Jayanthan Senthilkumar.
          </span>
        </div>

        {/* Right: Social Destinations & Top Action */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-sky-400/50 transition-all duration-150"
            >
              {getSocialIcon(s.name)}
              <span className="hidden md:inline font-medium text-[11px]">{s.name}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500 hidden md:inline" />
            </a>
          ))}

          {/* Quick Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-400/30 transition-all duration-150 cursor-pointer"
          >
            <span className="text-[10px] font-bold">TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
