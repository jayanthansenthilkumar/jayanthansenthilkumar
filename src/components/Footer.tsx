import { FC } from "react";
import { ArrowUp } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MediumIcon, MailIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIcon = (name: string) => {
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
    <footer className="border-t-2 border-[#0A0A0A] bg-[#FFFFFF] py-6 px-4 sm:px-6 lg:px-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        {/* Copyright & Signature */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[#0A0A0A] text-center sm:text-left">
          <span className="font-bold">
            &copy; {currentYear} Jayanthan SenthilKumar.
          </span>
          <span className="hidden sm:inline text-[#888888]">&bull;</span>
          <span className="text-[#555555] italic">
            Designed &amp; Developed with Purpose.
          </span>
        </div>

        {/* Social Links & Back-to-Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-[#0A0A0A] pr-3">
            {PORTAL_CONFIG.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-[#0A0A0A] bg-[#FAF8F5] text-[#0A0A0A] hover:bg-[#CCFF00] hover:text-[#0A0A0A] flex items-center justify-center transition-colors"
              >
                {getIcon(s.name)}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF8F5] border border-[#0A0A0A] hover:bg-[#CCFF00] text-[#0A0A0A] font-bold text-xs transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

