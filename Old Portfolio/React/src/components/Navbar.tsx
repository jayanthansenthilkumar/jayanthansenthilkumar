import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        const isNavbarClick = target.closest('.navbar-container');
        const isMenuButtonClick = target.closest('.menu-button');
        const isMobileMenuClick = target.closest('.mobile-menu');
        
        if (!isNavbarClick && !isMenuButtonClick && !isMobileMenuClick) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300", 
        scrolled ? "glass-effect shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 navbar-container">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-bold text-navy-dark dark:text-white flex items-center space-x-2"
          >
            <span className="text-base sm:text-lg md:text-2xl truncate max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-full">
              Jayanthan Senthilkumar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "link-hover transition-colors text-navy-dark dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple font-medium",
                  location.pathname === link.path && "text-purple-deep dark:text-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Avatar className="h-10 w-10 border-2 border-purple hover:border-teal transition-all">
              <AvatarImage src="/profile.jpg" alt="Jayanthan Senthilkumar" />
              <AvatarFallback className="bg-gradient text-white">JS</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Avatar className="h-7 w-7 sm:h-8 sm:w-8 border-2 border-purple flex-shrink-0">
              <AvatarImage src="/profile.jpg" alt="Jayanthan Senthilkumar" />
              <AvatarFallback className="bg-gradient text-white text-sm">JS</AvatarFallback>
            </Avatar>
            <button
              className="text-navy-dark dark:text-white p-1.5 sm:p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors menu-button flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Floating Menu */}
      <div
        className={cn(
          "fixed top-[65px] sm:top-[70px] right-4 sm:right-6 z-50 glass-effect flex flex-col rounded-lg shadow-lg transition-all duration-300 ease-in-out md:hidden mobile-menu",
          "border border-white/20 dark:border-white/10 w-[180px] sm:w-[220px]",
          isMenuOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"
        )}
      >
        <div className="flex flex-col py-2 px-1 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setTimeout(() => setIsMenuOpen(false), 50);
              }}
              className={cn(
                "text-base font-medium py-2.5 sm:py-3 px-3 sm:px-4 m-1 rounded-md block text-center",
                "hover:bg-white/20 active:bg-white/30 transition-colors",
                location.pathname === link.path 
                  ? "text-white bg-gradient shadow-md" 
                  : "text-navy-dark dark:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
