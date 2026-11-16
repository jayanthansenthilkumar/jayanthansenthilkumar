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
      className="w-full max-w-[98vw] 2xl:max-w-[1760px] mx-auto px-3 sm:px-6 lg:px-10 py-2 sm:py-3 shrink-0 z-20"
    >
      <div className="flex flex-row items-center justify-between gap-3 pt-2 sm:pt-2.5 border-t border-[#E6E2D8] text-[#71717A] font-['Manrope',sans-serif] text-xs sm:text-sm">
        {/* Left: Copyright & Editorial Credits */}
        <div className="flex items-center gap-2 sm:gap-3 truncate">
          <span className="font-['Manrope',sans-serif] font-bold text-[#18181B] text-sm sm:text-base tracking-tight">
            {branding.siteName}
          </span>
          <span className="text-[#D0C9BA] hidden xs:inline">•</span>
          <span className="truncate text-[#52525B]">
            &copy; {currentYear} Jayanthan SenthilKumar.
          </span>
          <span className="text-[#D0C9BA] hidden md:inline">•</span>
          <span className="hidden md:inline text-[#71717A]">
            Designed &amp; Developed by Jayanthan.
          </span>
        </div>

        {/* Right: Social Destinations & Top Action (Squared & Scaled) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-none bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#18181B] border border-[#E6E2D8] hover:border-[#D0C9BA] text-xs sm:text-sm font-semibold transition-all duration-150"
            >
              {getSocialIcon(s.name)}
              <span className="hidden sm:inline">{s.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] hidden sm:inline" />
            </a>
          ))}

          {/* Quick Back to Top (Squared) */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-none bg-[#EAE5D9] hover:bg-[#18181B] text-[#18181B] hover:text-[#FAF8F5] border border-[#DDD7C9] text-xs font-bold transition-all duration-150 cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
