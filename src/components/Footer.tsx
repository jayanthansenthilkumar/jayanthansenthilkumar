import { FC } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { SawtoothDivider } from "@/components/ui/SawtoothDivider";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { branding, footer, destinations, social } = PORTAL_CONFIG;

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
    <footer className="w-full bg-[#FFFDF7] border-t-[3px] border-[#171717] mt-auto">
      {/* Sawtooth Accent Ribbon */}
      <SawtoothDivider height={12} color="#171717" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Left: Branding & Purpose Motto */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF713D] border-2 border-[#171717] flex items-center justify-center font-['Archivo_Black',sans-serif] text-xs text-[#171717] brutal-shadow-sm">
                {branding.monogram}
              </div>
              <span className="font-['Archivo_Black',sans-serif] text-xl tracking-tight text-[#171717]">
                {branding.siteName}
              </span>
            </div>
            <p className="font-sans text-sm font-semibold text-[#171717]/80 italic">
              &ldquo;{footer.motto}&rdquo;
            </p>
          </div>

          {/* Center: Essential Navigation Links */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-center gap-4 font-['Space_Grotesk',sans-serif] text-sm font-bold text-[#171717]">
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#FF713D] transition-colors uppercase cursor-pointer"
            >
              Home
            </button>
            <span>•</span>
            <a
              href={destinations.portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 hover:text-[#FF713D] transition-colors uppercase"
            >
              <span>Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <a
              href={destinations.blogs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 hover:text-[#FF713D] transition-colors uppercase"
            >
              <span>Blogs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Social Destinations & Back-To-Top Button */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-[#F4E4CC] border-2 border-[#171717] flex items-center justify-center text-[#171717] hover:bg-[#FF713D] hover:text-[#FFFDF7] brutal-shadow-sm transition-all duration-150"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2ED37] border-2 border-[#171717] rounded-xl font-mono text-xs font-bold text-[#171717] brutal-btn uppercase cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Micro Row: Copyright */}
        <div className="mt-8 pt-6 border-t-2 border-[#171717]/15 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-[#171717]/70 text-center sm:text-left">
          <span>
            &copy; {currentYear} Jayanthan Senthilkumar. All rights reserved.
          </span>
          <span className="font-bold text-[#171717]">
            jayanthan.fyi // Central Digital Gateway
          </span>
        </div>
      </div>
    </footer>
  );
};
