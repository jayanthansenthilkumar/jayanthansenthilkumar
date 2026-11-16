import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight, Terminal, Globe, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection: FC = () => {
  return (
    <section className="relative border-b-2 border-[#0A0A0A] bg-[#F4F0EA] overflow-hidden pt-6 md:pt-12">
      {/* Top Meta Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase border-b-2 border-[#0A0A0A] pb-3 text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#CCFF00] border border-[#0A0A0A] inline-block animate-pulse"></span>
            <span className="text-[#0A0A0A] font-bold">SYSTEM STATUS: ONLINE</span>
            <span className="hidden sm:inline">// ID: JS-PORTAL-V4.2</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline">LOC: 10.9601° N, 78.0766° E [INDIA]</span>
            <span className="bg-[#CCFF00] text-[#0A0A0A] px-2 py-0.5 border border-[#0A0A0A] font-bold">
              OPEN FOR GLOBAL ROLES (AUS/USA/IND)
            </span>
          </div>
        </div>
      </div>

      {/* Main Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (8 cols): Oversized Editorial Name & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-4">
              <span className="inline-block bg-[#0A0A0A] text-[#CCFF00] font-mono text-xs px-2.5 py-1 uppercase font-bold tracking-widest mb-4">
                ENGINEERING BRIEF // 2026
              </span>
              
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.92] tracking-tighter text-[#0A0A0A] uppercase mb-6">
                JAYANTHAN<br />
                <span className="text-[#0A0A0A] underline decoration-[#CCFF00] decoration-wavy decoration-4">
                  SENTHILKUMAR
                </span>
              </h1>
            </div>

            <div className="border-l-4 border-[#0A0A0A] pl-4 sm:pl-6 my-4 bg-[#FAF8F5] p-4 border-2 border-l-4 border-[#0A0A0A]">
              <p className="font-mono text-sm sm:text-base md:text-lg text-[#0A0A0A] leading-snug font-semibold mb-2">
                AI &amp; ML Engineer bridging the gap between sophisticated Artificial Intelligence research and robust, scalable web architectures.
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#555555] leading-relaxed">
                From training deep neural networks to deploying resilient MLOps and LLMOps pipelines, my engineering philosophy centers on delivering high-impact technological solutions that don&apos;t just function, but scale elegantly.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 pt-6 items-center">
              <a
                href="https://hilo.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="lime" size="lg" className="gap-2">
                  <span>HILO PORTFOLIO</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://blogs.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <span>TECH BLOGS</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </a>

              <Link to="/events">
                <Button variant="default" size="lg" className="gap-2">
                  <span>EVENTS HUB</span>
                  <ArrowDownRight className="w-5 h-5" />
                </Button>
              </Link>

              <a href="#contact">
                <Button variant="ghost" size="lg" className="font-mono underline">
                  INITIATE CONTACT
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Architectural Identity Box & Quick Portals */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Architectural Telemetry Box */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A]">
              <div className="bg-[#0A0A0A] text-[#CCFF00] px-4 py-2.5 font-mono text-xs uppercase flex items-center justify-between font-bold">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#CCFF00]" />
                  <span>CORE ARCHITECTURE // INDEX</span>
                </div>
                <span>SYS.V4</span>
              </div>

              <div className="p-5 font-mono text-xs space-y-3 divide-y divide-[#E8E3D9]">
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">SPECIALIZATION</span>
                  <span className="font-bold text-[#0A0A0A] text-right">AI &amp; ML / MLOps / LLMOps</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">EDUCATION</span>
                  <span className="font-bold text-[#0A0A0A] text-right">M.Kumarasamy CE (MKCE)</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">HIGH CONCURRENCY</span>
                  <span className="font-bold text-[#0038FF] text-right">FastAPI / Python ASGI</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">FULL-STACK</span>
                  <span className="font-bold text-[#0A0A0A] text-right">React / TypeScript / Next.js</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">INFRASTRUCTURE</span>
                  <span className="font-bold text-[#0A0A0A] text-right">Docker / AWS / Linux</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#777777]">COLLABORATION</span>
                  <span className="bg-[#CCFF00] text-[#0A0A0A] px-1 font-bold">
                    GLOBAL (AUS / USA / IND)
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-t-2 border-[#0A0A0A] flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-[#0A0A0A]">
                  <Cpu className="w-4 h-4 text-[#0038FF]" />
                  <span className="font-semibold">ENGINEERING CAPACITY: 100%</span>
                </div>
                <a
                  href="#experience"
                  className="font-mono text-xs font-bold uppercase underline hover:text-[#0038FF]"
                >
                  VIEW TIMELINE &rarr;
                </a>
              </div>
            </div>

            {/* Direct Portal Destinations Header */}
            <div className="border-2 border-[#0A0A0A] bg-[#CCFF00] p-4 shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                  PORTAL ROUTING DESTINATIONS
                </span>
                <Globe className="w-4 h-4 text-[#0A0A0A]" />
              </div>
              <p className="font-mono text-xs text-[#0A0A0A] leading-relaxed">
                Select an external destination or scroll down to explore the complete engineering dossier.
              </p>
            </div>

            {/* 3 Portal Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://hilo.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-[#0A0A0A] bg-[#FFFFFF] p-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[10px] text-[#777777] group-hover:text-[#CCFF00]">
                    [01]
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase">HILO APP</h4>
                <p className="font-mono text-[10px] text-[#555555] group-hover:text-gray-300">
                  Interactive Portfolio
                </p>
              </a>

              <a
                href="https://blogs.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-[#0A0A0A] bg-[#FFFFFF] p-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[10px] text-[#777777] group-hover:text-[#CCFF00]">
                    [02]
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase">BLOGS</h4>
                <p className="font-mono text-[10px] text-[#555555] group-hover:text-gray-300">
                  Technical Articles
                </p>
              </a>

              <Link
                to="/events"
                className="group border-2 border-[#0A0A0A] bg-[#FFFFFF] p-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[10px] text-[#777777] group-hover:text-[#CCFF00]">
                    [03]
                  </span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase">EVENTS</h4>
                <p className="font-mono text-[10px] text-[#555555] group-hover:text-gray-300">
                  AustralAI Hub
                </p>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

