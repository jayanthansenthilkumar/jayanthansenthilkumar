import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";

export const Hero: FC = () => {
  const { destinations } = PORTAL_CONFIG;

  return (
    <section className="relative flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-7xl mx-auto w-full">
      {/* Top Architectural Meta Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-4 mb-8 sm:mb-14 font-mono text-xs uppercase tracking-wider text-[#555555]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-[#CCFF00] border border-[#0A0A0A] inline-block animate-pulse"></span>
          <span className="font-bold text-[#0A0A0A]">CENTRAL GATEWAY</span>
          <span className="hidden sm:inline text-[#888888]">// PORTAL // 2026</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[#888888]">SELECT DESTINATION</span>
          <span className="bg-[#0A0A0A] text-[#CCFF00] px-2 py-0.5 font-bold">
            02 PATHWAYS
          </span>
        </div>
      </div>

      {/* Primary Identity & Introduction */}
      <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16">
        <div>
          <span className="font-mono text-xs uppercase font-bold text-[#0A0A0A] bg-[#CCFF00] border border-[#0A0A0A] px-2.5 py-1 inline-block mb-4 sm:mb-6 shadow-[2px_2px_0px_#0A0A0A]">
            PERSONAL PORTAL
          </span>
          
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold uppercase tracking-tighter leading-[0.92] text-[#0A0A0A]">
            JAYANTHAN<br />
            <span className="inline-block text-[#0A0A0A]">
              SENTHILKUMAR
            </span>
          </h1>
        </div>

        {/* Short Introduction */}
        <div className="border-l-4 border-[#0A0A0A] pl-4 sm:pl-6 py-1 max-w-2xl">
          <p className="font-mono text-lg sm:text-2xl md:text-3xl text-[#0A0A0A] font-bold tracking-tight">
            {PORTAL_CONFIG.tagline}
          </p>
        </div>
      </div>

      {/* Two Prominent Destination Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 mb-8">
        
        {/* DESTINATION 01 — MY PORTFOLIO */}
        <a
          href={destinations.portfolio.url}
          aria-label="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
          className="group block border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#0A0A0A] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0A0A0A] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-150 outline-none focus-visible:ring-4 focus-visible:ring-[#CCFF00]"
        >
          <div className="flex flex-col h-full justify-between gap-8">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#0A0A0A] mb-6">
                <span className="font-mono text-xs font-bold text-[#0A0A0A] bg-[#CCFF00] border border-[#0A0A0A] px-2 py-0.5">
                  DESTINATION // 01
                </span>
                <span className="font-mono text-xs text-[#555555] group-hover:text-[#0A0A0A] transition-colors">
                  {destinations.portfolio.destination}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#0A0A0A]">
                  {destinations.portfolio.title}
                </h2>
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#0A0A0A] bg-[#CCFF00] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]" />
                </div>
              </div>

              <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed">
                {destinations.portfolio.description}
              </p>
            </div>

            {/* Footer action trigger */}
            <div className="pt-4 border-t border-[#E8E3D9] flex items-center justify-between font-mono text-xs font-bold text-[#0A0A0A]">
              <span className="uppercase tracking-wider">
                EXPLORE PROJECTS &amp; EXPERIENCE
              </span>
              <span className="text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </div>
        </a>

        {/* DESTINATION 02 — MY BLOGS */}
        <a
          href={destinations.blogs.url}
          aria-label="Navigate to Jayanthan Senthilkumar's Personal Blog"
          className="group block border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#0A0A0A] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0A0A0A] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-150 outline-none focus-visible:ring-4 focus-visible:ring-[#0038FF]"
        >
          <div className="flex flex-col h-full justify-between gap-8">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#0A0A0A] mb-6">
                <span className="font-mono text-xs font-bold text-[#FFFFFF] bg-[#0038FF] border border-[#0A0A0A] px-2 py-0.5">
                  DESTINATION // 02
                </span>
                <span className="font-mono text-xs text-[#555555] group-hover:text-[#0A0A0A] transition-colors">
                  {destinations.blogs.destination}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#0038FF] transition-colors">
                  {destinations.blogs.title}
                </h2>
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#0A0A0A] bg-[#0038FF] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFFFFF]" />
                </div>
              </div>

              <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed">
                {destinations.blogs.description}
              </p>
            </div>

            {/* Footer action trigger */}
            <div className="pt-4 border-t border-[#E8E3D9] flex items-center justify-between font-mono text-xs font-bold text-[#0A0A0A]">
              <span className="uppercase tracking-wider">
                READ ESSAYS &amp; DEEP-DIVES
              </span>
              <span className="text-[#0038FF] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </div>
        </a>

      </div>

      {/* Subtle Bottom Architectural Frame */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-6 border-t border-[#0A0A0A]/20 font-mono text-[11px] text-[#777777] uppercase">
        <span>STATUS: 100% OPERATIONAL // DIRECT ROUTING</span>
        <span>ONE HOMEPAGE. ONE IDENTITY. TWO DESTINATIONS.</span>
      </div>
    </section>
  );
};

