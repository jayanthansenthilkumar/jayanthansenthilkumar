import { Cpu, Lock, Network, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom LLM Fine-tuning",
    description: "Train foundational models on your proprietary datasets with full parameter control and zero data leakage to third parties.",
    icon: <Cpu className="w-5 h-5 text-gray-700" />,
    href: "/services"
  },
  {
    title: "On-Premise Deployments",
    description: "Air-gapped AI infrastructure deployed directly to your private cloud or bare-metal servers for maximum security.",
    icon: <Lock className="w-5 h-5 text-gray-700" />,
    href: "/services"
  },
  {
    title: "High-Throughput APIs",
    description: "Low-latency inference APIs designed for high-concurrency enterprise workloads. Backed by strict SLAs.",
    icon: <Zap className="w-5 h-5 text-gray-700" />,
    href: "/services"
  },
  {
    title: "Multi-Agent Architectures",
    description: "Complex, orchestrated networks of specialized AI agents working together to solve multi-step business problems.",
    icon: <Network className="w-5 h-5 text-gray-700" />,
    href: "/services"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Core Capabilities</h2>
          <p className="text-gray-600 text-sm font-mono max-w-2xl">
            We provide the foundational infrastructure and expertise required to run AI workloads reliably at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {services.map((service, index) => (
            <Link key={service.title}
              to={service.href}
              className="group block bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 border border-gray-200 rounded-sm group-hover:bg-white group-hover:border-gray-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 font-serif">{service.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed font-mono">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
