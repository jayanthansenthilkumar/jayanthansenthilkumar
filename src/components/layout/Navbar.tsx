import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200 border-b border-gray-200",
        isScrolled 
          ? "bg-[#f8f9fa]/90 backdrop-blur" 
          : "bg-[#f8f9fa]"
      )}
    >
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors shrink-0">
            <span className="text-lg font-bold font-serif italic">Jayanthan Senthilkumar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[13px] font-mono text-gray-700">
            <Link to="/" className={cn("transition-colors", isActive('/') ? "text-blue-600 font-bold" : "hover:text-gray-900")}>Home</Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 p-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4 font-mono text-sm absolute top-14 left-0 w-full z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto shadow-xl">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left", isActive('/') ? "text-blue-600 font-bold" : "text-gray-600 hover:text-gray-900")}>Home</Link>
        </div>
      )}
    </header>
  );
}
