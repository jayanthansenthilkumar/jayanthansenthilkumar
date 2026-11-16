import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { social } = PORTAL_CONFIG;

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
      className="w-full bg-[#FFFDF7] border-t-2 sm:border-t-[3px] border-[#171717] px-4 sm:px-6 lg:px-12 py-2 sm:py-2.5 z-20 shrink-0"
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 font-mono text-[10px] sm:text-xs">
        {/* Left: Dynamic Copyright */}
        <div className="flex items-center gap-2 text-[#171717]/80 font-bold truncate">
          <span>&copy; {currentYear} Jayanthan Senthilkumar.</span>
          <span className="hidden md:inline text-[#171717]/40">•</span>
          <span className="hidden md:inline text-[#171717]/70">ALL SYSTEMS GO</span>
        </div>

        {/* Right: Social Links with Neo-Brutalist Badges */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-[#F4E4CC] hover:bg-[#FF713D] hover:text-[#FFFDF7] border border-[#171717] rounded-md font-mono text-[10px] sm:text-xs font-bold text-[#171717] brutal-shadow-sm transition-all duration-150"
            >
              {getSocialIcon(s.name)}
              <span className="hidden sm:inline">{s.name}</span>
              <ArrowUpRight className="w-3 h-3 hidden sm:inline" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
