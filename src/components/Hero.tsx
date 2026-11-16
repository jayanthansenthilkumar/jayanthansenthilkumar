import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationLinks } from "@/components/DestinationLinks";

export const Hero: FC = () => {
  return (
    <section className="relative flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-7xl mx-auto w-full z-10">
      
      {/* =========================================================================
          REFERENCE 03: Cyber-Brutalist Technical Meta Header
          ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#172019] pb-4 mb-8 sm:mb-12 font-mono text-xs uppercase tracking-wider text-[#858B83]">
        
        {/* Technical Label (Exact Prompt Requirement) */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[#C6FF00] inline-block animate-pulse"></div>
          <span className="font-bold text-[#F4F4ED] tracking-widest text-[11px] sm:text-xs">
            {PORTAL_CONFIG.technicalLabel}
          </span>
          <span className="hidden md:inline text-[#858B83]/60">// NODE: JS-GW-01</span>
        </div>

        {/* Live Status Indicator (Exact Prompt Requirement) */}
        <div className="flex items-center gap-2.5 bg-[#111512] px-3 py-1 border border-[#172019]">
          <span className="w-2 h-2 rounded-full bg-[#C6FF00] shadow-[0_0_8px_#C6FF00]"></span>
          <span className="font-mono text-[11px] font-bold text-[#C6FF00] tracking-wider">
            {PORTAL_CONFIG.statusLabel}
          </span>
        </div>
      </div>

      {/* =========================================================================
          MAIN EDITORIAL HERO: Massive Acid-Green & Black Typography (Ref 03)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-14">
        
        {/* Left Column (Reference 03 Diagonal Hazard Stripe Bar - visible on lg screens) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-2 pt-2 opacity-80 select-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-10 bg-[#C6FF00] transform skew-y-[-25deg] border border-[#080A09]"
            />
          ))}
        </div>

        {/* Center / Primary Hero Content (lg:col-span-11) */}
        <div className="lg:col-span-11 space-y-6 sm:space-y-8">
          
          {/* Micro Technical Stamp with Mini Honeycomb Icon */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <div className="inline-flex items-center gap-2 bg-[#C6FF00] text-[#080A09] px-2.5 py-1 font-bold tracking-widest uppercase">
              <svg viewBox="0 0 100 115" className="w-3.5 h-3.5 inline-block">
                <polygon
                  points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
                  fill="#080A09"
                />
              </svg>
              <span>IDENTITY // CORE</span>
            </div>
            <span className="text-[#858B83] text-[11px] hidden sm:inline">
              SYS.VER: 4.0.0 &bull; 3D_HONEYCOMB_MATRIX
            </span>
          </div>

          {/* Main Name Heading (Exact Prompt Requirement) */}
          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold uppercase tracking-tighter leading-[0.86] text-[#F4F4ED]">
            {PORTAL_CONFIG.firstName}<br />
            <span className="text-[#F4F4ED] inline-block">
              {PORTAL_CONFIG.lastName}
            </span>
          </h1>

          {/* Subtitle (Exact Prompt Requirement) */}
          <div className="border-l-4 border-[#C6FF00] bg-[#111512] p-4 sm:p-5 border-t border-r border-b border-[#172019] max-w-2xl">
            <p className="font-mono text-lg sm:text-2xl md:text-3xl text-[#F4F4ED] font-bold tracking-tight">
              &ldquo;{PORTAL_CONFIG.tagline}&rdquo;
            </p>
          </div>

        </div>

      </div>

      {/* =========================================================================
          TWO DESTINATION LINKS (Exact Prompt Requirement: 01 PORTFOLIO, 02 BLOGS)
          ========================================================================= */}
      <DestinationLinks />

      {/* =========================================================================
          BOTTOM ARCHITECTURAL RUNNER
          ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-8 mt-8 border-t border-[#172019] font-mono text-[11px] text-[#858B83] uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-[#C6FF00] font-bold">GATEWAY_STATUS:</span>
          <span>ONLINE // READY FOR ROUTING</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#858B83]/60">ENCRYPTED // DUAL-PATHWAY</span>
          <span className="text-[#C6FF00] font-bold">[ 01 • 02 ]</span>
        </div>
      </div>

    </section>
  );
};
