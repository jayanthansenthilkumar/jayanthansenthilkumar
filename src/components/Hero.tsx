import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Executive IT Portfolio Gateway"
      className="flex-1 min-h-0 flex flex-col justify-between w-full max-w-5xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2.5 z-10"
    >
      {/* =========================================================================
          1. TOP IDENTITY & STATUS BAR (Minimal Editorial Header)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-3 shrink-0 pb-1.5 sm:pb-2 border-b border-[#E6E2D8]">
        {/* Left: Monogram & Professional Branding */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-['Manrope',sans-serif] font-bold text-xs sm:text-sm shadow-sm shrink-0">
            {branding.monogram}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-['Manrope',sans-serif] text-sm sm:text-base font-bold tracking-tight text-[#18181B] truncate">
                {branding.siteName}
              </span>
              <span className="text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded-full bg-[#EFECE5] text-[#52525B] border border-[#DDD7C9] font-mono font-medium hidden xs:inline">
                IT PRO
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#71717A] font-medium truncate">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#FFFFFF] border border-[#E4DFD3] font-mono text-[9px] sm:text-[10px] text-[#18181B] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-indicator-dot" />
            <span className="font-medium whitespace-nowrap">{person.status}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. CENTER HERO: DOUBLE-LINE NAME BEHIND HERO.PNG CUTOUT
          Scale-calibrated for all standard phone, laptop, and monitor sizes
          ========================================================================= */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 my-1 sm:my-1.5 overflow-visible">
        {/* Soft Ambient Paper Backlight directly behind portrait */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[340px] md:w-[440px] h-[240px] sm:h-[340px] md:h-[440px] rounded-full calm-ambient-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Double-line massive editorial name typography */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="text-center w-full px-1">
            <div
              className="editorial-name-layer leading-[0.84] text-[#18181B] tracking-tight transition-opacity duration-300"
              style={{
                fontSize: "clamp(2.2rem, min(8.5vw, 11.5vh), 7.2rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="editorial-name-layer leading-[0.84] text-[#18181B] tracking-tight transition-opacity duration-300"
              style={{
                fontSize: "clamp(2.2rem, min(8.5vw, 11.5vh), 7.2rem)",
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
              alt="Jayanthan Senthilkumar - Senior Software Engineer & IT Professional"
              className="relative z-10 w-auto object-contain object-bottom drop-shadow-[0_10px_22px_rgba(24,24,27,0.08)] transition-transform duration-300 hover:scale-[1.01]"
              style={{
                height: "min(36vh, 400px)",
                maxHeight: "min(36vh, 400px)",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Specialization Pill Floating across the portrait base */}
        <div className="absolute bottom-0 z-20 hidden xs:flex items-center justify-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E4DFD3] shadow-xs">
          <Terminal className="w-3 h-3 text-[#18181B]" />
          <span className="font-mono text-[9px] sm:text-[10px] text-[#52525B] font-medium">
            {person.specialization}
          </span>
        </div>
      </div>

      {/* =========================================================================
          3. CURVED NAVIGATION COMPOSITION: ARCHITECTURAL CURVED PANEL
          Houses MY PORTFOLIO & MY BLOGS
          ========================================================================= */}
      <div className="shrink-0 w-full mb-0.5 sm:mb-1">
        <div className="curved-editorial-panel rounded-xl sm:rounded-2xl lg:rounded-[24px] p-2 sm:p-3 max-w-4xl mx-auto w-full relative">
          {/* Eyebrow Header inside Curved Layout */}
          <div className="relative z-10 flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-[#E6E2D8] font-mono text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-1.5 text-[#18181B] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
              <span>DIRECT DESTINATIONS</span>
            </div>
            <span className="text-[#71717A] hidden sm:inline font-['Cormorant_Garamond',serif] italic text-xs sm:text-sm font-medium truncate max-w-md">
              &ldquo;{person.statement}&rdquo;
            </span>
          </div>

          {/* Two Destination Cards: MY PORTFOLIO & MY BLOGS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5">
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
