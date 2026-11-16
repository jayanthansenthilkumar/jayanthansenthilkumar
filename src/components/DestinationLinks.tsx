import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";

export const DestinationLinks: FC = () => {
  const { destinations } = PORTAL_CONFIG;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 w-full">
      
      {/* =========================================================================
          DESTINATION 01 — MY PORTFOLIO
          ========================================================================= */}
      <a
        href={destinations.portfolio.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
        className="group relative block border-2 border-[#172019] bg-[#111512] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:-translate-y-1.5 hover:border-[#C6FF00] hover:shadow-[8px_8px_0px_#C6FF00] active:translate-y-0 active:shadow-none outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00]"
      >
        {/* Top-Right 3D Isometric Mini Hexagon Badge */}
        <div className="absolute top-4 right-4 w-10 h-10 transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            {/* 3D Facets */}
            <polygon points="50 30, 85 50, 50 70, 15 50" fill="#C6FF00" />
            <polygon points="15 50, 50 70, 50 100, 15 80" fill="#9ABF00" />
            <polygon points="50 70, 85 50, 85 80, 50 100" fill="#6F8A00" />
            <circle cx="50" cy="50" r="5" fill="#080A09" />
          </svg>
        </div>

        <div className="flex flex-col h-full justify-between gap-8">
          <div>
            {/* Metabar with Diagonal Hazard Hatch (Ref 03) */}
            <div className="flex items-center justify-between pb-4 border-b border-[#172019] mb-6">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#080A09] bg-[#C6FF00] px-2.5 py-0.5 tracking-wider uppercase">
                  01 // MY PORTFOLIO
                </span>
                {/* Diagonal stripes */}
                <div className="hidden sm:flex items-center gap-1 opacity-70">
                  <span className="w-1.5 h-3 bg-[#C6FF00] transform skew-x-[-20deg]"></span>
                  <span className="w-1.5 h-3 bg-[#C6FF00] transform skew-x-[-20deg]"></span>
                  <span className="w-1.5 h-3 bg-[#C6FF00] transform skew-x-[-20deg]"></span>
                </div>
              </div>

              <span className="font-mono text-xs text-[#858B83] group-hover:text-[#F4F4ED] transition-colors pr-12 sm:pr-8">
                {destinations.portfolio.destination}
              </span>
            </div>

            {/* Title & Animated Arrow Indicator */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4ED] group-hover:text-[#C6FF00] transition-colors">
                {destinations.portfolio.title}
              </h2>
              <div className="w-10 h-10 border border-[#172019] bg-[#080A09] flex items-center justify-center shrink-0 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-[#080A09] text-[#C6FF00] transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-[#858B83] leading-relaxed group-hover:text-[#F4F4ED] transition-colors">
              {destinations.portfolio.subtitle}
            </p>
          </div>

          {/* Action Footer with Cyberpunk Reticle Line */}
          <div className="pt-4 border-t border-[#172019] flex items-center justify-between font-mono text-xs font-bold text-[#858B83] group-hover:text-[#C6FF00] transition-colors">
            <span className="uppercase tracking-widest text-[11px] flex items-center gap-2">
              <span className="text-[#C6FF00]">&gt;</span>
              <span>LAUNCH PORTFOLIO APPLICATION</span>
            </span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </div>
        </div>
      </a>

      {/* =========================================================================
          DESTINATION 02 — MY BLOGS
          ========================================================================= */}
      <a
        href={destinations.blogs.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Blogs"
        className="group relative block border-2 border-[#172019] bg-[#111512] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:-translate-y-1.5 hover:border-[#C6FF00] hover:shadow-[8px_8px_0px_#C6FF00] active:translate-y-0 active:shadow-none outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00]"
      >
        {/* Top-Right 3D Isometric Mini Hexagon Badge */}
        <div className="absolute top-4 right-4 w-10 h-10 transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            {/* 3D Facets */}
            <polygon points="50 30, 85 50, 50 70, 15 50" fill="#243328" className="group-hover:fill-[#C6FF00] transition-colors" />
            <polygon points="15 50, 50 70, 50 100, 15 80" fill="#18221B" className="group-hover:fill-[#9ABF00] transition-colors" />
            <polygon points="50 70, 85 50, 85 80, 50 100" fill="#0F1611" className="group-hover:fill-[#6F8A00] transition-colors" />
            <circle cx="50" cy="50" r="5" fill="#C6FF00" className="group-hover:fill-[#080A09] transition-colors" />
          </svg>
        </div>

        <div className="flex flex-col h-full justify-between gap-8">
          <div>
            {/* Metabar with Diagonal Hazard Hatch (Ref 03) */}
            <div className="flex items-center justify-between pb-4 border-b border-[#172019] mb-6">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#F4F4ED] bg-[#172019] border border-[#858B83]/40 px-2.5 py-0.5 tracking-wider uppercase group-hover:border-[#C6FF00] group-hover:text-[#C6FF00] transition-colors">
                  02 // MY BLOGS
                </span>
                {/* Diagonal stripes */}
                <div className="hidden sm:flex items-center gap-1 opacity-70">
                  <span className="w-1.5 h-3 bg-[#858B83] group-hover:bg-[#C6FF00] transform skew-x-[-20deg] transition-colors"></span>
                  <span className="w-1.5 h-3 bg-[#858B83] group-hover:bg-[#C6FF00] transform skew-x-[-20deg] transition-colors"></span>
                  <span className="w-1.5 h-3 bg-[#858B83] group-hover:bg-[#C6FF00] transform skew-x-[-20deg] transition-colors"></span>
                </div>
              </div>

              <span className="font-mono text-xs text-[#858B83] group-hover:text-[#F4F4ED] transition-colors pr-12 sm:pr-8">
                {destinations.blogs.destination}
              </span>
            </div>

            {/* Title & Animated Arrow Indicator */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4ED] group-hover:text-[#C6FF00] transition-colors">
                {destinations.blogs.title}
              </h2>
              <div className="w-10 h-10 border border-[#172019] bg-[#080A09] flex items-center justify-center shrink-0 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-[#080A09] text-[#C6FF00] transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-[#858B83] leading-relaxed group-hover:text-[#F4F4ED] transition-colors">
              {destinations.blogs.subtitle}
            </p>
          </div>

          {/* Action Footer with Cyberpunk Reticle Line */}
          <div className="pt-4 border-t border-[#172019] flex items-center justify-between font-mono text-xs font-bold text-[#858B83] group-hover:text-[#C6FF00] transition-colors">
            <span className="uppercase tracking-widest text-[11px] flex items-center gap-2">
              <span className="text-[#C6FF00]">&gt;</span>
              <span>ACCESS TECHNICAL ESSAYS &amp; NOTES</span>
            </span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </div>
        </div>
      </a>

    </div>
  );
};
