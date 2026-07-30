import { ShieldAlert, Zap, Lock, Scaling } from "lucide-react";

const values = [
  {
    title: "Performance Absolute",
    description: "We optimize for bare-metal performance. Every millisecond of latency is a bug. We build our infrastructure in Rust and CUDA to ensure maximum throughput.",
    icon: <Zap className="w-5 h-5 text-gray-700" />
  },
  {
    title: "Zero-Trust Security",
    description: "Security is not an afterthought. We assume hostile environments and build systems that protect proprietary weights and customer data at all costs.",
    icon: <ShieldAlert className="w-5 h-5 text-gray-700" />
  },
  {
    title: "Data Sovereignty",
    description: "Your data belongs to you. We never train our base models on customer data, and we offer fully air-gapped deployments for maximum compliance.",
    icon: <Lock className="w-5 h-5 text-gray-700" />
  },
  {
    title: "Scalable by Default",
    description: "Prototypes are easy; production is hard. We design architectures that scale horizontally from day one without requiring rewrites.",
    icon: <Scaling className="w-5 h-5 text-gray-700" />
  }
];

export function Values() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Core Principles</h2>
          <p className="text-sm font-mono text-gray-600">
            The engineering maxims that govern every technical decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors h-full">
              <div className="mt-1 bg-gray-50 p-2 rounded-sm border border-gray-200">
                {value.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2 font-serif">{value.title}</h3>
                <p className="text-xs font-mono text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
