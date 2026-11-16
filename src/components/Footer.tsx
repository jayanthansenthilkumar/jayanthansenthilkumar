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
      className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 shrink-0 z-20"
    >
      <div className="flex flex-row items-center justify-between gap-3 pt-2 sm:pt-2.5 border-t border-[#E6E2D8] text-[#71717A] font-['Manrope',sans-serif] text-[11px] sm:text-xs">
        {/* Left: Copyright & Editorial Credits */}
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="font-['Manrope',sans-serif] font-bold text-[#18181B] tracking-tight">
            {branding.siteName}
          </span>
          <span className="text-[#D0C9BA] hidden xs:inline">•</span>
          <span className="truncate">
            &copy; {currentYear} Jayanthan SenthilKumar.
          </span>
          <span className="text-[#D0C9BA] hidden md:inline">•</span>
          <span className="hidden md:inline text-[#8E887E]">
            Designed &amp; Developed by Jayanthan.
          </span>
        </div>

        {/* Right: Social Destinations & Top Action */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#18181B] border border-[#E6E2D8] hover:border-[#D0C9BA] transition-all duration-150"
            >
              {getSocialIcon(s.name)}
              <span className="hidden sm:inline font-medium text-[11px]">{s.name}</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717A] hidden sm:inline" />
            </a>
          ))}

          {/* Quick Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAE5D9] hover:bg-[#18181B] text-[#18181B] hover:text-[#FAF8F5] border border-[#DDD7C9] transition-all duration-150 cursor-pointer"
          >
            <span className="text-[10px] font-bold">TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
