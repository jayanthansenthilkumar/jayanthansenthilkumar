import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { MapPin, Sparkles, Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Executive IT Portfolio Gateway"
      className="flex-1 min-h-0 flex flex-col justify-between w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 z-10"
    >
      {/* =========================================================================
          TOP EXECUTIVE IDENTITY & STATUS BAR (Universal Responsive Header)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-2.5 shrink-0 pb-1.5 sm:pb-2 border-b border-white/10">
        {/* Left: Monogram & Verified Professional Branding */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1px] shadow-sm shadow-sky-500/20 shrink-0">
            <div className="w-full h-full bg-[#090D16] rounded-[7px] sm:rounded-[11px] flex items-center justify-center font-['Outfit',sans-serif] font-bold text-xs sm:text-sm text-white">
              {branding.monogram}
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-['Outfit',sans-serif] text-sm sm:text-base font-bold tracking-tight text-white truncate">
                {branding.siteName}
              </span>
              <span className="text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20 font-mono font-medium hidden xs:inline">
                IT PRO
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability & Location Badges */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-900/80 border border-white/10 font-mono text-[9px] sm:text-[11px] text-slate-300 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            <span className="font-medium whitespace-nowrap">{person.status}</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-white/10 font-mono text-[10px] text-slate-400">
            <MapPin className="w-3 h-3 text-sky-400" />
            <span>{person.location}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CENTER HERO CENTERPIECE: DOUBLE-LINE NAME BEHIND HERO.PNG CUTOUT
          Scale-calibrated for all 14 standard phone, laptop, and monitor sizes
          ========================================================================= */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 my-1 sm:my-1.5 overflow-visible">
        {/* Ambient Backlight Glow directly behind portrait silhouette */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[360px] md:w-[480px] h-[240px] sm:h-[360px] md:h-[480px] rounded-full tech-radial-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Double-line massive name typography */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="text-center w-full px-1">
            <div
              className="hero-name-layer bg-gradient-to-b from-white via-slate-200/90 to-slate-500/30 bg-clip-text text-transparent opacity-90 sm:opacity-95 leading-[0.84]"
              style={{
                fontSize: "clamp(2rem, min(9vw, 12.5vh), 7.8rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="hero-name-layer bg-gradient-to-b from-white via-slate-200/90 to-slate-500/30 bg-clip-text text-transparent opacity-90 sm:opacity-95 leading-[0.84]"
              style={{
                fontSize: "clamp(2rem, min(9vw, 12.5vh), 7.8rem)",
              }}
            >
              {person.lastName}
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Centered Cutout Portrait (hero.png) */}
        <div className="relative z-10 flex justify-center items-end h-full">
          <div className="relative h-full flex items-end group">
            {/* Soft Ambient Rim Light behind image */}
            <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full scale-90 pointer-events-none" />

            <img
              src="/hero.png"
              alt="Jayanthan Senthilkumar - Senior Software Engineer & IT Professional"
              className="relative z-10 w-auto object-contain object-bottom drop-shadow-[0_12px_25px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:scale-[1.01]"
              style={{
                height: "min(38vh, 420px)",
                maxHeight: "min(38vh, 420px)",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Micro Subtitle Bar Floating across the portrait base */}
        <div className="absolute bottom-0 z-20 hidden xs:flex items-center justify-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-xl">
          <Terminal className="w-3 h-3 text-sky-400" />
          <span className="font-mono text-[9px] sm:text-[10px] text-slate-300 font-medium">
            {person.specialization}
          </span>
          <Sparkles className="w-3 h-3 text-indigo-400 hidden sm:inline" />
        </div>
      </div>

      {/* =========================================================================
          CURVED LAYOUT: CURVED PANEL WITH TWO PRIMARY DESTINATION LINKS
          Adaptive across 6.1" phones, 11.6"-16" laptops, and 49" ultrawides
          ========================================================================= */}
      <div className="shrink-0 w-full mb-0.5 sm:mb-1">
        <div className="curved-glass-panel rounded-xl sm:rounded-2xl lg:rounded-[26px] p-2 sm:p-3 md:p-3.5 max-w-5xl mx-auto w-full relative overflow-hidden">
          {/* Subtle Grid Accent inside curved panel */}
          <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

          {/* Section Header inside Curved Layout */}
          <div className="relative z-10 flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10 font-mono text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>PRIMARY DESTINATIONS</span>
            </div>
            <span className="text-slate-400 hidden sm:inline font-sans italic text-[10px] sm:text-[11px] truncate max-w-md">
              &ldquo;{person.statement}&rdquo;
            </span>
          </div>

          {/* Two Destination Cards: MY PORTFOLIO & MY BLOGS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 md:gap-3">
            {/* Destination 01: MY PORTFOLIO */}
            <DestinationCard
              index={destinations.portfolio.index}
              title={destinations.portfolio.title}
              subtitle={destinations.portfolio.subtitle}
              cta={destinations.portfolio.cta}
              url={destinations.portfolio.url}
              badge={destinations.portfolio.badge}
              ariaLabel="Navigate to Jayanthan Senthilkumar's Enterprise Portfolio"
            />

            {/* Destination 02: MY BLOGS */}
            <DestinationCard
              index={destinations.blogs.index}
              title={destinations.blogs.title}
              subtitle={destinations.blogs.subtitle}
              cta={destinations.blogs.cta}
              url={destinations.blogs.url}
              badge={destinations.blogs.badge}
              ariaLabel="Navigate to Jayanthan Senthilkumar's Technical Engineering Blogs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
