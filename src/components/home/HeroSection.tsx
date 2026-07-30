import { ArrowRight, Code, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-0 overflow-hidden bg-transparent border-b border-gray-200">
      
      {/* Announcement Badge */}
      <div className="text-center mb-16 relative z-10">
        <a
          href="https://github.com/prithikakannan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/60 text-xs font-mono text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 shadow-sm"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white shrink-0">
            <Code className="w-3 h-3" />
          </span>
          <span className="truncate"><span className="font-semibold text-blue-600">Available</span> - Open to New Opportunities</span>
          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        
        <h1 className="text-5xl md:text-[4.5rem] lg:text-[5rem] text-blue-600 mb-6 leading-tight tracking-tight font-serif italic">
          Prithika Kannan
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-mono">
          Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
          Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving.
        </p>
        
        <div className="flex flex-row gap-3 justify-center mb-6">
          <Link to="/projects">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm h-10 px-5 flex items-center gap-2 shadow-sm">
              <span className="font-sans font-medium text-sm">View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="rounded-sm h-10 px-5 bg-white border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center gap-2 shadow-sm">
              <span className="font-sans font-medium text-sm">Contact Me</span>
            </Button>
          </Link>
        </div>
      </div>


      {/* 3 Column Feature Grid (Bordered) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 bg-transparent text-left relative z-10 max-w-7xl mx-auto">
        <div className="p-8 border-b md:border-b-0 border-r-0 md:border-r border-gray-200">
          <div className="flex items-center gap-2 mb-2 text-gray-900">
            <Code className="w-4 h-4 text-blue-600" />
            <h3 className="text-base font-bold font-serif">Full-Stack Development</h3>
          </div>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Building robust web applications using Python, HTML, CSS, JavaScript, and PHP with modern frameworks like Flask.
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 border-r-0 md:border-r border-gray-200">
          <div className="flex items-center gap-2 mb-2 text-gray-900">
            <Database className="w-4 h-4 text-blue-600" />
            <h3 className="text-base font-bold font-serif">Data-Driven Systems</h3>
          </div>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Designing scalable backend systems, optimizing SQL databases, and engineering predictive ML models for performance.
          </p>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-2 text-gray-900">
            <Terminal className="w-4 h-4 text-blue-600" />
            <h3 className="text-base font-bold font-serif">Problem Solving</h3>
          </div>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Focused on improving system reliability, reducing latency, and enhancing overall user experience through creative engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
