import { Terminal } from "lucide-react";

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
            <Terminal className="w-3 h-3" />
            <span>austral/about</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            Engineering the future of enterprise AI.
          </h1>
          
          <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
            We are a collective of researchers, systems engineers, and product builders dedicated to bridging the gap between academic AI research and production-grade enterprise software.
          </p>
          
          <div className="flex items-center gap-6 border-t border-gray-200 pt-8">
            <div>
              <div className="text-3xl font-bold text-gray-900 font-serif italic">2024</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Founded</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold text-blue-600 font-serif italic">$40M</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Funding</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold text-gray-900 font-serif italic">45+</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Engineers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
