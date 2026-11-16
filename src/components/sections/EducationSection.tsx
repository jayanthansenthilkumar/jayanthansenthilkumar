import { FC } from "react";
import { GraduationCap, Award, ExternalLink, CheckCircle } from "lucide-react";

export const EducationSection: FC = () => {
  const credentials = [
    {
      title: "AustralAI Verified Engineering Credentials",
      issuer: "AustralAI Certification Hub",
      year: "2026",
      status: "CRYPTOGRAPHICALLY VERIFIED",
      url: "https://certify.syraa.app",
      description: "Validated competencies in high-concurrency ASGI microservices, LLM orchestration, and distributed systems architecture.",
    },
    {
      title: "Deep Learning & Neural Networks Specialization",
      issuer: "AI / Deep Learning Research Institutes",
      year: "2024",
      status: "CERTIFIED",
      description: "Advanced training in backpropagation dynamics, convolutional & transformer neural architectures, and computer vision pipelines.",
    },
    {
      title: "Production MLOps & Continuous Inference Deployment",
      issuer: "Cloud & AI Engineering Systems",
      year: "2024",
      status: "CERTIFIED",
      description: "Specialized in Dockerized ML model serving, low-latency API wrappers, automated metric tracking, and model registry management.",
    },
  ];

  return (
    <section id="education" className="relative border-b-2 border-[#0A0A0A] bg-[#FFFFFF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 05
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              ACADEMIC &amp; CREDENTIALS
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            FORMAL EDUCATION, ACCREDITATIONS &amp; VERIFIED CERTIFICATES.
          </div>
        </div>

        {/* Editorial Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Formal Degree */}
          <div className="lg:col-span-5">
            <div className="border-2 border-[#0A0A0A] bg-[#FAF8F5] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#0A0A0A] mb-6">
                <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#0038FF]" />
                  ACADEMIC FOUNDATION
                </span>
                <span className="bg-[#CCFF00] font-mono text-[10px] font-bold px-2 py-0.5 border border-[#0A0A0A]">
                  GRADUATED
                </span>
              </div>

              <div className="mb-6">
                <div className="font-mono text-xs text-[#0038FF] font-bold uppercase mb-1">
                  BACHELOR OF ENGINEERING (B.E.)
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#0A0A0A] uppercase leading-tight mb-2">
                  M.Kumarasamy College of Engineering (MKCE)
                </h3>
                <div className="font-mono text-xs text-[#555555]">
                  Karur, Tamil Nadu, India
                </div>
              </div>

              <p className="font-mono text-xs text-[#444444] leading-relaxed mb-6">
                Core coursework focused on Computer Science, Algorithmic Complexity, Machine Learning Foundations, Operating Systems, Database Management, and Concurrent Software Architecture.
              </p>

              <div className="bg-[#FFFFFF] p-4 border border-[#0A0A0A] space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#0A0A0A]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0038FF]" />
                  <span>AI &amp; Distributed Systems Emphasis</span>
                </div>
                <div className="flex items-center gap-2 text-[#0A0A0A]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0038FF]" />
                  <span>Capstone: High-Concurrency Neural Inference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Certifications & Verifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="border-b-2 border-[#0A0A0A] pb-3 mb-6 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0A0A0A]" />
                VERIFIED PROFESSIONAL CERTIFICATIONS
              </span>
              <span className="font-mono text-xs text-[#777777]">
                TOTAL: 03 RECORDS
              </span>
            </div>

            <div className="space-y-4">
              {credentials.map((c, idx) => (
                <div
                  key={idx}
                  className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#FAF8F5] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="font-mono text-[10px] text-[#777777] uppercase block mb-1">
                        CERT // 0{idx + 1} &bull; {c.issuer}
                      </span>
                      <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#0A0A0A]">
                        {c.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#CCFF00] border border-[#0A0A0A] text-[#0A0A0A]">
                        {c.status}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#0A0A0A]">
                        {c.year}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-xs text-[#555555] leading-relaxed mb-4">
                    {c.description}
                  </p>

                  {c.url && (
                    <div className="pt-3 border-t border-[#E8E3D9] flex items-center justify-between">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold text-[#0038FF] hover:underline flex items-center gap-1.5"
                      >
                        <span>OPEN VERIFICATION PORTAL</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <span className="font-mono text-[10px] text-[#777777]">
                        {c.url.replace("https://", "")}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

