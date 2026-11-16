import { FC } from "react";
import { ArrowUp } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MediumIcon, MailIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GITHUB":
        return <GithubIcon className="w-4 h-4" />;
      case "LINKEDIN":
        return <LinkedinIcon className="w-4 h-4" />;
      case "MEDIUM":
        return <MediumIcon className="w-4 h-4" />;
      case "EMAIL":
        return <MailIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative z-10 w-full bg-[#080A09] border-t-2 border-[#172019] py-6 px-4 sm:px-6 lg:px-12 mt-auto">
      {/* Honeycomb-Inspired Repeating Geometric Border Accent */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none">
        <div className="flex items-center gap-2 font-mono text-[9px] text-[#C6FF00] bg-[#080A09] px-3 border border-[#172019]">
          <span className="w-1.5 h-1.5 bg-[#C6FF00] inline-block"></span>
          <span>HEX-LINE // ENCRYPTED</span>
          <span className="w-1.5 h-1.5 bg-[#C6FF00] inline-block"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        {/* Copyright & Purpose Statement */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-[#F4F4ED] tracking-wider">
            &copy; {currentYear} Jayanthan SenthilKumar.
          </span>
          <span className="hidden sm:inline text-[#858B83]">&bull;</span>
          <span className="text-[#858B83] tracking-wide">
            Designed &amp; Developed with Purpose.
          </span>
        </div>

        {/* Social Links & Back-to-Top Action */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-[#172019] pr-3">
            {PORTAL_CONFIG.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-[#172019] bg-[#111512] text-[#858B83] hover:text-[#080A09] hover:bg-[#C6FF00] hover:border-[#C6FF00] flex items-center justify-center transition-all duration-150"
              >
                {getSocialIcon(s.name)}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of gateway"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#111512] border border-[#172019] hover:border-[#C6FF00] hover:text-[#C6FF00] text-[#858B83] font-bold text-xs transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
