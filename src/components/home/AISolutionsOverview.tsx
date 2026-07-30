import { Database, Bot, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Intelligent Document Processing",
    description: "Extract structured data from unstructured documents with 99% accuracy.",
    icon: <Database className="w-4 h-4 text-gray-600" />,
    stats: "3x Faster Processing"
  },
  {
    title: "Customer Support AI Agent",
    description: "Resolve 80% of L1 support tickets instantly across multiple channels.",
    icon: <Bot className="w-4 h-4 text-gray-600" />,
    stats: "24/7 Availability"
  },
  {
    title: "Predictive Maintenance",
    description: "Identify equipment failures before they happen using IoT sensor data.",
    icon: <Zap className="w-4 h-4 text-gray-600" />,
    stats: "40% Downtime Reduction"
  }
];

export function AISolutionsOverview() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Packaged Solutions</h2>
            <p className="text-gray-600 text-sm font-mono">
              Pre-built architectures designed to solve specific business challenges rapidly.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" className="hidden md:inline-flex rounded-sm font-mono text-xs border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm">
              View All Solutions <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              {/* Header Tab */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50">
                {solution.icon}
                <h3 className="text-sm font-bold text-gray-900 font-serif">{solution.title}</h3>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm font-mono mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-mono text-blue-600 font-semibold">
                    {solution.stats}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link to="/services">
            <Button variant="outline" className="w-full rounded-sm font-mono text-xs border-gray-300 bg-white shadow-sm">
              View All Solutions <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
