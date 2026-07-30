import { Code2, Database, Network, ShieldCheck } from "lucide-react";

const offerings = [
  {
    title: "Custom LLM Fine-Tuning",
    description: "Generic models fail on domain-specific tasks. We fine-tune foundational open-weight models (Llama, Mistral) on your proprietary data. The result is a highly specialized model that outperforms GPT-4 on your specific workloads while being significantly cheaper to run.",
    deliverables: ["Curated Training Datasets", "Fine-tuned Weights", "Evaluation Benchmarks", "Inference Endpoint API"],
    icon: <Database className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Secure On-Premise Deployments",
    description: "For defense, healthcare, and finance sectors where data cannot leave the perimeter. We deploy entire inference stacks into your VPC or bare-metal servers. Fully air-gapped, zero external dependencies, with Role-Based Access Control built-in.",
    deliverables: ["Kubernetes Deployment Manifests", "Hardware Provisioning Guide", "Security Audit Report", "Maintenance Runbooks"],
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "High-Throughput Inference Optimization",
    description: "If your AI bills are spiraling or latency is too high, we can help. We optimize existing models using techniques like quantization (AWQ/GPTQ), continuous batching, and custom CUDA kernels to achieve sub-50ms latency at scale.",
    deliverables: ["Quantized Model Weights", "TensorRT Engines", "Load Testing Results", "Cost Analysis Report"],
    icon: <Code2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Multi-Agent Systems",
    description: "Single prompts are limiting. We architect networks of specialized AI agents that can plan, use tools, write code, and iterate to solve complex, multi-step business problems asynchronously.",
    deliverables: ["Agent Orchestration Architecture", "Custom Tool Integrations", "Memory/Context Store", "Monitoring Dashboard"],
    icon: <Network className="w-6 h-6 text-blue-600" />
  }
];

export function ServiceOfferings() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white p-8 md:p-12 h-full hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-sm">
                  {offering.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-serif">{offering.title}</h2>
              </div>
              
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-8">
                {offering.description}
              </p>
              
              <div>
                <h3 className="text-xs font-bold text-gray-900 font-mono uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Deliverables</h3>
                <ul className="space-y-2">
                  {offering.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
