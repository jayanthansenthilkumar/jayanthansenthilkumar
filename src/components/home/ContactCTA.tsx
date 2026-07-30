import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
          {/* Header */}
          <div className="flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
            <Terminal className="w-4 h-4 text-gray-400 mr-3" />
            <span className="text-xs font-mono text-gray-500 font-semibold">austral-cli</span>
          </div>
          
          <div className="p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif italic">Ready to scale your intelligence?</h2>
              <p className="text-sm font-mono text-gray-600 leading-relaxed">
                Speak with an AI architect to discuss your use case, review our security posture, and get a technical assessment of your requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-mono text-xs px-8 shadow-sm border border-blue-700">
                  Book Demo
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full rounded-sm font-mono text-xs border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm px-8">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
