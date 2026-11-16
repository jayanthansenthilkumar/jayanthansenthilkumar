import { FC } from "react";
import { PORTAL_CONFIG } from "@/config/links";
import { DestinationCard } from "@/components/DestinationCard";
import { VeoCharacterMascot } from "@/components/illustrations/VeoCharacterMascot";
import { SparkleBadge, SquiggleSticker } from "@/components/ui/Stickers";

export const Hero: FC = () => {
  const { branding, hero, stickers, destinations } = PORTAL_CONFIG;

  return (
    <section
      aria-label="Single-Screen Personal Identity Gateway"
      className="flex-1 min-h-0 flex flex-col justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-2 sm:py-3 z-10"
    >
      {/* =========================================================================
          TOP BRANDING ROW (Minimal, Clean & Balanced)
          ========================================================================= */}
      <header className="flex items-center justify-between gap-3 shrink-0 pt-1 pb-2 border-b-2 border-[#171717]/15">
        {/* Left: Monogram & Site Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FF713D] border-2 border-[#171717] flex items-center justify-center font-['Archivo_Black',sans-serif] text-xs sm:text-sm text-[#171717] brutal-shadow-sm select-none">
            {branding.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-['Archivo_Black',sans-serif] text-base sm:text-lg tracking-tight text-[#171717]">
              {branding.siteName}
            </span>
            <span className="font-mono text-[9px] text-[#171717]/70 font-bold uppercase tracking-wider hidden xs:block">
              PERSONAL IDENTITY GATEWAY
            </span>
          </div>
        </div>

        {/* Right: Status Badge & Good Vibes Sticker */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GOOD VIBES ONLY Sticker */}
          <div
            className="hidden sm:inline-flex items-center px-2.5 py-1 border-2 border-[#171717] rounded-lg font-mono text-[10px] font-bold text-[#171717] brutal-shadow-sm -rotate-3"
            style={{ backgroundColor: stickers[2].color }}
          >
            <span>✦</span>
            <span className="ml-1">{stickers[2].text}</span>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#46D9BC] border-2 border-[#171717] px-2.5 py-1 rounded-xl brutal-shadow-sm font-mono text-[10px] sm:text-xs font-bold text-[#171717] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#171717] animate-pulse" />
            <span>{hero.statusBadge}</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CENTER HERO COMPOSITION: Giant Typography + 3D Funny Character Mascot
          ========================================================================= */}
      <div className="flex-1 min-h-0 flex items-center my-1 sm:my-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Name & Editorial Copy (md:col-span-7) */}
          <div className="md:col-span-7 space-y-2 sm:space-y-3 lg:space-y-4">
            {/* Introductory Label Pill */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#F2ED37] border-2 border-[#171717] px-3 py-1 rounded-lg brutal-shadow-sm font-mono text-xs sm:text-sm font-black tracking-wider text-[#171717] uppercase">
                <span>👋</span>
                <span>{hero.introLabel}</span>
              </span>
              <SquiggleSticker color="#171717" className="hidden sm:inline-block scale-90" />
            </div>

            {/* Giant Dominant Name Typography */}
            <h1
              className="font-['Archivo_Black',sans-serif] tracking-tighter text-[#171717] uppercase leading-[0.88] select-none text-balance"
              style={{
                fontSize: "clamp(2.6rem, 7.2vw, 6.2rem)",
              }}
            >
              {hero.name}
            </h1>

            {/* Decorative Playful Stickers Row */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span
                className="inline-flex items-center px-2.5 py-0.5 border-2 border-[#171717] rounded-md font-mono text-[10px] sm:text-xs font-bold text-[#171717] brutal-shadow-sm"
                style={{
                  backgroundColor: stickers[0].color,
                  transform: `rotate(${stickers[0].rotation}deg)`,
                }}
              >
                {stickers[0].text}
              </span>
              <span
                className="inline-flex items-center px-2.5 py-0.5 border-2 border-[#171717] rounded-md font-mono text-[10px] sm:text-xs font-bold text-[#171717] brutal-shadow-sm"
                style={{
                  backgroundColor: stickers[1].color,
                  transform: `rotate(${stickers[1].rotation}deg)`,
                }}
              >
                {stickers[1].text}
              </span>
              <SparkleBadge color="#FF713D" size={20} className="hidden sm:inline-block ml-1" />
            </div>

            {/* Supporting Headline */}
            <div className="pt-0.5">
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base font-black tracking-tight text-[#171717] uppercase">
                {hero.headline}
              </p>
            </div>

            {/* Supporting Line Compact Quote */}
            <p className="font-sans text-xs sm:text-sm text-[#171717]/85 font-semibold italic border-l-3 border-[#FF713D] pl-2.5 py-0.5">
              &ldquo;{hero.supportingLine}&rdquo;
            </p>
          </div>

          {/* Right Column: Original Funny 3D Cartoon Character Mascot (md:col-span-5) */}
          <div className="md:col-span-5 flex justify-center items-center py-1 max-h-[220px] sm:max-h-[280px] md:max-h-[340px]">
            <div className="w-full max-w-[210px] sm:max-w-[260px] md:max-w-[320px]">
              <VeoCharacterMascot />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM ROW: Two Primary Destination Links
          ========================================================================= */}
      <div className="shrink-0 pt-1 pb-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6">
          {/* CARD 01: MY PORTFOLIO */}
          <DestinationCard
            number={destinations.portfolio.number}
            title={destinations.portfolio.title}
            description={destinations.portfolio.description}
            cta={destinations.portfolio.cta}
            url={destinations.portfolio.url}
            accentColor={destinations.portfolio.accentColor}
            tag={destinations.portfolio.tag}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
          />

          {/* CARD 02: MY BLOGS */}
          <DestinationCard
            number={destinations.blogs.number}
            title={destinations.blogs.title}
            description={destinations.blogs.description}
            cta={destinations.blogs.cta}
            url={destinations.blogs.url}
            accentColor={destinations.blogs.accentColor}
            tag={destinations.blogs.tag}
            ariaLabel="Navigate to Jayanthan Senthilkumar's Technical Blogs"
          />
        </div>
      </div>
    </section>
  );
};
