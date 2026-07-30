import { ArrowRight, CodeSquare } from "lucide-react";

import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function FeaturedCaseStudies() {
  return (
    <section id="projects" className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CodeSquare className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">Featured Projects</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
            </p>
          </div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:inline-flex rounded-sm font-mono text-xs border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 px-4 py-2 items-center">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative flex flex-col bg-[#fdfdfd] border border-blue-100/60 shadow-sm rounded-sm overflow-hidden h-full group"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              
              <div className="relative z-10 p-8 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[0.15em] mb-8 font-sans">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 text-[13px] font-mono leading-[1.8] flex-grow mb-10 whitespace-pre-line">
                  "{project.description}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold font-sans text-xs shrink-0">
                    PK
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 font-sans leading-tight">Prithika Kannan</span>
                    <span className="text-xs font-sans text-gray-500 leading-tight">Software Engineer</span>
                  </div>
                </div>

                {/* Hover overlay links */}
                <div className="absolute top-6 right-6 flex opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                  <Link to={`/projects/${project.id}`} className="p-1.5 bg-white border border-blue-100 text-blue-600 rounded-sm hover:bg-blue-50 transition-colors shadow-sm" title="Overview">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white border border-gray-200 text-gray-600 rounded-sm hover:bg-gray-50 transition-colors shadow-sm" title="Source Code">
                    <CodeSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center rounded-sm font-mono text-xs border border-gray-300 bg-white shadow-sm px-4 py-2">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
