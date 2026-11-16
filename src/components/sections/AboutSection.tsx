import { FC } from "react";
import { Brain, Layers, Server, Globe2, ShieldCheck, Zap } from "lucide-react";

export const AboutSection: FC = () => {
  const pillars = [
    {
      num: "01",
      title: "INTELLIGENCE & NEURAL NETWORKS",
      desc: "Architecting machine learning pipelines with PyTorch and TensorFlow. Focusing on automated training workflows, computer vision models, and robust quantitative evaluation.",
      icon: Brain,
      tag: "TIER-1 CORE",
    },
    {
      num: "02",
      title: "LLMOPS & AGENTIC ARCHITECTURES",
      desc: "Building enterprise-grade retrieval-augmented generation (RAG) frameworks, multi-agent systems, and real-time contextual search with zero tolerance for hallucination.",
      icon: Zap,
      tag: "PRODUCTION",
    },
    {
      num: "03",
      title: "CONCURRENT ASGI MICROSERVICES",
      desc: "Developing asynchronous, high-throughput backend microservices utilizing Python FastAPI and ASGI runtimes to aggressively minimize inference latency.",
      icon: Server,
      tag: "HIGH VELOCITY",
    },
    {
      num: "04",
      title: "GLOBAL ARCHITECTURAL SCALE",
      desc: "Bridging the gap between cutting-edge AI models and resilient containerized deployments on Docker, Linux, and AWS infrastructure ready for global markets.",
      icon: Globe2,
      tag: "GLOBAL READINESS",
    },
  ];

  return (
    <section id="about" className="relative border-b-2 border-[#0A0A0A] bg-[#FFFFFF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 01
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              THE ENGINEERING BRIEF
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            PHILOSOPHY: ENGINEERING INTELLIGENCE. ARCHITECTING SCALABILITY.
          </div>
        </div>

        {/* Asymmetrical Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight">
              &ldquo;GOOD ARCHITECTURE IS ABOUT DESIGNING SYSTEMS THAT ARE EASILY UNDERSTANDABLE AND HIGHLY ADAPTABLE.&rdquo;
            </h3>

            <div className="space-y-4 font-mono text-sm sm:text-base text-[#333333] leading-relaxed">
              <p>
                I am an <strong className="text-[#0A0A0A] bg-[#CCFF00] px-1 font-bold">AI &amp; ML Engineer</strong> dedicated to turning state-of-the-art research into production-grade systems. I build platforms that do not simply demo well in isolated notebooks, but withstand the rigorous demands of enterprise traffic and high-concurrency environments.
              </p>
              <p>
                My background spans deep neural networks, computer vision, multi-modal retrieval pipelines, and full-stack cloud ecosystems. I take ownership across the complete lifecycle: from dataset curation and model fine-tuning to ASGI microservice packaging, zero-downtime deployment, and frontend delivery.
              </p>
              <p>
                Formally trained in Engineering at <strong>M.Kumarasamy College of Engineering (MKCE), Karur, India</strong>, I actively engineer solutions for international projects and am actively open to engineering roles globally across <strong>Australia, the United States, and India</strong>.
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAF8F5] shadow-[3px_3px_0px_#0A0A0A]">
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-[#0A0A0A]">3+</div>
                <div className="font-mono text-xs text-[#555555] uppercase mt-1">Years Engineering</div>
              </div>
              <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAF8F5] shadow-[3px_3px_0px_#0A0A0A]">
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-[#0038FF]">100%</div>
                <div className="font-mono text-xs text-[#555555] uppercase mt-1">ASGI Concurrency</div>
              </div>
              <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAF8F5] shadow-[3px_3px_0px_#0A0A0A] col-span-2 sm:col-span-1">
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-[#0A0A0A]">GLOBAL</div>
                <div className="font-mono text-xs text-[#555555] uppercase mt-1">AUS / USA / IND</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architectural Spec Sheet */}
          <div className="lg:col-span-5">
            <div className="border-2 border-[#0A0A0A] bg-[#FAF8F5] p-6 shadow-[6px_6px_0px_#0A0A0A]">
              <div className="border-b-2 border-[#0A0A0A] pb-3 mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                  TECHNICAL SPECIFICATION DOSSIER
                </span>
                <ShieldCheck className="w-4 h-4 text-[#0038FF]" />
              </div>

              <div className="font-mono text-xs space-y-4">
                <div>
                  <div className="text-[#777777] uppercase mb-1">01 // CURRENT FOCUS</div>
                  <div className="font-semibold text-[#0A0A0A] bg-[#FFFFFF] p-2.5 border border-[#0A0A0A]">
                    Enterprise-grade LLM applications, custom RAG architectures &amp; scalable microservices.
                  </div>
                </div>

                <div>
                  <div className="text-[#777777] uppercase mb-1">02 // RESEARCH DRIFT</div>
                  <div className="font-semibold text-[#0A0A0A] bg-[#FFFFFF] p-2.5 border border-[#0A0A0A]">
                    Advanced Agentic Workflows, Multi-Modal architectures, and automated evaluation harnesses.
                  </div>
                </div>

                <div>
                  <div className="text-[#777777] uppercase mb-1">03 // COLLABORATION VECTORS</div>
                  <div className="font-semibold text-[#0A0A0A] bg-[#FFFFFF] p-2.5 border border-[#0A0A0A]">
                    Open-source AI tooling, MLOps infrastructure, and high-performance developer systems.
                  </div>
                </div>

                <div>
                  <div className="text-[#777777] uppercase mb-1">04 // ACADEMIC FOUNDATION</div>
                  <div className="font-semibold text-[#0A0A0A] bg-[#FFFFFF] p-2.5 border border-[#0A0A0A]">
                    Bachelor of Engineering — M.Kumarasamy College of Engineering, Karur, India.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#0A0A0A] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#555555] uppercase">
                  VERIFIED IDENTIFIER: JS-ENG-2026
                </span>
                <span className="w-2.5 h-2.5 bg-[#0038FF] border border-[#0A0A0A]"></span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-[#0A0A0A] divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A]">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-6 group hover:bg-[#CCFF00] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#777777] group-hover:text-[#0A0A0A]">
                      [{pillar.num}]
                    </span>
                    <IconComponent className="w-5 h-5 text-[#0A0A0A]" />
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase tracking-tight text-[#0A0A0A] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="font-mono text-xs text-[#555555] group-hover:text-[#0A0A0A] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#0A0A0A] flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]">
                    {pillar.tag}
                  </span>
                  <span className="text-xs">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

