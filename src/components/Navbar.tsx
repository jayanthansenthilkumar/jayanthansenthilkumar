import { FC, useState } from "react";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { branding, destinations, social } = PORTAL_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4E4CC] border-b-[3px] border-[#171717] px-4 sm:px-6 lg:px-12 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Branding & Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            aria-label="Jayanthan Senthilkumar Home"
          >
            {/* Monogram Badge */}
            <div className="w-10 h-10 rounded-xl bg-[#FF713D] border-2 border-[#171717] flex items-center justify-center font-['Archivo_Black',sans-serif] text-sm text-[#171717] brutal-shadow-sm group-hover:rotate-6 transition-transform">
              {branding.monogram}
            </div>

            {/* Site Name Branding */}
            <div className="flex flex-col">
              <span className="font-['Archivo_Black',sans-serif] text-lg sm:text-xl tracking-tight text-[#171717]">
                {branding.siteName}
              </span>
              <span className="font-mono text-[10px] text-[#171717]/70 font-bold uppercase tracking-wider hidden xs:block">
                CENTRAL PERSONAL PORTAL
              </span>
            </div>
          </a>
        </div>

        {/* Right: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-2 lg:gap-3 font-['Space_Grotesk',sans-serif] text-sm font-bold"
          aria-label="Main Navigation"
        >
          {/* HOME */}
          <button
            type="button"
            onClick={scrollToTop}
            className="px-4 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-[#FFFDF7] rounded-xl transition-all duration-150 uppercase tracking-wider text-[#171717] cursor-pointer"
          >
            HOME
          </button>

          {/* PORTFOLIO (External Redirection) */}
          <a
            href={destinations.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-[#FFFDF7] rounded-xl transition-all duration-150 uppercase tracking-wider text-[#171717] group"
          >
            <span>PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* BLOGS (External Redirection) */}
          <a
            href={destinations.blogs.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-[#FFFDF7] rounded-xl transition-all duration-150 uppercase tracking-wider text-[#171717] group"
          >
            <span>BLOGS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* CONTACT CTA Button */}
          <a
            href="mailto:jayanthansenthilkumar18@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2ED37] border-2 border-[#171717] rounded-xl text-[#171717] brutal-btn uppercase tracking-wider text-xs font-bold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </a>

          {/* Distinctive Neo-Brutalist Circular Sticker Button */}
          <div
            className="w-10 h-10 rounded-full bg-[#46D9BC] border-2 border-[#171717] flex items-center justify-center font-mono text-xs font-bold brutal-shadow-sm select-none ml-1 cursor-default hover:rotate-12 transition-transform"
            title="Active 2026 Portal"
            aria-hidden="true"
          >
            ✦
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-[#FFFDF7] border-2 border-[#171717] rounded-xl brutal-btn text-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-4 pb-6 border-t-2 border-[#171717] bg-[#FFFDF7] rounded-2xl p-5 border-2 brutal-shadow-lg">
          <div className="flex flex-col gap-3 font-['Space_Grotesk',sans-serif] text-base font-bold">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left py-3 px-4 rounded-xl border-2 border-[#171717] bg-[#F4E4CC] text-[#171717] brutal-shadow-sm"
            >
              HOME
            </button>

            <a
              href={destinations.portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl border-2 border-[#171717] bg-[#FF713D] text-[#171717] brutal-shadow-sm"
            >
              <span>PORTFOLIO</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href={destinations.blogs.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl border-2 border-[#171717] bg-[#46D9BC] text-[#171717] brutal-shadow-sm"
            >
              <span>BLOGS</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="mailto:jayanthansenthilkumar18@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl border-2 border-[#171717] bg-[#F2ED37] text-[#171717] brutal-shadow-sm"
            >
              <span>CONTACT</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Social Links on Mobile */}
          <div className="mt-5 pt-4 border-t-2 border-[#171717]/20 flex items-center justify-center gap-3">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#F4E4CC] border-2 border-[#171717] rounded-lg font-mono text-xs font-bold text-[#171717] brutal-shadow-sm"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
