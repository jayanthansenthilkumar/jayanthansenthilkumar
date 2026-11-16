import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Executive IT Portfolio Gateway"
      className="flex-1 min-h-0 flex flex-col justify-between w-full max-w-[98vw] 2xl:max-w-[1760px] mx-auto px-3 sm:px-6 lg:px-10 py-1.5 sm:py-2.5 z-10"
    >
      {/* =========================================================================
          1. TOP IDENTITY & STATUS BAR (Refined Editorial Header - Scaled Up)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-3 shrink-0 pb-2 sm:pb-3 border-b border-[#E6E2D8]">
        {/* Left: Monogram & Professional Branding */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-none bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-['Manrope',sans-serif] font-bold text-base sm:text-lg shadow-xs shrink-0">
            {branding.monogram}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-['Manrope',sans-serif] text-lg sm:text-xl font-bold tracking-tight text-[#18181B] truncate">
                {branding.siteName}
              </span>
              <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-none bg-[#EFECE5] text-[#52525B] border border-[#DDD7C9] font-mono font-medium hidden xs:inline">
                IT PRO
              </span>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#52525B] font-medium truncate">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 rounded-none bg-[#FFFFFF] border border-[#E4DFD3] font-mono text-xs sm:text-sm text-[#18181B] shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-none bg-emerald-500 status-indicator-dot" />
            <span className="font-semibold whitespace-nowrap">{person.status}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. CENTER HERO: FULL SPACE UTILIZATION (MASSIVE NAME + PROMINENT PORTRAIT)
          Commanding Masthead Presence Across Viewport
          ========================================================================= */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 my-0.5 sm:my-1 overflow-visible">
        {/* Soft Ambient Warm Paper Glow directly behind portrait */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[580px] md:w-[820px] h-[380px] sm:h-[580px] md:h-[820px] rounded-full calm-ambient-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Massive double-line architectural name spanning the full viewport */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="text-center w-full px-1">
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.06em]"
              style={{
                fontSize: "clamp(3.5rem, min(14.5vw, 18vh), 13.5rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.03em]"
              style={{
                fontSize: "clamp(3.5rem, min(14.5vw, 18vh), 13.5rem)",
              }}
            >
              {person.lastName}
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Centered Cutout Portrait (hero.png) - Substantially Enlarged */}
        <div className="relative z-10 flex justify-center items-end h-full">
          <div className="relative h-full flex items-end">
            <img
              src="/hero.png"
              alt="Jayanthan Senthilkumar - Senior Software Engineer & IT Professional"
              className="relative z-10 w-auto object-contain object-bottom drop-shadow-[0_18px_40px_rgba(24,24,27,0.13)] transition-transform duration-300 hover:scale-[1.01]"
              style={{
                height: "min(50vh, 580px)",
                maxHeight: "min(50vh, 580px)",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Specialization Pill Floating across the portrait base */}
        <div className="absolute bottom-0 z-20 hidden xs:flex items-center justify-center gap-2 px-4.5 py-1.5 rounded-none bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E4DFD3] shadow-xs">
          <Terminal className="w-4 h-4 text-[#18181B]" />
          <span className="font-mono text-xs sm:text-sm text-[#3F3F46] font-medium tracking-wide">
            {person.specialization}
          </span>
        </div>
      </div>

      {/* =========================================================================
          3. SQUARED NAVIGATION DOCK: ARCHITECTURAL SQUARED PANEL
          Maximum Horizontal Space Utilization with Squared Geometries
          ========================================================================= */}
      <div className="shrink-0 w-full mb-1 sm:mb-2">
        <div className="curved-editorial-panel rounded-none p-3.5 sm:p-5 max-w-[98vw] 2xl:max-w-[1760px] mx-auto w-full relative">
          {/* Eyebrow Header inside Squared Layout */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#E6E2D8] font-mono text-xs sm:text-[13px]">
            <div className="flex items-center gap-2 text-[#18181B] font-bold uppercase tracking-wider shrink-0">
              <span className="w-2.5 h-2.5 rounded-none bg-[#18181B]" />
              <span>DIRECT DESTINATIONS</span>
            </div>
            <span className="text-[#52525B] hidden sm:inline font-['Cormorant_Garamond',serif] italic text-base sm:text-lg font-semibold truncate">
              &ldquo;{person.statement}&rdquo;
            </span>
          </div>

          {/* Two Destination Cards: MY PORTFOLIO & MY BLOGS (Full Horizontal Length) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
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
