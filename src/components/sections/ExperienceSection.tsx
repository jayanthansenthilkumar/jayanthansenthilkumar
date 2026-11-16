import { FC, useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  link?: string;
}

export const ExperienceSection: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("01");

  const experiences: ExperienceItem[] = [
    {
      id: "01",
      role: "Lead AI & Full-Stack Systems Engineer",
      company: "AustralAI / Syraa Platforms",
      period: "2024 — PRESENT",
      location: "Remote / Hybrid (Global)",
      badge: "CURRENT ROLE",
      summary: "Architecting end-to-end MLOps pipelines, distributed ASGI microservices, and client-facing digital infrastructure across AustralAI and Syraa platforms.",
      deliverables: [
        "Architected and deployed the AustralAI Events & Certifications infrastructure handling credential issuance and instant verification.",
        "Engineered asynchronous FastAPI microservices reducing inference endpoint latency by 42% through structured batching and caching.",
        "Built resilient full-stack web applications with React, TypeScript, and Docker containerization ensuring 99.9% service uptime.",
        "Spearheaded multi-tenant system architectures and administrative communication channels (Hiii AustralAI engine).",
      ],
      technologies: ["Python", "FastAPI", "PyTorch", "React", "TypeScript", "Docker", "PostgreSQL", "AWS"],
      link: "https://events.syraa.app",
    },
    {
      id: "02",
      role: "AI & MLOps Systems Engineer",
      company: "Enterprise AI & R&D Initiatives",
      period: "2023 — 2024",
      location: "India / Global Distributed",
      badge: "MLOPS SPECIALIZATION",
      summary: "Designed and benchmarked retrieval-augmented generation (RAG) frameworks and autonomous multi-agent pipelines for enterprise search problems.",
      deliverables: [
        "Constructed production RAG pipelines integrating LangChain, LlamaIndex, and hybrid vector search for high-fidelity retrieval.",
        "Developed automated model evaluation harnesses to rigorously quantify hallucination rates and prompt stability before release.",
        "Implemented containerized continuous-integration and deployment pipelines for ML inference models using Docker and Linux.",
        "Curated and preprocessed large-scale multi-modal datasets for training and fine-tuning domain-specific neural networks.",
      ],
      technologies: ["LangChain", "LlamaIndex", "Hugging Face", "Scikit-Learn", "Python", "Docker", "Linux"],
      link: "https://hilo.jayanthan.fyi",
    },
    {
      id: "03",
      role: "Full-Stack Software Engineer",
      company: "Web Systems & Cloud Infrastructure",
      period: "2022 — 2023",
      location: "Karur / Bangalore, India",
      badge: "PLATFORM ENGINEERING",
      summary: "Developed highly responsive, data-driven web platforms and concurrent ASGI/Node backend services with scalable database architectures.",
      deliverables: [
        "Crafted modular, accessible user interfaces utilizing modern React, TypeScript, and custom styling systems.",
        "Architected RESTful and WebSocket API endpoints managing real-time data streaming and complex state synchronization.",
        "Optimized MongoDB and PostgreSQL schema designs, indexes, and queries, achieving sub-50ms query turnaround times.",
        "Established CI/CD deployment routines on cloud platforms with comprehensive automated unit and integration tests.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git"],
    },
  ];

  return (
    <section id="experience" className="relative border-b-2 border-[#0A0A0A] bg-[#FAF8F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 02
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              ENGINEERING TIMELINE
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            CHRONOLOGICAL RECORD OF ROLES, SYSTEMS ARCHITECTED &amp; KEY DELIVERABLES.
          </div>
        </div>

        {/* Experience Rows */}
        <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] divide-y-2 divide-[#0A0A0A]">
          {experiences.map((exp) => {
            const isSelected = activeItem === exp.id;
            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveItem(exp.id)}
                className={`transition-colors duration-150 ${
                  isSelected ? "bg-[#FAF8F5]" : "bg-[#FFFFFF] hover:bg-[#FAF8F5]"
                }`}
              >
                <div className="p-6 sm:p-8 md:p-10">
                  
                  {/* Top Metabar for the Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm sm:text-base font-bold bg-[#0A0A0A] text-[#CCFF00] px-2 py-1">
                        EXP // {exp.id}
                      </span>
                      <span className="font-mono text-xs font-semibold bg-[#CCFF00] text-[#0A0A0A] px-2 py-1 border border-[#0A0A0A] uppercase">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-[#555555]">
                      <span className="flex items-center gap-1.5 font-bold text-[#0A0A0A]">
                        <Calendar className="w-3.5 h-3.5 text-[#0038FF]" />
                        {exp.period}
                      </span>
                      <span className="hidden sm:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role & Company Header */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                    <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#0A0A0A]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#777777]" />
                      <span className="font-mono text-sm sm:text-base font-bold text-[#0038FF]">
                        {exp.company}
                      </span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A0A0A] hover:text-[#0038FF] transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6 max-w-4xl">
                    {exp.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-[#E8E3D9] pt-4 mb-6">
                    <div className="font-mono text-xs font-bold text-[#777777] uppercase mb-3">
                      KEY DELIVERABLES &amp; ARCHITECTURAL IMPACT:
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-xs text-[#222222]">
                      {exp.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FAF8F5] p-2 border border-[#E8E3D9]">
                          <CheckCircle2 className="w-4 h-4 text-[#0038FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase text-[#777777] mr-1">
                      TECH DEPLOYED:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs font-semibold px-2.5 py-1 bg-[#FFFFFF] border border-[#0A0A0A] text-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

