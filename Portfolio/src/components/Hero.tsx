
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-portfolio-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-portfolio-teal/10 text-portfolio-teal rounded-full font-medium text-sm">
              Full Stack Developer
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-navy">
              Hi, I'm <span className="gradient-text">Syed Sami</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-portfolio-purple font-medium">
              Turning Ideas into Digital Solutions
            </h2>

            <p className="text-lg text-gray-600 max-w-lg">
              AI/ML engineering student passionate about web development, combining technical expertise with creative problem-solving to build innovative digital experiences.
            </p>

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/helix342" target="_blank" rel="noopener noreferrer"
                className="social-icon">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/syedsami1574" target="_blank" rel="noopener noreferrer"
                className="social-icon">
                <Linkedin size={22} />
              </a>
              <a href="mailto:syedsami4751@gmail.com"
                className="social-icon">
                <Mail size={22} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToAbout}
                className="button-primary"
              >
                Explore Portfolio
              </Button>
              <a href="../public/Syed Sami Resume.pdf" download>
              <Button
                variant="outline"
                className="button-secondary flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Download CV</span>
              </Button>
              </a>
            </div>
          </div>

          <div className="md:w-2/5 mt-16 md:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-portfolio-teal to-portfolio-purple opacity-20 blur-xl animate-spin-slow"></div>

              <div className="w-64 h-64 md:w-72 md:h-72 bg-portfolio-teal rounded-full absolute -top-6 -right-6 animate-pulse-soft"></div>
              <div className="w-64 h-64 md:w-72 md:h-72 bg-portfolio-purple rounded-full absolute -bottom-6 -left-6 animate-pulse-soft animation-delay-2000"></div>

              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden animate-float">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-portfolio-navy to-portfolio-teal bg-clip-text text-transparent"><img
                  src="../public/IMG_20240802_130913.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                /></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-10 px-4 py-2 bg-white rounded-lg shadow-lg animate-float">
                <span className="font-medium text-portfolio-navy">React</span>
              </div>
              <div className="absolute -left-6 bottom-10 px-4 py-2 bg-white rounded-lg shadow-lg animate-float animation-delay-1000">
                <span className="font-medium text-portfolio-navy">PHP</span>
              </div>
              <div className="absolute right-10 -bottom-2 px-4 py-2 bg-white rounded-lg shadow-lg animate-float animation-delay-1500">
                <span className="font-medium text-portfolio-navy">Java</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button onClick={scrollToAbout} className="flex flex-col items-center text-portfolio-navy/60 hover:text-portfolio-teal transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
