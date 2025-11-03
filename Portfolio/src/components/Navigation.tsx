
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'activities', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Adjust this value as needed
          
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinkClass = (section: string) => {
    return cn(
      "nav-link relative px-3 py-2 transition-all duration-300",
      activeSection === section 
        ? "text-portfolio-teal font-medium after:w-full" 
        : "hover:text-portfolio-teal"
    );
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold">
            <span className="text-portfolio-navy">Sami</span>
            <span className="text-portfolio-teal">.</span>
            <span className="text-portfolio-purple text-sm ml-2 font-medium">Developer</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={navLinkClass('home')}>Home</button>
            <button onClick={() => scrollToSection('about')} className={navLinkClass('about')}>About</button>
            <button onClick={() => scrollToSection('education')} className={navLinkClass('education')}>Education</button>
            <button onClick={() => scrollToSection('experience')} className={navLinkClass('experience')}>Experience</button>
            
            <div className="relative group">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className={cn(
                  "flex items-center space-x-1",
                  (activeSection === 'projects' || activeSection === 'activities') 
                    ? "text-portfolio-teal font-medium" 
                    : "hover:text-portfolio-teal"
                )}
              >
                <span>Work</span>
                <ChevronDown size={16} className={cn("transition-transform", showDropdown ? "rotate-180" : "")} />
              </button>
              
              <div className={cn(
                "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all transform origin-top",
                showDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}>
                <button 
                  onClick={() => {scrollToSection('projects'); setShowDropdown(false);}}
                  className="block w-full text-left px-4 py-2 hover:bg-portfolio-subtle"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {scrollToSection('activities'); setShowDropdown(false);}}
                  className="block w-full text-left px-4 py-2 hover:bg-portfolio-subtle"
                >
                  Activities
                </button>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-5 py-2 bg-portfolio-teal text-white rounded-md hover:bg-portfolio-navy transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-portfolio-navy p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 transition-transform duration-300 transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <button 
            onClick={() => scrollToSection('home')} 
            className={cn("font-medium transition-colors", activeSection === 'home' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={cn("font-medium transition-colors", activeSection === 'about' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className={cn("font-medium transition-colors", activeSection === 'education' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={cn("font-medium transition-colors", activeSection === 'experience' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={cn("font-medium transition-colors", activeSection === 'projects' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('activities')} 
            className={cn("font-medium transition-colors", activeSection === 'activities' ? "text-portfolio-teal" : "hover:text-portfolio-teal")}
          >
            Activities
          </button>
          
          <a 
            href="#contact" 
            onClick={() => {scrollToSection('contact'); setIsOpen(false);}}
            className="px-5 py-2 bg-portfolio-teal text-white rounded-md mt-4"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
