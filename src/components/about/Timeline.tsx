const milestones = [
  {
    year: "2024",
    quarter: "Q1",
    title: "The Initial Idea",
    description: "The foundational idea for Austral AI was conceived, focusing on solving secure enterprise AI infrastructure."
  },
  {
    year: "2026",
    quarter: "Q1",
    title: "Company Initiated",
    description: "Austral AI officially started operations, incorporating the vision and assembling the core engineering team."
  },
  {
    year: "Present",
    quarter: "",
    title: "Developing Aventrea.me",
    description: "Currently actively developing our flagship product, Aventrea.me, the premier living digital identity platform."
  }
];

export function Timeline() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">System Initialization</h2>
          <p className="text-sm font-mono text-gray-600">The execution trace of Austral AI to date.</p>
        </div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-none">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
                
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm outline outline-4 outline-[#fafafa] z-10" />
                  {index !== milestones.length - 1 && (
                    <div className="w-px h-32 bg-gray-200 absolute top-4 left-1.5" />
                  )}
                </div>

                {/* Mobile Dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-600 rounded-sm outline outline-4 outline-[#fafafa] md:hidden" />

                <div className="ml-6 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-12 w-full">
                  <div className="flex-shrink-0 w-32 pt-0.5">
                    <span className="text-xl font-bold text-gray-900 font-serif italic">{milestone.year}</span>
                    <span className="text-sm font-mono text-blue-600 ml-2">{milestone.quarter}</span>
                  </div>
                  
                  <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 flex-grow hover:border-gray-300 transition-colors">
                    <h3 className="text-base font-bold text-gray-900 font-serif mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 font-mono leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
