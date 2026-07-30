import { Box, Layers, Server, Code, Database, Globe, Network, Cpu, FileJson } from "lucide-react";

const technologies = [
  { name: "Python", category: "Language", icon: <Code className="w-4 h-4 text-blue-500" /> },
  { name: "JavaScript", category: "Language", icon: <Code className="w-4 h-4 text-yellow-500" /> },
  { name: "HTML & CSS", category: "Frontend", icon: <Globe className="w-4 h-4 text-orange-500" /> },
  { name: "Flask", category: "Framework", icon: <Box className="w-4 h-4 text-gray-700" /> },
  { name: "MySQL", category: "Database", icon: <Database className="w-4 h-4 text-blue-600" /> },
  { name: "REST APIs", category: "Backend", icon: <Network className="w-4 h-4 text-green-600" /> },
  { name: "Git", category: "Tools", icon: <Layers className="w-4 h-4 text-red-500" /> },
  { name: "GitHub", category: "Tools", icon: <Server className="w-4 h-4 text-gray-900" /> },
];

export function TechnologyStack() {
  return (
    <section id="skills" className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Technical Skills</h2>
            <p className="text-gray-600 text-sm font-mono">
              A comprehensive toolkit for building scalable backend systems, responsive web apps, and machine learning models.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-6 bg-white hover:bg-gray-50 transition-colors h-full flex-col justify-center text-center"
              >
                <div className="p-1.5 bg-gray-50 border border-gray-100 rounded-sm mb-2">
                  {tech.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 font-serif">{tech.name}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
