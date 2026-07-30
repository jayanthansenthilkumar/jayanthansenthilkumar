const phases = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We analyze your data, define success metrics, and design a scalable system architecture. We never start building without a clear ROI model.",
    duration: "1-2 Weeks"
  },
  {
    step: "02",
    title: "Prototyping & Validation",
    description: "We build a functional prototype to validate the core assumptions, test model capabilities, and establish baseline performance metrics.",
    duration: "2-4 Weeks"
  },
  {
    step: "03",
    title: "Production Engineering",
    description: "The prototype is hardened into enterprise-grade software. This involves setting up CI/CD, security guardrails, and optimizing for latency.",
    duration: "4-8 Weeks"
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    description: "Gradual rollout to production. We monitor model drift, system performance, and user adoption, adjusting the infrastructure as load increases.",
    duration: "Ongoing"
  }
];

export function Process() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Engagement Model</h2>
          <p className="text-sm font-mono text-gray-600">
            A rigorous, engineering-first approach to deploying AI in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white p-6 relative hover:bg-gray-50 transition-colors h-full flex flex-col">
              <div className="text-4xl font-bold text-gray-200 font-serif italic mb-4">
                {phase.step}
              </div>
              
              <h3 className="text-base font-bold text-gray-900 mb-3 font-serif">{phase.title}</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-6 flex-grow">
                {phase.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Estimated Timeline</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">{phase.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
