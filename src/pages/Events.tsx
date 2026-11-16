import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Award, MessageSquare, ShieldCheck, Terminal, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const eventLinks = [
    {
      id: "01",
      title: "AUSTRALAI EVENTS HUB",
      category: "CONFERENCE & COMMUNITY",
      description: "Discover, register, and participate in our latest tech meetups, hackathons, and developer conferences hosted by AustralAI.",
      capabilities: [
        "Interactive event schedules & speaker dossiers",
        "High-throughput registration queues with instant ticket dispatch",
        "Community Q&A and technical session live streaming",
      ],
      url: "https://events.syraa.app",
      icon: Calendar,
      badge: "LIVE OPERATIONS",
    },
    {
      id: "02",
      title: "AUSTRALAI CERTIFICATIONS",
      category: "CREDENTIAL VALIDATION",
      description: "Cryptographically verify technical credentials, view completed engineering milestones, and download certified blockchain-backed digital badges.",
      capabilities: [
        "Instant tamper-proof cryptographic verification",
        "Publicly shareable verified credential certificates",
        "Comprehensive skill assessment audit trails",
      ],
      url: "https://certify.syraa.app",
      icon: Award,
      badge: "VERIFIED CREDENTIALS",
    },
    {
      id: "03",
      title: "HIII AUSTRALAI ADMIN",
      category: "OPERATIONS & TELEMETRY",
      description: "Access the administrative nerve center, manage community inquiries, oversee event registrations, and monitor infrastructure telemetry.",
      capabilities: [
        "Real-time bidirectional WebSocket administrative communication",
        "Multi-tenant attendee governance and credential approvals",
        "Automated system health telemetry and server audit logs",
      ],
      url: "https://hii.syraa.app",
      icon: MessageSquare,
      badge: "RESTRICTED ACCESS",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F4F0EA] min-h-screen">
      <Helmet>
        <title>AustralAI Ecosystem &amp; Hubs // Jayanthan Senthilkumar</title>
        <meta
          name="description"
          content="Access AustralAI Events, AustralAI Certifications, and Hiii AustralAI Admin from Jayanthan Senthilkumar's engineering portal."
        />
      </Helmet>

      <section className="relative pt-6 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b-2 border-[#0A0A0A]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#0A0A0A] bg-[#FFFFFF] px-3 py-1.5 border-2 border-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#CCFF00] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO MAIN PORTAL</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#555555]">
              <Radio className="w-3.5 h-3.5 text-[#0038FF] animate-pulse" />
              <span>AUSTRALAI NETWORK: ACTIVE</span>
            </div>
          </div>

          {/* Editorial Page Header */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              ECOSYSTEM GATEWAY // SYRAA APPS
            </span>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#0A0A0A] mb-4">
              AUSTRALAI PORTAL &amp; HUBS
            </h1>
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#444444] max-w-3xl leading-relaxed">
              Direct access point for AustralAI digital platforms — including high-scale event management, verifiable credential issuance, and administrative communication infrastructure.
            </p>
          </div>

          {/* 3-Column Asymmetric Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {eventLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <div
                  key={link.id}
                  className="border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] flex flex-col justify-between group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#0A0A0A] transition-all duration-150"
                >
                  <div>
                    {/* Card Top Metabar */}
                    <div className="bg-[#FAF8F5] border-b-2 border-[#0A0A0A] px-6 py-3 flex items-center justify-between font-mono text-xs">
                      <span className="font-bold bg-[#0A0A0A] text-[#CCFF00] px-1.5 py-0.5">
                        HUB // {link.id}
                      </span>
                      <span className="font-bold text-[#0A0A0A] bg-[#CCFF00] px-1.5 py-0.5 border border-[#0A0A0A] text-[10px]">
                        {link.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="w-12 h-12 bg-[#FAF8F5] border-2 border-[#0A0A0A] flex items-center justify-center mb-6 group-hover:bg-[#CCFF00] transition-colors">
                        <IconComponent className="w-6 h-6 text-[#0A0A0A]" />
                      </div>

                      <div className="font-mono text-[10px] font-bold text-[#777777] uppercase tracking-wider mb-1">
                        {link.category}
                      </div>

                      <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#0A0A0A] mb-3">
                        {link.title}
                      </h3>

                      <p className="font-mono text-xs text-[#444444] leading-relaxed mb-6">
                        {link.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="space-y-1.5 pt-4 border-t border-[#E8E3D9]">
                        <div className="font-mono text-[10px] font-bold text-[#777777] uppercase mb-1">
                          SYSTEM CAPABILITIES:
                        </div>
                        {link.capabilities.map((cap, cidx) => (
                          <div key={cidx} className="flex items-start gap-2 font-mono text-[11px] text-[#222222]">
                            <span className="text-[#0038FF] font-bold">&gt;</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 sm:p-8 pt-0">
                    <div className="border-t-2 border-[#0A0A0A] pt-4 flex flex-col gap-3">
                      <div className="font-mono text-[11px] text-[#777777] break-all">
                        {link.url}
                      </div>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="lime" size="default" className="w-full gap-2 justify-center">
                          <span>LAUNCH APPLICATION</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Infrastructure Specs Panel */}
          <div className="border-2 border-[#0A0A0A] bg-[#FAF8F5] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#0A0A0A] mb-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                <Terminal className="w-4 h-4 text-[#0038FF]" />
                <span>ECOSYSTEM INFRASTRUCTURE TELEMETRY</span>
              </div>
              <span className="font-mono text-xs font-bold text-[#0038FF]">
                ALL SERVICES OPERATIONAL
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              <div className="bg-[#FFFFFF] p-4 border border-[#0A0A0A]">
                <div className="text-[#777777] mb-1">AUTHENTICATION</div>
                <div className="font-bold text-[#0A0A0A]">Multi-Tenant RBAC</div>
              </div>
              <div className="bg-[#FFFFFF] p-4 border border-[#0A0A0A]">
                <div className="text-[#777777] mb-1">TASK RUNTIME</div>
                <div className="font-bold text-[#0A0A0A]">FastAPI ASGI / Async Workers</div>
              </div>
              <div className="bg-[#FFFFFF] p-4 border border-[#0A0A0A]">
                <div className="text-[#777777] mb-1">PERSISTENCE</div>
                <div className="font-bold text-[#0A0A0A]">PostgreSQL &amp; Redis Cache</div>
              </div>
              <div className="bg-[#FFFFFF] p-4 border border-[#0A0A0A]">
                <div className="text-[#777777] mb-1">CONTAINERIZATION</div>
                <div className="font-bold text-[#0A0A0A]">Docker / Linux Microservices</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
