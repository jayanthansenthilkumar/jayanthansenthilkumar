import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Executive IT Portfolio Gateway"
      className="flex-1 min-h-0 flex flex-col justify-between w-full max-w-[98vw] 2xl:max-w-[1760px] mx-auto px-2.5 sm:px-6 lg:px-10 py-1 sm:py-2.5 z-10 overflow-hidden"
    >
      {/* =========================================================================
          1. TOP IDENTITY & STATUS BAR (Responsive & Overflow-Guarded)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-2 sm:gap-3 shrink-0 pb-1.5 sm:pb-2.5 border-b border-[#E6E2D8]">
        {/* Left: Monogram & Professional Branding */}
        <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-none bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-['Manrope',sans-serif] font-bold text-sm sm:text-base md:text-lg shadow-xs shrink-0">
            {branding.monogram}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-['Manrope',sans-serif] text-sm sm:text-lg md:text-xl font-bold tracking-tight text-[#18181B] truncate">
                {branding.siteName}
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-none bg-[#EFECE5] text-[#52525B] border border-[#DDD7C9] font-mono font-medium shrink-0">
                SAP PRO
              </span>
            </div>
            <span className="font-mono text-[10px] sm:text-xs md:text-sm text-[#52525B] font-medium truncate">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability Badge (Shortened on Mobile to Prevent Overflow) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-none bg-[#FFFFFF] border border-[#E4DFD3] font-mono text-[10px] sm:text-xs md:text-sm text-[#18181B] shadow-2xs">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-none bg-emerald-500 status-indicator-dot shrink-0" />
            <span className="font-semibold whitespace-nowrap sm:hidden">Available</span>
            <span className="font-semibold whitespace-nowrap hidden sm:inline">{person.status}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. CENTER HERO: FULL SPACE UTILIZATION WITH ZERO-SCROLL GUARANTEE
          ========================================================================= */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 my-0.5 sm:my-1 overflow-visible">
        {/* Soft Ambient Warm Paper Glow directly behind portrait */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] md:w-[760px] h-[280px] sm:h-[500px] md:h-[760px] rounded-full calm-ambient-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Massive double-line architectural name */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="text-center w-full px-1">
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.05em]"
              style={{
                fontSize: "clamp(2.4rem, min(13.5vw, 15vh), 12.5rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.025em]"
              style={{
                fontSize: "clamp(2.4rem, min(13.5vw, 15vh), 12.5rem)",
              }}
            >
              {person.lastName}
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Centered Cutout Portrait (hero.png) */}
        <div className="relative z-10 flex justify-center items-end h-full">
          <div className="relative h-full flex items-end">
            <img
              src="/hero.png"
              alt="Jayanthan Senthilkumar - SAP Backend Engineer"
              className="relative z-10 w-auto object-contain object-bottom h-[32vh] xs:h-[35vh] sm:h-[42vh] md:h-[48vh] max-h-[540px] drop-shadow-[0_14px_32px_rgba(24,24,27,0.12)] transition-transform duration-300 hover:scale-[1.01]"
              style={{
                maxHeight: "min(48vh, 540px)",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Specialization Pill Floating across the portrait base */}
        <div className="absolute bottom-0 z-20 flex items-center justify-center gap-1.5 px-3 py-0.5 sm:px-4 sm:py-1 rounded-none bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E4DFD3] shadow-xs max-w-[94%] truncate">
          <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#18181B] shrink-0" />
          <span className="font-mono text-[9px] sm:text-xs md:text-sm text-[#3F3F46] font-medium tracking-wide truncate">
            {person.specialization}
          </span>
        </div>
      </div>

      {/* =========================================================================
          3. SQUARED NAVIGATION DOCK: TWO BUTTONS IN SINGLE ROW (grid-cols-2)
          ========================================================================= */}
      <div className="shrink-0 w-full mb-0.5 sm:mb-1.5">
        <div className="curved-editorial-panel rounded-none p-2 sm:p-3.5 md:p-4.5 max-w-[98vw] 2xl:max-w-[1760px] mx-auto w-full relative">
          {/* Eyebrow Header inside Squared Layout */}
          <div className="relative z-10 flex items-center justify-between gap-3 mb-1.5 sm:mb-2.5 pb-1 sm:pb-2 border-b border-[#E6E2D8] font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-[#18181B] font-bold uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-none bg-[#18181B]" />
              <span>DIRECT DESTINATIONS</span>
            </div>
            <span className="text-[#52525B] hidden md:inline font-['Cormorant_Garamond',serif] italic text-sm sm:text-base font-semibold truncate">
              &ldquo;{person.statement}&rdquo;
            </span>
          </div>

          {/* TWO DESTINATION BUTTONS IN A SINGLE ROW ACROSS ALL DEVICES */}
          <div
            className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3.5 md:gap-4.5 w-full items-stretch"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Destination 01: MY PORTFOLIO */}
            <DestinationCard
              index={destinations.portfolio.index}
              title={destinations.portfolio.title}
              subtitle={destinations.portfolio.subtitle}
              cta={destinations.portfolio.cta}
              url={destinations.portfolio.url}
              badge={destinations.portfolio.badge}
              ariaLabel="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
            />

            {/* Destination 02: MY BLOGS */}
            <DestinationCard
              index={destinations.blogs.index}
              title={destinations.blogs.title}
              subtitle={destinations.blogs.subtitle}
              cta={destinations.blogs.cta}
              url={destinations.blogs.url}
              badge={destinations.blogs.badge}
              ariaLabel="Navigate to Jayanthan Senthilkumar's Engineering Blogs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
