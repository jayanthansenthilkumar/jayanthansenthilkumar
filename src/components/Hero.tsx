import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { WorkstationIllustration } from "@/components/illustrations/WorkstationIllustration";
import { PortfolioIllustration } from "@/components/illustrations/PortfolioIllustration";
import { BlogIllustration } from "@/components/illustrations/BlogIllustration";
import { SawtoothDivider } from "@/components/ui/SawtoothDivider";
import { PlusSticker, SquiggleSticker, TiltedSquare, SparkleBadge } from "@/components/ui/Stickers";

export const Hero: FC = () => {
  const { hero, destinations } = PORTAL_CONFIG;

  return (
    <section
      id="home"
      aria-label="Hero Introduction and Gateway"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-16"
    >
      {/* Decorative Playful Floating Accents (from Reference 01 & 02) */}
      <div className="absolute top-4 left-6 hidden lg:block" aria-hidden="true">
        <PlusSticker color="#EF79A9" size={32} />
      </div>
      <div className="absolute top-10 right-16 hidden lg:block" aria-hidden="true">
        <SquiggleSticker color="#171717" />
      </div>
      <div className="absolute top-24 right-32 hidden xl:block" aria-hidden="true">
        <TiltedSquare color="#F2ED37" size={24} rotation={12} />
      </div>

      {/* =========================================================================
          HERO TOP ROW: Introductory Label & Professional Badges
          ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
        {/* Small Introductory Label (Exact Prompt Requirement) */}
        <div className="inline-flex items-center gap-2 bg-[#FF713D] border-2 border-[#171717] px-3.5 py-1.5 rounded-xl brutal-shadow-sm font-mono text-xs sm:text-sm font-bold tracking-widest text-[#FFFDF7] uppercase">
          <span>✦</span>
          <span>{hero.introLabel}</span>
        </div>

        {/* Professional Identity Badge (Exact Prompt Requirement) */}
        <div className="inline-flex items-center gap-2 bg-[#80B5EB] border-2 border-[#171717] px-3.5 py-1.5 rounded-xl brutal-shadow-sm font-mono text-xs sm:text-sm font-bold tracking-wider text-[#171717] uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-[#46D9BC] border border-[#171717] animate-pulse" />
          <span>{hero.identityBadge}</span>
        </div>
      </div>

      {/* =========================================================================
          EDITORIAL HERO BODY: Massive Neo-Brutalist Typography + Illustration
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
        {/* Left Column: Headlines & Editorial Copy (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          {/* Main Headline (Exact Prompt Requirement) */}
          <h1 className="font-['Archivo_Black',sans-serif] text-5xl sm:text-7xl md:text-8xl xl:text-[6.8rem] leading-[0.92] tracking-tighter text-[#171717] uppercase select-none">
            {hero.firstName}
            <br />
            <span className="text-[#171717] inline-block relative">
              {hero.lastName}
              {/* Retro highlight bar */}
              <span
                className="absolute bottom-2 left-0 w-full h-4 sm:h-6 bg-[#F2ED37] -z-10 -rotate-1 border-t-2 border-b-2 border-[#171717]/30"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Supporting Headline (Exact Prompt Requirement) */}
          <div className="inline-block bg-[#F2ED37] border-[3px] border-[#171717] px-4 sm:px-6 py-2.5 rounded-2xl brutal-shadow-sm">
            <h2 className="font-['Space_Grotesk',sans-serif] text-base sm:text-xl md:text-2xl font-black tracking-tight text-[#171717] uppercase">
              {hero.supportingHeadline}
            </h2>
          </div>

          {/* Introduction Statement (Exact Prompt Requirement) */}
          <div className="relative bg-[#FFFDF7] border-[3px] border-[#171717] rounded-2xl p-5 sm:p-7 brutal-shadow-md max-w-2xl">
            {/* Corner Decorative Square */}
            <div
              className="absolute -top-3 -right-3 w-7 h-7 bg-[#EF79A9] border-2 border-[#171717] rounded-md rotate-12 brutal-shadow-sm hidden sm:block"
              aria-hidden="true"
            />
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#171717] leading-relaxed font-semibold">
              &ldquo;{hero.introduction}&rdquo;
            </p>

            {/* Micro Badge Row inside card */}
            <div className="mt-4 pt-4 border-t-2 border-[#171717]/15 flex flex-wrap items-center gap-3 font-mono text-xs text-[#171717]/80">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="text-[#FF713D]">●</span> {hero.locationBadge}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="font-bold text-[#171717]">{hero.statusBadge}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Original SVG Workstation Illustration (lg:col-span-5) */}
        <div className="lg:col-span-5 relative">
          <div className="relative">
            {/* Sparkle badge accent */}
            <div className="absolute -bottom-5 -left-4 z-20 hidden sm:block">
              <SparkleBadge color="#F2ED37" size={36} />
            </div>
            <WorkstationIllustration />
          </div>
        </div>
      </div>

      {/* =========================================================================
          REFERENCE 01 & 02: Sawtooth Divider Ribbon
          ========================================================================= */}
      <div className="my-10 sm:my-14 relative select-none">
        <SawtoothDivider height={18} color="#171717" />
        <div className="flex items-center justify-between px-2 pt-3 font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
          <span>// SELECT DESTINATION GATEWAY</span>
          <span className="hidden sm:inline">[ PORTAL ROUTING // 01 • 02 ]</span>
        </div>
      </div>

      {/* =========================================================================
          PRIMARY DESTINATIONS: Two Prominent Clickable Destination Cards
          ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-['Space_Grotesk',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF713D] border-2 border-[#171717] inline-block" />
            <span>PRIMARY DESTINATIONS</span>
          </h3>
          <span className="font-mono text-xs font-bold text-[#171717]/70">
            DIRECT GATEWAYS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
          {/* CARD 01 — MY PORTFOLIO */}
          <DestinationCard
            number={destinations.portfolio.number}
            title={destinations.portfolio.title}
            subtitle={destinations.portfolio.subtitle}
            cta={destinations.portfolio.cta}
            url={destinations.portfolio.url}
            accentColor={destinations.portfolio.accentColor}
            tag={destinations.portfolio.tag}
            illustration={<PortfolioIllustration />}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
          />

          {/* CARD 02 — MY BLOGS */}
          <DestinationCard
            number={destinations.blogs.number}
            title={destinations.blogs.title}
            subtitle={destinations.blogs.subtitle}
            cta={destinations.blogs.cta}
            url={destinations.blogs.url}
            accentColor={destinations.blogs.accentColor}
            tag={destinations.blogs.tag}
            illustration={<BlogIllustration />}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Technical Blogs"
          />
        </div>
      </div>
    </section>
  );
};
