/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const companies = [
  { name: 'IBM', src: '/trusted/IBM_logo.svg' },
  { name: 'Google', src: '/trusted/google.webp' },
  { name: 'Meta', src: '/trusted/meta.png' },
  { name: 'Amazon', src: '/trusted/amazon.webp' },
  { name: 'Cloudflare', src: '/trusted/Cloudflare.webp' },
  { name: 'Swiggy', src: '/trusted/swiggy.webp' },
  { name: 'Blinkit', src: '/trusted/Blinkit.webp' },
  { name: 'Vercel', src: '/trusted/vercel.svg' },
  { name: 'Supabase', src: '/trusted/supabase.png' }
];

export function TrustedBy() {
  const [activeLogo, setActiveLogo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleLogoClick = (e: React.MouseEvent, companyName: string) => {
    e.stopPropagation();
    if (activeLogo === companyName) {
      setActiveLogo(null);
      setIsPaused(false);
    } else {
      setActiveLogo(companyName);
      setIsPaused(true);
    }
  };

  const logos = (
    <>
      {companies.map((company) => (
        <div 
          key={company.name} 
          className="flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={(e) => handleLogoClick(e, company.name)}
        >
          <img 
            src={company.src} 
            alt={`${company.name} logo`} 
            className={`h-8 md:h-12 w-auto max-w-[180px] object-contain transition-all duration-300 ${
              activeLogo === company.name 
                ? "grayscale-0 opacity-100" 
                : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      ))}
    </>
  );

  return (
    <section 
      className="py-24 bg-transparent border-b border-gray-200 overflow-hidden"
      onClick={() => {
        setActiveLogo(null);
        setIsPaused(false);
      }}
    >
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-16 max-w-lg mx-auto">
          Trusted by world-class developers & industry leading teams
        </h2>
        
        <div 
          className="flex overflow-hidden group/marquee"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className={`animate-marquee max-md:group-hover/marquee:[animation-play-state:paused] flex shrink-0 items-center justify-center gap-12 md:gap-24 pr-12 md:pr-24 ${isPaused ? "max-md:[animation-play-state:paused]" : ""}`} 
              aria-hidden={i !== 0}
            >
              {logos}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
