import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { MapPin, Sparkles, Terminal } from "lucide-react";

export const Hero: FC = () => {
  const { branding, person, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Hero Section and Executive Portfolio Gateway"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-10 flex flex-col justify-between z-10"
    >
      {/* =========================================================================
          TOP EXECUTIVE STATUS & IDENTITY BAR
          ========================================================================= */}
      <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        {/* Left: Professional Monogram & Domain Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-[#090D16] rounded-[11px] flex items-center justify-center font-['Outfit',sans-serif] font-bold text-sm text-white">
              {branding.monogram}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{branding.siteName}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20 font-mono font-medium">
                VERIFIED IT PRO
              </span>
            </span>
            <span className="font-mono text-[11px] text-slate-400 font-medium">
              {person.role}
            </span>
          </div>
        </div>

        {/* Right: Availability & Location Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 font-mono text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="font-medium">{person.status}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 font-mono text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{person.location}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CENTER HERO CENTERPIECE: DOUBLE-LINE NAME BEHIND HERO.PNG CUTOUT
          ========================================================================= */}
      <div className="relative w-full flex flex-col items-center justify-center my-6 sm:my-10 pt-4 pb-2 overflow-visible">
        {/* Ambient Backlight Glow directly behind portrait silhouette */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[650px] h-[340px] sm:h-[500px] md:h-[650px] rounded-full tech-radial-glow pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER 1 (BEHIND): Double-line massive name typography */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="text-center w-full px-2">
            <div
              className="hero-name-layer bg-gradient-to-b from-white via-slate-200/90 to-slate-500/30 bg-clip-text text-transparent opacity-90 sm:opacity-95"
              style={{
                fontSize: "clamp(2.4rem, 10.5vw, 9.5rem)",
              }}
            >
              {person.firstName}
            </div>
            <div
              className="hero-name-layer bg-gradient-to-b from-white via-slate-200/90 to-slate-500/30 bg-clip-text text-transparent opacity-90 sm:opacity-95"
              style={{
                fontSize: "clamp(2.4rem, 10.5vw, 9.5rem)",
              }}
            >
              {person.lastName}
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Centered Cutout Portrait (hero.png) */}
        <div className="relative z-10 flex justify-center items-end mt-2 sm:mt-6">
          <div className="relative group">
            {/* Soft Ambient Rim Light behind image */}
            <div className="absolute inset-0 bg-sky-500/20 blur-2xl rounded-full scale-95 pointer-events-none" />

            <img
              src="/hero.png"
              alt="Jayanthan Senthilkumar - Senior Software Engineer & IT Professional"
              className="relative z-10 w-auto h-[290px] sm:h-[400px] md:h-[490px] lg:h-[560px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        </div>

        {/* Micro Subtitle Bar Floating across the portrait base */}
        <div className="relative z-20 -mt-5 sm:-mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="flex items-center gap-1.5 text-sky-400 font-mono text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>IT SPECIALIZATION:</span>
          </div>
          <span className="font-sans text-xs sm:text-sm font-medium text-slate-200 text-center">
            {person.specialization}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 hidden sm:inline" />
        </div>
      </div>

      {/* =========================================================================
          CURVED LAYOUT: CURVED PANEL WITH TWO PRIMARY DESTINATION LINKS
          ========================================================================= */}
      <div className="relative z-20 w-full mt-4 sm:mt-6">
        <div className="curved-glass-panel rounded-2xl sm:rounded-3xl lg:rounded-[36px] p-5 sm:p-7 lg:p-10 relative overflow-hidden">
          {/* Subtle Grid Accent inside curved panel */}
          <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

          {/* Section Header inside Curved Layout */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                  DIGITAL IDENTITY GATEWAY
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Primary Destinations
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              &ldquo;{person.statement}&rdquo;
            </p>
          </div>

          {/* Two Destination Cards: MY PORTFOLIO & MY BLOGS */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
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
