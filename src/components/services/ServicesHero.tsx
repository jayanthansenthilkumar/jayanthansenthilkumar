import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
            <Terminal className="w-3 h-3" />
            <span>austral/services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            Enterprise AI Engineering.
          </h1>
          
          <p className="text-lg text-gray-600 font-mono leading-relaxed mb-10 max-w-2xl">
            We don't sell wrapper apps. We architect, train, and deploy foundational intelligence systems built for scale, security, and measurable ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-mono text-xs px-8 shadow-sm border border-blue-700">
                Request Architecture Review
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-sm font-mono text-xs border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm px-8">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
