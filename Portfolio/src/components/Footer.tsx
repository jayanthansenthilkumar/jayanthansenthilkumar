
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white">
      {/* Main Footer */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Column */}
            <div className="animate-on-scroll">
              <div className="mb-6">
                <a href="#" className="font-display text-2xl font-bold inline-flex items-baseline">
                  <span className="text-white">Sami</span>
                  <span className="text-portfolio-teal">.</span>
                  <span className="text-portfolio-teal text-sm ml-1 font-medium">Developer</span>
                </a>
              </div>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Full stack developer with expertise in creating stunning web applications 
                that deliver exceptional user experiences and robust functionality.
                Passionate about building innovative solutions that make a difference.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/helix342" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                  <Github size={20} className="text-portfolio-teal" />
                </a>
                <a href="https://www.linkedin.com/in/syedsami1574/" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                  <Linkedin size={20} className="text-portfolio-teal" />
                </a>
                <a href="https://www.instagram.com/i_samiiiz/" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                  <Instagram size={20} className="text-portfolio-teal" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="animate-on-scroll animate-delay-1">
              <h3 className="text-lg font-semibold mb-6 text-white relative inline-block after:content-[''] after:block after:h-0.5 after:w-12 after:bg-portfolio-teal after:mt-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="animate-on-scroll animate-delay-2">
              <h3 className="text-lg font-semibold mb-6 text-white relative inline-block after:content-[''] after:block after:h-0.5 after:w-12 after:bg-portfolio-teal after:mt-2">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    Web Design & Development
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    Database Design
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-portfolio-teal transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m9 18 6-6-6-6"/></svg>
                    IoT Projects
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="animate-on-scroll animate-delay-3">
              <h3 className="text-lg font-semibold mb-6 text-white relative inline-block after:content-[''] after:block after:h-0.5 after:w-12 after:bg-portfolio-teal after:mt-2">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={18} className="text-portfolio-teal mr-3 mt-1" />
                  <span className="text-gray-300">syedsami4751@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Phone size={18} className="text-portfolio-teal mr-3 mt-1" />
                  <span className="text-gray-300">+91 6383299336</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={18} className="text-portfolio-teal mr-3 mt-1" />
                  <span className="text-gray-300">Karur, Tamil Nadu<br/>India</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-medium text-sm mb-2">Working Hours</h4>
                <p className="text-sm text-gray-400">Monday - Friday: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Bottom Bar */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400">
              © {currentYear} <span className="text-white">Syed Sami.</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 p-3 bg-portfolio-teal text-white rounded-full shadow-lg hover:bg-portfolio-navy transition-all"
        title="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </a>
    </footer>
  );
}
