import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Radio, ExternalLink } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "ABOUT", href: isHomePage ? "#about" : "/#about", id: "about" },
    { label: "TIMELINE", href: isHomePage ? "#experience" : "/#experience", id: "experience" },
    { label: "PROJECTS", href: isHomePage ? "#projects" : "/#projects", id: "projects" },
    { label: "STACK", href: isHomePage ? "#skills" : "/#skills", id: "skills" },
    { label: "EVENTS", href: "/events", id: "events", isRoute: true },
    { label: "CONTACT", href: isHomePage ? "#contact" : "/#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-[#F4F0EA] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brandmark / Logo */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 group text-[#0A0A0A] select-none"
          >
            <div className="w-8 h-8 bg-[#0A0A0A] text-[#CCFF00] font-mono font-bold text-xs flex items-center justify-center border-2 border-[#0A0A0A] group-hover:bg-[#CCFF00] group-hover:text-[#0A0A0A] transition-colors">
              JS
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-base font-bold tracking-tight uppercase leading-none">
                JAYANTHAN
              </span>
              <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">
                AI &amp; ML SYSTEMS
              </span>
            </div>
          </Link>

          {/* Availability Pill (Desktop) */}
          <div className="hidden xl:flex items-center gap-1.5 font-mono text-[10px] bg-[#FFFFFF] border border-[#0A0A0A] px-2 py-0.5 ml-2">
            <span className="w-2 h-2 bg-[#CCFF00] border border-[#0A0A0A] rounded-none animate-pulse"></span>
            <span className="font-semibold text-[#0A0A0A]">OPEN FOR ROLES</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider">
          {navLinks.map((link, idx) => {
            const isActive = link.isRoute
              ? location.pathname === link.href
              : isHomePage && activeSection === link.id;

            return link.isRoute ? (
              <Link
                key={link.id}
                to={link.href}
                className={`px-3 py-1.5 transition-all border ${
                  isActive
                    ? "bg-[#0A0A0A] text-[#CCFF00] border-[#0A0A0A] shadow-[2px_2px_0px_#CCFF00]"
                    : "text-[#0A0A0A] border-transparent hover:border-[#0A0A0A] hover:bg-[#FAF8F5]"
                }`}
              >
                [{idx < 9 ? `0${idx + 1}` : idx + 1}] {link.label}
              </Link>
            ) : (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 transition-all border ${
                  isActive
                    ? "bg-[#0A0A0A] text-[#CCFF00] border-[#0A0A0A] shadow-[2px_2px_0px_#CCFF00]"
                    : "text-[#0A0A0A] border-transparent hover:border-[#0A0A0A] hover:bg-[#FAF8F5]"
                }`}
              >
                [{idx < 9 ? `0${idx + 1}` : idx + 1}] {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="https://hilo.jayanthan.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="lime" size="sm" className="gap-1.5 text-xs">
              <span>HILO APP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>

          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className="hidden sm:inline-flex"
          >
            <Button variant="default" size="sm" className="gap-1.5 text-xs">
              <span>CONTACT</span>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-[#FFFFFF] border-2 border-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A] text-[#0A0A0A] hover:bg-[#CCFF00] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#F4F0EA] border-t-2 border-[#0A0A0A] overflow-y-auto p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase font-bold text-[#777777] border-b border-[#0A0A0A] pb-2">
              NAVIGATION INDEX // SELECT DESTINATION
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#0A0A0A] p-3 border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#CCFF00] transition-colors flex items-center justify-between"
                >
                  <span>
                    [{idx < 9 ? `0${idx + 1}` : idx + 1}] {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#555555]">&rarr;</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 space-y-3">
              <a
                href="https://hilo.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button variant="lime" size="lg" className="w-full gap-2 justify-center">
                  <span>LAUNCH HILO PORTFOLIO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="https://blogs.jayanthan.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button variant="outline" size="lg" className="w-full gap-2 justify-center">
                  <span>READ TECHNICAL BLOGS</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-[#0A0A0A] mt-6 font-mono text-xs text-[#555555] space-y-1">
            <div className="text-[#0A0A0A] font-bold">JAYANTHAN SENTHILKUMAR</div>
            <div>AI &amp; ML ENGINEER // MLOPS // LLMOPS</div>
            <div className="text-[#0038FF]">GLOBAL ROLES: AUS / USA / IND</div>
          </div>
        </div>
      )}
    </header>
  );
}
