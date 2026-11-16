import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationLinks } from "@/components/DestinationLinks";

export const Hero: FC = () => {
  return (
    <section className="relative flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-7xl mx-auto w-full z-10">
      
      {/* Top Cybernetic Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#172019] pb-4 mb-8 sm:mb-12 font-mono text-xs uppercase tracking-wider text-[#858B83]">
        {/* Technical Identity Label */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#C6FF00] inline-block animate-pulse"></span>
          <span className="font-bold text-[#F4F4ED] tracking-widest">
            {PORTAL_CONFIG.technicalLabel}
          </span>
        </div>

        {/* Small Live Status Indicator */}
        <div className="flex items-center gap-3 bg-[#111512] px-3 py-1 border border-[#172019]">
          <span className="w-2 h-2 rounded-full bg-[#C6FF00] shadow-[0_0_8px_#C6FF00]"></span>
          <span className="font-mono text-[11px] font-bold text-[#C6FF00] tracking-wider">
            {PORTAL_CONFIG.statusLabel}
          </span>
        </div>
      </div>

      {/* Main Asymmetrical Editorial Headline Area */}
      <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-14">
        
        {/* Badge & Geometric Coordinate Stamp */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#172019] border border-[#858B83]/30 px-3 py-1 font-mono text-xs text-[#C6FF00] uppercase font-bold tracking-widest">
            <svg viewBox="0 0 100 115" className="w-3.5 h-3.5 inline-block">
              <polygon
                points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
                fill="#C6FF00"
              />
            </svg>
            <span>CORE NODE // 01</span>
          </div>
          <span className="font-mono text-[11px] text-[#858B83] hidden sm:inline">
            SEC.LEVEL // OPEN PROTOCOL
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.88] text-[#F4F4ED]">
          {PORTAL_CONFIG.firstName}<br />
          <span className="text-[#F4F4ED] inline-block">
            {PORTAL_CONFIG.lastName}
          </span>
        </h1>

        {/* Short Introduction */}
        <div className="border-l-4 border-[#C6FF00] pl-4 sm:pl-6 py-1 max-w-2xl bg-[#111512]/60 border-t border-r border-b border-[#172019]">
          <p className="font-mono text-lg sm:text-2xl md:text-3xl text-[#F4F4ED] font-bold tracking-tight">
            &ldquo;{PORTAL_CONFIG.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* Exactly Two Destination Links */}
      <DestinationLinks />

      {/* Bottom Architectural Telemetry Frame */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-8 mt-8 border-t border-[#172019] font-mono text-[11px] text-[#858B83] uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-[#C6FF00]">SYS_STATE:</span>
          <span>ONLINE // ZERO GRADIENTS // HONEYCOMB-SYS</span>
        </div>
        <div>
          <span>ONE IDENTITY &bull; TWO DESTINATIONS</span>
        </div>
      </div>

    </section>
  );
};
