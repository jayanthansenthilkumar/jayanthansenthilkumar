import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Executive Gateway"
      className="flex-1 flex flex-col justify-between w-full max-w-7xl 2xl:max-w-[1560px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 z-10 min-h-0 gap-1.5 sm:gap-2"
    >
      {/* =========================================================================
          1. TOP IDENTITY & STATUS BAR (Fluid, Accessible & Safe-Inset Aware)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-2 sm:gap-3 shrink-0 pb-1.5 sm:pb-2 border-b border-[#E6E2D8]">
        {/* Left: Monogram & Professional Branding */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-['Manrope',sans-serif] font-bold text-xs sm:text-sm md:text-base shadow-2xs shrink-0 select-none">
            {branding.monogram}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-['Manrope',sans-serif] text-xs xs:text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#18181B] whitespace-nowrap">
                {branding.siteName}
              </span>
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full bg-[#EFECE5] text-[#52525B] border border-[#DDD7C9] font-mono font-semibold shrink-0 select-none">
                SAP PRO
              </span>
            </div>
            <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-[#52525B] font-medium truncate">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4DFD3] font-mono text-[9px] xs:text-[10px] sm:text-xs text-[#18181B] shadow-2xs select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-indicator-dot shrink-0" />
            <span className="font-semibold whitespace-nowrap sm:hidden">{person.statusCompact}</span>
            <span className="font-semibold whitespace-nowrap hidden sm:inline">{person.status}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. CENTER HERO: MONUMENTAL NAME & CENTERED PORTRAIT WITH BASE PILL
          ========================================================================= */}
      <div className="flex-1 relative flex items-center justify-center min-h-[160px] xs:min-h-[200px] sm:min-h-[240px] my-1 sm:my-1.5 overflow-visible">
        {/* Soft Ambient Warm Paper Glow behind portrait */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[440px] md:w-[620px] h-[240px] sm:h-[440px] md:h-[620px] rounded-full calm-ambient-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Monumental Double-Line Architectural Name */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="w-full text-center flex flex-col items-center justify-center px-1">
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.03em] text-center w-full"
              style={{
                fontSize: "clamp(2.4rem, min(12.5vw, 14.5vh), 11rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="editorial-name-layer leading-[0.80] text-[#18181B] tracking-[0.02em] text-center w-full"
              style={{
                fontSize: "clamp(1.9rem, min(9.8vw, 11.5vh), 8.8rem)",
              }}
            >
              {person.lastName}
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Centered Cutout Portrait & Anchored Specialization Pill */}
        <div className="relative z-10 flex flex-col justify-end items-center h-full max-h-full">
          <div className="relative flex items-end justify-center">
            <img
              src="/hero.png"
              alt="Jayanthan Senthilkumar - SAP Backend Engineer"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 w-auto aspect-square object-contain object-bottom drop-shadow-[0_12px_28px_rgba(24,24,27,0.12)] transition-transform duration-300 hover:scale-[1.01] select-none pointer-events-auto"
              style={{
                height: "clamp(140px, 32vh, 440px)",
                maxHeight: "min(34vh, 440px)",
              }}
              loading="eager"
            />

            {/* Floating Specialization Pill Anchored at the base of the portrait with responsive width */}
            <div className="absolute -bottom-2.5 sm:-bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2DDD2] shadow-xs w-max max-w-[92vw] sm:max-w-max whitespace-nowrap text-center select-none pointer-events-auto">
              <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#18181B] shrink-0" />
              {/* Responsive specialization text scaling without truncation */}
              <span className="xs:hidden font-mono text-[8.5px] text-[#3F3F46] font-medium tracking-wide">
                {person.specializationNarrow}
              </span>
              <span className="hidden xs:inline md:hidden font-mono text-[9px] text-[#3F3F46] font-medium tracking-wide">
                {person.specializationMid}
              </span>
              <span className="hidden md:inline font-mono text-[10px] lg:text-xs text-[#3F3F46] font-medium tracking-wide">
                {person.specialization}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. CURVED NAVIGATION DOCK: TWO DESTINATION BUTTONS IN SINGLE ROW
          ========================================================================= */}
      <div className="shrink-0 w-full mt-0.5 sm:mt-1 mb-0.5">
        <div className="curved-editorial-panel p-2.5 xs:p-3 sm:p-3.5 md:p-4 w-full mx-auto relative">
          {/* Eyebrow Header inside Dock */}
          <div className="relative z-10 flex items-center justify-between gap-3 mb-1.5 sm:mb-2 pb-1 sm:pb-1.5 border-b border-[#E6E2D8] font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-[#18181B] font-bold uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#18181B]" />
              <span>DIRECT DESTINATIONS</span>
            </div>
            <span className="text-[#52525B] hidden lg:inline font-['Cormorant_Garamond',serif] italic text-xs sm:text-sm font-semibold truncate max-w-[55%]">
              &ldquo;{person.statement}&rdquo;
            </span>
          </div>

          {/* TWO DESTINATION CARDS IN SINGLE ROW ACROSS ALL DEVICES */}
          <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full items-stretch">
            {/* Destination 01: MY PORTFOLIO */}
            <DestinationCard
              index={destinations.portfolio.index}
              title={destinations.portfolio.title}
              subtitle={destinations.portfolio.subtitle}
              cta={destinations.portfolio.cta}
              url={destinations.portfolio.url}
              badge={destinations.portfolio.badge}
              badgeShort={destinations.portfolio.badgeShort}
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
              badgeShort={destinations.blogs.badgeShort}
              ariaLabel="Navigate to Jayanthan Senthilkumar's Engineering Blogs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
