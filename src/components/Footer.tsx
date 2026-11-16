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
        return <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />;
      case "LINKEDIN":
        return <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />;
      case "EMAIL":
        return <MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Portal Footer"
      className="w-full max-w-[98vw] 2xl:max-w-[1760px] mx-auto px-2.5 sm:px-6 lg:px-10 py-2 sm:py-2 pb-4 sm:pb-2 shrink-0 z-20"
    >
      <div className="flex flex-row items-center justify-between gap-2 sm:gap-3 pt-1.5 sm:pt-2 border-t border-[#E6E2D8] text-[#71717A] font-['Manrope',sans-serif] text-[10px] sm:text-xs md:text-sm">
        {/* Left: Copyright & Editorial Credits */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <span className="font-['Manrope',sans-serif] font-bold text-[#18181B] text-xs sm:text-sm md:text-base tracking-tight shrink-0">
            {branding.siteName}
          </span>
          <span className="text-[#D0C9BA]">•</span>
          <span className="text-[#52525B] text-[9px] sm:text-xs shrink-0 sm:hidden">
            &copy; {currentYear}
          </span>
          <span className="truncate text-[#52525B] text-xs hidden sm:inline">
            &copy; {currentYear} Jayanthan Senthilkumar.
          </span>
          <span className="text-[#D0C9BA] hidden lg:inline">•</span>
          <span className="hidden lg:inline text-[#71717A]">
            Designed &amp; Developed by Jayanthan.
          </span>
        </div>

        {/* Right: Social Destinations & Top Action (Compact on Mobile) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#18181B] border border-[#E6E2D8] hover:border-[#D0C9BA] text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-150"
            >
              {getSocialIcon(s.name)}
              <span className="hidden sm:inline">{s.name}</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717A] hidden sm:inline" />
            </a>
          ))}

          {/* Quick Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-[#EAE5D9] hover:bg-[#18181B] text-[#18181B] hover:text-[#FAF8F5] border border-[#DDD7C9] text-[10px] sm:text-xs font-bold transition-all duration-150 cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
