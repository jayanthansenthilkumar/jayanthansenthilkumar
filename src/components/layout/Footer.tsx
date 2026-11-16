import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, BookOpen, Mail, Clock, Radio, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const Footer: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentUtc, setCurrentUtc] = useState<string>("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      // Format Indian Standard Time (IST - UTC+5:30)
      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", istOptions).format(now));

      // UTC time
      const utcOptions: Intl.DateTimeFormatOptions = {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentUtc(`${new Intl.DateTimeFormat("en-US", utcOptions).format(now)} UTC`);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
      {/* Massive Editorial Brutalist Banner */}
      <div className="border-b-2 border-[#333333] py-8 sm:py-12 md:py-16 px-4 overflow-hidden select-none bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-4">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FFFFFF] leading-none">
            JAYANTHAN<br />
            <span className="text-[#CCFF00]">SENTHILKUMAR</span>
          </h2>
          <div className="font-mono text-xs text-[#888888] uppercase max-w-xs">
            ART DIRECTION: NEO-BRUTALIST ARCHITECTURAL DOSSIER // 2026 EDITION
          </div>
        </div>
      </div>

      {/* 4-Column Architectural Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b-2 border-[#222222]">
          
          {/* Column 1: Identity */}
          <div className="space-y-4 font-mono text-xs">
            <div className="text-[#CCFF00] font-bold uppercase tracking-wider">
              [01] // ENGINEERING IDENTITY
            </div>
            <p className="text-[#AAAAAA] leading-relaxed">
              AI &amp; ML Engineer specializing in bridging deep neural network research with high-concurrency, resilient production architectures.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#888888]">
              <span className="w-2 h-2 bg-[#CCFF00] inline-block animate-pulse"></span>
              <span>OPEN FOR GLOBAL ROLES (AUS/USA/IND)</span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#CCFF00] font-bold uppercase tracking-wider">
              [02] // NAVIGATION DIRECTORY
            </div>
            <ul className="space-y-2 text-[#CCCCCC]">
              <li>
                <a href="#about" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 01 ABOUT DOSSIER
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 02 CAREER TIMELINE
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 03 FEATURED INITIATIVES
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 04 ARCHITECTURE &amp; STACK
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 05 ACADEMIC &amp; CREDENTIALS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#CCFF00] transition-colors">
                  &gt; 06 ESTABLISH CONNECTION
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: External Portals */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#CCFF00] font-bold uppercase tracking-wider">
              [03] // EXTERNAL SYSTEMS
            </div>
            <ul className="space-y-2 text-[#CCCCCC]">
              <li>
                <a
                  href="https://hilo.jayanthan.fyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>HILO PORTFOLIO</span>
                  <span className="text-[#666666]">&nearr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blogs.jayanthan.fyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>TECHNICAL BLOGS</span>
                  <span className="text-[#666666]">&nearr;</span>
                </a>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>AUSTRALAI EVENTS HUB</span>
                  <span className="text-[#666666]">&rarr;</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://certify.syraa.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>CERTIFICATION PORTAL</span>
                  <span className="text-[#666666]">&nearr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://hii.syraa.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>HIII ADMIN PORTAL</span>
                  <span className="text-[#666666]">&nearr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: System Telemetry & Live Clock */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#CCFF00] font-bold uppercase tracking-wider">
              [04] // LIVE TELEMETRY
            </div>

            <div className="bg-[#151515] p-3 border border-[#333333] space-y-2">
              <div className="flex items-center justify-between text-[#888888]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>LOCAL TIME (IST):</span>
                </span>
                <span className="font-bold text-white">
                  {currentTime || "07:58:00 AM"}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#888888]">
                <span>COORDINATED UTC:</span>
                <span className="text-[#CCCCCC]">{currentUtc || "02:28:00 UTC"}</span>
              </div>
              <div className="flex items-center justify-between text-[#888888] pt-1 border-t border-[#262626]">
                <span>SERVER LATENCY:</span>
                <span className="text-[#CCFF00]">&lt; 14 MS</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href="https://github.com/jayanthansenthilkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1A1A1A] border border-[#333333] hover:bg-[#CCFF00] hover:text-[#0A0A0A] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jayanthan18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1A1A1A] border border-[#333333] hover:bg-[#CCFF00] hover:text-[#0A0A0A] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@jayanthansenthilkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1A1A1A] border border-[#333333] hover:bg-[#CCFF00] hover:text-[#0A0A0A] transition-colors"
                title="Medium"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href="mailto:jayanthansenthilkumar18@gmail.com"
                className="p-2.5 bg-[#1A1A1A] border border-[#333333] hover:bg-[#CCFF00] hover:text-[#0A0A0A] transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777777]">
          <div>
            &copy; {new Date().getFullYear()} JAYANTHAN SENTHILKUMAR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>LOC: KARUR, INDIA // GLOBAL SCOPE</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] border border-[#333333] hover:bg-[#CCFF00] hover:text-[#0A0A0A] text-white transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
