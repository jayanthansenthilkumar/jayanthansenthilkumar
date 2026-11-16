import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTAL_CONFIG } from "@/config/links";

export const DestinationLinks: FC = () => {
  const { destinations } = PORTAL_CONFIG;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 w-full">
      
      {/* DESTINATION 01 — MY PORTFOLIO */}
      <a
        href={destinations.portfolio.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Portfolio"
        className="group relative block border-2 border-[#172019] bg-[#111512] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-[#C6FF00] hover:shadow-brutal-lime active:translate-y-0 active:shadow-none outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00]"
      >
        {/* Decorative Hexagon Accent Corner in Card */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
              fill="#172019"
              stroke="#C6FF00"
              strokeWidth="2"
            />
            <circle cx="50" cy="57.7" r="8" fill="#C6FF00" />
          </svg>
        </div>

        <div className="flex flex-col h-full justify-between gap-8">
          <div>
            {/* Top Meta Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#172019] mb-6">
              <span className="font-mono text-[11px] font-bold text-[#080A09] bg-[#C6FF00] px-2 py-0.5 tracking-wider uppercase">
                DESTINATION // {destinations.portfolio.index}
              </span>
              <span className="font-mono text-xs text-[#858B83] group-hover:text-[#F4F4ED] transition-colors">
                {destinations.portfolio.destination}
              </span>
            </div>

            {/* Title & Arrow */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4ED] group-hover:text-[#C6FF00] transition-colors">
                {destinations.portfolio.title}
              </h2>
              <div className="w-10 h-10 border border-[#172019] bg-[#080A09] flex items-center justify-center shrink-0 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-[#080A09] text-[#C6FF00] transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-[#858B83] leading-relaxed group-hover:text-[#F4F4ED] transition-colors">
              {destinations.portfolio.subtitle}
            </p>
          </div>

          {/* Action Trigger Line */}
          <div className="pt-4 border-t border-[#172019] flex items-center justify-between font-mono text-xs font-bold text-[#858B83] group-hover:text-[#C6FF00] transition-colors">
            <span className="uppercase tracking-widest text-[11px]">
              INITIALIZE PORTFOLIO GATEWAY
            </span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </div>
        </div>
      </a>

      {/* DESTINATION 02 — MY BLOGS */}
      <a
        href={destinations.blogs.url}
        aria-label="Navigate to Jayanthan Senthilkumar's Personal Blogs"
        className="group relative block border-2 border-[#172019] bg-[#111512] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-[#C6FF00] hover:shadow-brutal-lime active:translate-y-0 active:shadow-none outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00]"
      >
        {/* Decorative Hexagon Accent Corner in Card */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
              fill="#172019"
              stroke="#858B83"
              strokeWidth="2"
              className="group-hover:stroke-[#C6FF00] transition-colors"
            />
            <circle cx="50" cy="57.7" r="8" fill="#858B83" className="group-hover:fill-[#C6FF00] transition-colors" />
          </svg>
        </div>

        <div className="flex flex-col h-full justify-between gap-8">
          <div>
            {/* Top Meta Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#172019] mb-6">
              <span className="font-mono text-[11px] font-bold text-[#F4F4ED] bg-[#172019] border border-[#858B83]/30 px-2 py-0.5 tracking-wider uppercase group-hover:border-[#C6FF00] transition-colors">
                DESTINATION // {destinations.blogs.index}
              </span>
              <span className="font-mono text-xs text-[#858B83] group-hover:text-[#F4F4ED] transition-colors">
                {destinations.blogs.destination}
              </span>
            </div>

            {/* Title & Arrow */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4ED] group-hover:text-[#C6FF00] transition-colors">
                {destinations.blogs.title}
              </h2>
              <div className="w-10 h-10 border border-[#172019] bg-[#080A09] flex items-center justify-center shrink-0 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-[#080A09] text-[#C6FF00] transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-[#858B83] leading-relaxed group-hover:text-[#F4F4ED] transition-colors">
              {destinations.blogs.subtitle}
            </p>
          </div>

          {/* Action Trigger Line */}
          <div className="pt-4 border-t border-[#172019] flex items-center justify-between font-mono text-xs font-bold text-[#858B83] group-hover:text-[#C6FF00] transition-colors">
            <span className="uppercase tracking-widest text-[11px]">
              ENTER INTELLECTUAL LOGS
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

