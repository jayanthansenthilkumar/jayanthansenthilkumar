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
        return <GithubIcon className="w-4 h-4" aria-hidden="true" />;
      case "LINKEDIN":
        return <LinkedinIcon className="w-4 h-4" aria-hidden="true" />;
      case "EMAIL":
        return <MailIcon className="w-4 h-4" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Portal Footer"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-12 mt-2"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-slate-400 font-sans text-xs sm:text-sm">
        {/* Left: Monogram and Dynamic Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-['Outfit',sans-serif] font-bold text-white text-base tracking-tight">
            {branding.siteName}
          </span>
          <span className="text-white/20">•</span>
          <span>
            &copy; {currentYear} Jayanthan Senthilkumar. All rights reserved.
          </span>
        </div>

        {/* Right: Social Links & Back-to-Top Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-sky-400/50 transition-all duration-200"
            >
              {getSocialIcon(s.name)}
              <span className="hidden sm:inline font-medium text-xs">{s.name}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
          ))}

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-400/30 transition-all duration-200 cursor-pointer ml-1"
          >
            <span className="text-xs font-semibold">TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
