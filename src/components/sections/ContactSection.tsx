import { FC, useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, BookOpen, Send, Globe, Radio } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export const ContactSection: FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const email = "jayanthansenthilkumar18@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Engineering Inquiry from ${formName || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    {
      name: "LINKEDIN",
      handle: "in/jayanthan18",
      url: "https://www.linkedin.com/in/jayanthan18",
      icon: LinkedinIcon,
      tag: "PROFESSIONAL",
    },
    {
      name: "GITHUB",
      handle: "jayanthansenthilkumar",
      url: "https://github.com/jayanthansenthilkumar",
      icon: GithubIcon,
      tag: "CODE REPOSITORIES",
    },
    {
      name: "MEDIUM",
      handle: "@jayanthansenthilkumar",
      url: "https://medium.com/@jayanthansenthilkumar",
      icon: BookOpen,
      tag: "PUBLICATIONS",
    },
    {
      name: "HILO PORTFOLIO",
      handle: "hilo.jayanthan.fyi",
      url: "https://hilo.jayanthan.fyi",
      icon: Globe,
      tag: "EXPERIENCE ENGINE",
    },
  ];

  return (
    <section id="contact" className="relative border-b-2 border-[#0A0A0A] bg-[#FAF8F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#CCFF00] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-3">
              // SECTION 06
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              ESTABLISH CONNECTION
            </h2>
          </div>
          <div className="font-mono text-xs text-[#555555] max-w-xs uppercase">
            COMMUNICATION GATEWAY // RESPONSE LATENCY &lt; 24 HOURS.
          </div>
        </div>

        {/* Closing Headline */}
        <div className="border-2 border-[#0A0A0A] bg-[#CCFF00] p-6 sm:p-10 mb-12 shadow-[6px_6px_0px_#0A0A0A]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-3">
            <Radio className="w-4 h-4 text-[#0A0A0A] animate-pulse" />
            <span>DIRECT INQUIRY CHANNEL</span>
          </div>
          <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#0A0A0A] leading-tight mb-4">
            LET&apos;S ARCHITECT INTELLIGENCE TOGETHER.
          </h3>
          <p className="font-mono text-xs sm:text-sm md:text-base text-[#0A0A0A] max-w-3xl leading-relaxed">
            I am currently open to full-time engineering roles, AI research collaborations, and high-concurrency systems architecture globally across <strong>Australia, the United States, and India</strong>.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (6 cols): Direct Email & Channels */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A0A0A] mb-4">
                <span className="font-mono text-xs font-bold uppercase text-[#777777]">
                  OFFICIAL INBOX ADDRESS
                </span>
                <Mail className="w-4 h-4 text-[#0038FF]" />
              </div>

              <div className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#0A0A0A] break-all bg-[#FAF8F5] p-3 border border-[#0A0A0A] mb-4 select-all">
                {email}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleCopy}
                  variant={copied ? "lime" : "default"}
                  size="default"
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#0A0A0A]" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </Button>

                <a href={`mailto:${email}`}>
                  <Button variant="outline" size="default" className="gap-2">
                    <span>LAUNCH EMAIL CLIENT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Channels Directory Grid */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] divide-y-2 divide-[#0A0A0A]">
              <div className="bg-[#0A0A0A] text-white px-6 py-3 font-mono text-xs uppercase font-bold">
                CONNECTIVITY CHANNELS // DIRECTORY
              </div>
              {channels.map((ch, idx) => {
                const IconComponent = ch.icon;
                return (
                  <a
                    key={idx}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 flex items-center justify-between hover:bg-[#FAF8F5] group transition-colors block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 border border-[#0A0A0A] bg-[#FAF8F5] group-hover:bg-[#CCFF00] flex items-center justify-center transition-colors">
                        <IconComponent className="w-4 h-4 text-[#0A0A0A]" />
                      </div>
                      <div>
                        <div className="font-['Space_Grotesk'] font-bold text-sm text-[#0A0A0A] group-hover:text-[#0038FF] transition-colors">
                          {ch.name}
                        </div>
                        <div className="font-mono text-xs text-[#555555]">
                          {ch.handle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E3D9] text-[#777777] hidden sm:inline">
                        {ch.tag}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column (6 cols): Direct Message Dispatch Form */}
          <div className="lg:col-span-6">
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A0A0A] mb-6">
                <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                  DIRECT DISPATCH PROTOCOL
                </span>
                <span className="font-mono text-[10px] bg-[#0A0A0A] text-[#CCFF00] px-2 py-0.5 font-bold">
                  FAST-PATH
                </span>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block uppercase font-bold text-[#0A0A0A] mb-1.5">
                    01 // SENDER IDENTIFIER (YOUR NAME)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins / Engineering Director"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#FAF8F5] border-2 border-[#0A0A0A] p-3 text-sm font-mono text-[#0A0A0A] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#0038FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#0A0A0A] mb-1.5">
                    02 // RETURN EMAIL (CONTACT POINT)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. s.jenkins@enterprise.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-[#FAF8F5] border-2 border-[#0A0A0A] p-3 text-sm font-mono text-[#0A0A0A] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#0038FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#0A0A0A] mb-1.5">
                    03 // TRANSMISSION PAYLOAD (MESSAGE)
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, engineering role, or architecture inquiry..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-[#FAF8F5] border-2 border-[#0A0A0A] p-3 text-sm font-mono text-[#0A0A0A] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#0038FF] transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="lime"
                  size="lg"
                  className="w-full gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH VIA MAIL</span>
                </Button>
              </form>

              <div className="mt-6 pt-4 border-t border-[#E8E3D9] flex items-center justify-between font-mono text-[10px] text-[#777777]">
                <span>SLA: RESPONSE WITHIN 24 HOURS</span>
                <span>SECURE DIRECT TRANSMISSION</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
