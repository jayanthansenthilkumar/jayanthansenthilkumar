import { FC, useState } from "react";
import { Cpu, Terminal, Layers, Cloud, Sparkles, CheckSquare } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: typeof Cpu;
  lead: string;
  skills: { name: string; level: string; spec: string }[];
}

export const SkillsSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "ai",
      title: "01 // INTELLIGENCE & MLOPS",
      icon: Cpu,
      lead: "Specialized in deep learning model lifecycle, from tensor graph construction to production inference.",
      skills: [
        { name: "Python", level: "EXPERT", spec: "Core language & tensor manipulation" },
        { name: "PyTorch", level: "PRODUCTION", spec: "Deep neural networks & vision models" },
        { name: "TensorFlow", level: "ADVANCED", spec: "Distributed graph execution" },
        { name: "Scikit-Learn", level: "ADVANCED", spec: "Supervised & unsupervised learning" },
        { name: "LangChain & LlamaIndex", level: "PRODUCTION", spec: "Agentic RAG & semantic search" },
        { name: "Hugging Face", level: "ADVANCED", spec: "Transformer models & tokenizers" },
        { name: "Computer Vision / OpenCV", level: "PRODUCTION", spec: "Image processing & feature extraction" },
        { name: "Pandas & NumPy", level: "EXPERT", spec: "Vectorized numerical computing" },
      ],
    },
    {
      id: "frontend",
      title: "02 // SCALABLE FRONTEND",
      icon: Layers,
      lead: "Crafting zero-layout-shift, high-performance web systems with modern React toolchains.",
      skills: [
        { name: "React 19 / 18", level: "EXPERT", spec: "Hooks, state trees & concurrent mode" },
        { name: "TypeScript", level: "EXPERT", spec: "Strict typing & polymorphic generics" },
        { name: "Next.js", level: "PRODUCTION", spec: "App Router, SSR & static synthesis" },
        { name: "Vite Bundler", level: "EXPERT", spec: "Rollup toolchain & ES module dev" },
        { name: "Tailwind CSS v4 / v3", level: "EXPERT", spec: "Neo-Brutalist & design token systems" },
        { name: "Framer Motion", level: "PRODUCTION", spec: "Physics choreography & gestures" },
        { name: "GSAP Animation", level: "ADVANCED", spec: "High-performance scroll triggers" },
        { name: "Figma UI/UX", level: "PRODUCTION", spec: "Design system architectural tokens" },
      ],
    },
    {
      id: "backend",
      title: "03 // BACKEND & CONCURRENCY",
      icon: Terminal,
      lead: "Designing non-blocking ASGI microservices and scalable persistent database layers.",
      skills: [
        { name: "FastAPI", level: "PRODUCTION", spec: "Async ASGI API endpoints & OpenAPI" },
        { name: "Python ASGI", level: "PRODUCTION", spec: "Uvicorn asynchronous event loops" },
        { name: "Node.js & Express", level: "ADVANCED", spec: "Microservices & event-driven APIs" },
        { name: "PostgreSQL", level: "ADVANCED", spec: "Relational schemas, indexing & ACID" },
        { name: "MongoDB", level: "PRODUCTION", spec: "Document stores & aggregation pipelines" },
        { name: "Redis", level: "ADVANCED", spec: "In-memory caching & distributed pub/sub" },
        { name: "WebSockets", level: "PRODUCTION", spec: "Real-time bi-directional streaming" },
        { name: "RESTful Architecture", level: "EXPERT", spec: "Idempotent resource APIs" },
      ],
    },
    {
      id: "devops",
      title: "04 // DEVOPS & INFRASTRUCTURE",
      icon: Cloud,
      lead: "Orchestrating containerized systems, cloud deployment pipelines, and Linux host servers.",
      skills: [
        { name: "Docker Containerization", level: "PRODUCTION", spec: "Multi-stage builds & container isolation" },
        { name: "Amazon Web Services (AWS)", level: "PRODUCTION", spec: "EC2, S3, CloudFront & Lambda" },
        { name: "Google Cloud (GCP)", level: "ADVANCED", spec: "Compute Engine & cloud artifacts" },
        { name: "Linux / Unix Shell", level: "EXPERT", spec: "Bash scripting, systemd & POSIX" },
        { name: "Git & GitHub CI/CD", level: "EXPERT", spec: "Trunk-based workflow & automation" },
        { name: "System Monitoring", level: "ADVANCED", spec: "Telemetry logging & health probes" },
      ],
    },
  ];

  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative border-b-2 border-[#0A0A0A] bg-[#FAF8F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-8 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 04
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              SYSTEM ARCHITECTURE &amp; STACK
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            STRUCTURED BREAKDOWN OF CORE SPECIALIZATIONS, RUNTIMES &amp; INFRASTRUCTURE.
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E8E3D9]">
          <button
            onClick={() => setActiveCategory("all")}
            className={`font-mono text-xs uppercase font-bold px-3 py-1.5 border-2 border-[#0A0A0A] transition-all ${
              activeCategory === "all"
                ? "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00]"
                : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#E8E3D9]"
            }`}
          >
            [ALL CATEGORIES]
          </button>
          <button
            onClick={() => setActiveCategory("ai")}
            className={`font-mono text-xs uppercase font-bold px-3 py-1.5 border-2 border-[#0A0A0A] transition-all ${
              activeCategory === "ai"
                ? "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00]"
                : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#E8E3D9]"
            }`}
          >
            [01] AI &amp; MLOPS
          </button>
          <button
            onClick={() => setActiveCategory("frontend")}
            className={`font-mono text-xs uppercase font-bold px-3 py-1.5 border-2 border-[#0A0A0A] transition-all ${
              activeCategory === "frontend"
                ? "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00]"
                : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#E8E3D9]"
            }`}
          >
            [02] FRONTEND
          </button>
          <button
            onClick={() => setActiveCategory("backend")}
            className={`font-mono text-xs uppercase font-bold px-3 py-1.5 border-2 border-[#0A0A0A] transition-all ${
              activeCategory === "backend"
                ? "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00]"
                : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#E8E3D9]"
            }`}
          >
            [03] BACKEND
          </button>
          <button
            onClick={() => setActiveCategory("devops")}
            className={`font-mono text-xs uppercase font-bold px-3 py-1.5 border-2 border-[#0A0A0A] transition-all ${
              activeCategory === "devops"
                ? "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00]"
                : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#E8E3D9]"
            }`}
          >
            [04] DEVOPS
          </button>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {visibleCategories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                className="border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A]"
              >
                {/* Category Header */}
                <div className="bg-[#0A0A0A] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#0A0A0A]">
                  <div className="flex items-center gap-3">
                    <IconComp className="w-5 h-5 text-[#CCFF00]" />
                    <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold uppercase tracking-wider text-[#CCFF00]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-gray-300">
                    {cat.lead}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x border-b border-[#0A0A0A] last:border-b-0 divide-[#0A0A0A] bg-[#FFFFFF]">
                  {cat.skills.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-5 flex flex-col justify-between hover:bg-[#CCFF00] group transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] text-[#777777] group-hover:text-[#0A0A0A]">
                            // {idx < 9 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#FAF8F5] border border-[#0A0A0A] text-[#0A0A0A] uppercase">
                            {s.level}
                          </span>
                        </div>
                        <h4 className="font-['Space_Grotesk'] font-bold text-base text-[#0A0A0A] mb-1">
                          {s.name}
                        </h4>
                      </div>
                      <p className="font-mono text-[11px] text-[#555555] group-hover:text-[#0A0A0A] leading-tight pt-3 border-t border-[#E8E3D9] group-hover:border-[#0A0A0A]">
                        {s.spec}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

