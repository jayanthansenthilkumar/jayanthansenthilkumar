import { FC } from "react";
import { ArrowUpRight, ExternalLink, Code2, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectsSection: FC = () => {
  const projects: Project[] = [
    {
      id: "01",
      title: "HILO PORTFOLIO & TELEMETRY ENGINE",
      category: "FLAGSHIP WEB ARCHITECTURE",
      tagline: "Interactive digital engineering portfolio with live telemetry & analytics.",
      description: "An advanced data-driven personal engineering experience designed to showcase complex computational projects, live GitHub telemetry, and multi-disciplinary systems with precision performance.",
      features: [
        "Real-time commit telemetry & dynamic GitHub velocity analytics",
        "Fluid motion choreography & zero-layout-shift responsive scaling",
        "Deeply integrated with production ASGI endpoints and developer APIs",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GraphQL"],
      liveUrl: "https://hilo.jayanthan.fyi",
      githubUrl: "https://github.com/jayanthansenthilkumar",
      featured: true,
    },
    {
      id: "02",
      title: "AUSTRALAI EVENTS & CREDENTIALING SUITE",
      category: "ENTERPRISE PLATFORM",
      tagline: "High-throughput event coordination and verifiable digital credentials.",
      description: "A production suite engineered for AustralAI handling real-time participant registrations, administrative scheduling, and automated tamper-proof verification of technical achievements.",
      features: [
        "Instant cryptographic credential verification and digital badge generation",
        "Asynchronous task queues handling concurrent peak registration spikes",
        "Multi-role permissions for participants, organizers, and verification admins",
      ],
      technologies: ["Python FastAPI", "React", "PostgreSQL", "Docker", "Redis", "TypeScript"],
      liveUrl: "https://events.syraa.app",
      githubUrl: "https://github.com/jayanthansenthilkumar",
      featured: true,
    },
    {
      id: "03",
      title: "ENTERPRISE LLMOPS & AGENTIC RAG PIPELINE",
      category: "INTELLIGENCE & MLOPS",
      tagline: "Context-aware retrieval-augmented generation with hallucination guardrails.",
      description: "A multi-modal RAG architecture designed to process enterprise knowledge repositories. Employs hybrid sparse-dense vector retrieval, re-ranking filters, and continuous evaluation harnesses.",
      features: [
        "Sub-100ms vector index querying across dense multi-modal embedding spaces",
        "Automated continuous evaluation benchmarking hallucination and factual recall",
        "Containerized deployment for seamless microservice orchestration",
      ],
      technologies: ["LangChain", "LlamaIndex", "PyTorch", "Hugging Face", "Docker", "FastAPI"],
      liveUrl: "https://hilo.jayanthan.fyi",
      githubUrl: "https://github.com/jayanthansenthilkumar",
    },
    {
      id: "04",
      title: "ASYNC ASGI HIGH-PERFORMANCE MICROSERVICES",
      category: "SYSTEMS & BACKEND",
      tagline: "High-concurrency Python ASGI endpoints for low-latency ML inference.",
      description: "Ultra-fast asynchronous microservices designed specifically for real-time model scoring and streaming responses, removing the throughput bottlenecks of traditional WSGI setups.",
      features: [
        "Concurrent request streaming with non-blocking I/O workers",
        "In-memory Redis caching reducing redundant tensor calculations",
        "Comprehensive health probes and Prometheus telemetry instrumentation",
      ],
      technologies: ["FastAPI", "Python", "Uvicorn ASGI", "Redis", "Docker", "Linux"],
      githubUrl: "https://github.com/jayanthansenthilkumar",
    },
    {
      id: "05",
      title: "HIII AUSTRALAI ADMIN & COMMUNITY ENGINE",
      category: "COLLABORATION ENGINE",
      tagline: "Real-time administrative interface & team communication portal.",
      description: "Administrative nerve center powering AustralAI operations, managing user tickets, live announcements, and internal telemetry with instant WebSocket communication.",
      features: [
        "Bidirectional WebSocket transport for zero-latency administrative alerts",
        "Structured audit logging of administrative changes and credential reviews",
        "Adaptive brutalist UI customized for rapid keyboard navigation",
      ],
      technologies: ["React", "TypeScript", "WebSocket", "Node.js", "PostgreSQL"],
      liveUrl: "https://hii.syraa.app",
      githubUrl: "https://github.com/jayanthansenthilkumar",
    },
    {
      id: "06",
      title: "ISOMORPHIC ANALYTICS & VELOCITY TRACKER",
      category: "DATA SYSTEMS",
      tagline: "Telemetry pipeline parsing engineering cadence across distributed repositories.",
      description: "Analytical tooling that connects to GitHub APIs to ingest commit trees, code churn, and deployment timestamps, generating visual developer velocity reports.",
      features: [
        "Automated cron jobs parsing developer commit frequency and language distribution",
        "Visual analytics rendering clean SVG charts without heavy external client libraries",
        "Exports structured metrics for team retrospectives and CI audits",
      ],
      technologies: ["Python", "Pandas", "GitHub API", "Data Analytics", "TypeScript"],
      liveUrl: "https://hilo.jayanthan.fyi",
      githubUrl: "https://github.com/jayanthansenthilkumar",
    },
  ];

  return (
    <section id="projects" className="relative border-b-2 border-[#0A0A0A] bg-[#FFFFFF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 03
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              FEATURED INITIATIVES
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            A CURATED SELECTION OF PRODUCTION PLATFORMS, MLOPS PIPELINES &amp; HIGH-SCALE SYSTEMS.
          </div>
        </div>

        {/* Asymmetrical Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((proj) => {
            const isFeatured = proj.featured;
            return (
              <div
                key={proj.id}
                className={`border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] flex flex-col justify-between group transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#0A0A0A] ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Top Metabar */}
                  <div className="bg-[#FAF8F5] border-b-2 border-[#0A0A0A] px-6 py-3 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold bg-[#0A0A0A] text-[#CCFF00] px-1.5 py-0.5">
                        PRJ // {proj.id}
                      </span>
                      <span className="font-semibold text-[#0A0A0A] uppercase tracking-wider hidden sm:inline">
                        {proj.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0038FF] transition-colors"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0038FF] transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#0A0A0A] mb-2 group-hover:text-[#0038FF] transition-colors">
                      {proj.title}
                    </h3>
                    
                    <p className="font-mono text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-[#FAF8F5] p-2.5 border border-[#E8E3D9] mb-4">
                      {proj.tagline}
                    </p>

                    <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-1.5 mb-6">
                      <div className="font-mono text-[11px] font-bold text-[#777777] uppercase mb-1">
                        SYSTEM HIGHLIGHTS:
                      </div>
                      {proj.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 font-mono text-xs text-[#222222]">
                          <span className="text-[#CCFF00] bg-[#0A0A0A] px-1 font-bold text-[10px]">
                            &gt;
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Tags and CTAs */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="border-t border-[#E8E3D9] pt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] font-semibold px-2 py-0.5 bg-[#FAF8F5] border border-[#0A0A0A] text-[#0A0A0A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="lime" size="sm" className="gap-1.5">
                            <span>LAUNCH</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Button>
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="gap-1.5">
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>CODE</span>
                          </Button>
                        </a>
                      )}
                    </div>
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
