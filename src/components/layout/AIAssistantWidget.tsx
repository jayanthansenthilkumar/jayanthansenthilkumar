import { useState, useRef, useEffect, FC } from "react";
import { Terminal, X, Send, Sparkles, ChevronRight, CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
  role: "bot" | "user";
  text: string;
  timestamp: string;
}

const PRESET_COMMANDS = [
  { label: "/about", query: "Tell me about Jayanthan's engineering background and philosophy." },
  { label: "/projects", query: "What are Jayanthan's featured production projects and initiatives?" },
  { label: "/skills", query: "Which AI, MLOps, and full-stack technologies does Jayanthan specialize in?" },
  { label: "/contact", query: "How can I contact Jayanthan for full-time engineering roles?" },
  { label: "/hilo", query: "What is the Hilo portfolio platform?" },
];

export const AIAssistantWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "SYS_INIT // AUSTRAL-AI CLI ASSISTANT READY.\nI am an interactive technical agent designed to answer inquiries regarding Jayanthan Senthilkumar's AI/ML architecture, projects, and systems engineering experience. Enter a query or select a preset command below.",
      timestamp: "SYSTEM",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const getAssistantResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("about") || q.includes("who is") || q.includes("philosophy") || q.includes("background")) {
      return "Jayanthan Senthilkumar is an AI & ML Engineer specializing in bridging deep neural network research with high-concurrency, resilient production architectures. He graduated in Computer Science from M.Kumarasamy College of Engineering (MKCE), Karur, India, and is actively open to engineering roles across Australia, the USA, and India.";
    }

    if (q.includes("project") || q.includes("initiative") || q.includes("built") || q.includes("work")) {
      return "Featured production platforms:\n• 01. Hilo Portfolio & Telemetry (hilo.jayanthan.fyi) - Interactive flagship portfolio with real-time GitHub velocity analytics.\n• 02. AustralAI Events & Credentialing Suite (events.syraa.app & certify.syraa.app) - End-to-end registration and cryptographic credential verification.\n• 03. Enterprise LLMOps & Agentic RAG - Multi-modal retrieval pipeline with hallucination guardrails.\n• 04. Async ASGI Microservices - Low-latency Python FastAPI model inference endpoints.\n• 05. Hiii AustralAI Admin Engine (hii.syraa.app) - Real-time administrative operations center.";
    }

    if (q.includes("skill") || q.includes("stack") || q.includes("technolog") || q.includes("python") || q.includes("mlops")) {
      return "Technical Specializations:\n• Intelligence & MLOps: Python, PyTorch, TensorFlow, Scikit-Learn, LangChain, LlamaIndex, OpenCV, Hugging Face, LLMOps pipelines.\n• Scalable Frontend: React 19, TypeScript, Next.js, Vite, Tailwind CSS v4, Framer Motion, GSAP.\n• Concurrency & Backend: Python ASGI, FastAPI, Node.js, Express, PostgreSQL, MongoDB, Redis, WebSockets.\n• DevOps & Infrastructure: Docker, AWS, GCP, Linux / Unix CLI, Git CI/CD.";
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("opportunity")) {
      return "Direct Contact Channels:\n• Email: jayanthansenthilkumar18@gmail.com\n• LinkedIn: linkedin.com/in/jayanthan18\n• GitHub: github.com/jayanthansenthilkumar\n• Availability: Open to full-time engineering opportunities globally (Australia, USA, India). Response latency is under 24 hours.";
    }

    if (q.includes("hilo")) {
      return "Hilo (hilo.jayanthan.fyi) is Jayanthan's flagship data-driven digital portfolio experience. It incorporates real-time developer activity telemetry, interactive technical visualizations, and high-performance UI systems.";
    }

    return `Telemetry processed for: "${query}". As an architectural assistant for Jayanthan's platform, I can confirm his technical infrastructure spans production MLOps, ASGI concurrency, and scalable React systems. Feel free to reach out directly at jayanthansenthilkumar18@gmail.com.`;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userText = text.trim();
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText, timestamp: now },
    ]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getAssistantResponse(userText);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: botResponse, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputVal);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* CLI Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[420px] max-w-[440px] bg-[#FFFFFF] border-2 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] text-[#CCFF00] border-b-2 border-[#0A0A0A] select-none">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#CCFF00]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                SYS.CLI // AUSTRAL-AI
              </span>
            </div>
            <button
              onClick={handleToggle}
              className="text-[#888888] hover:text-[#CCFF00] transition-colors p-1"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[340px] sm:h-[380px] p-4 overflow-y-auto bg-[#FAF8F5] flex flex-col gap-3 font-mono text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "p-3 border-2 border-[#0A0A0A] max-w-[95%] leading-relaxed whitespace-pre-line",
                  msg.role === "bot"
                    ? "bg-[#FFFFFF] text-[#0A0A0A] shadow-[3px_3px_0px_#0A0A0A] self-start"
                    : "bg-[#0A0A0A] text-[#CCFF00] shadow-[3px_3px_0px_#CCFF00] self-end"
                )}
              >
                <div className="text-[10px] font-bold opacity-60 mb-1 uppercase flex items-center justify-between gap-4">
                  <span>{msg.role === "bot" ? "AGENT // AUSTRAL" : "YOU // USER"}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <div>{msg.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="p-3 bg-[#FFFFFF] border-2 border-[#0A0A0A] shadow-[3px_3px_0px_#0A0A0A] self-start font-mono text-xs flex items-center gap-2 text-[#0038FF]">
                <span className="w-2 h-2 bg-[#0038FF] animate-pulse"></span>
                <span>PROCESSING COMPUTATIONAL RESPONSE...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Command Buttons */}
          <div className="p-2.5 bg-[#FFFFFF] border-t-2 border-[#0A0A0A] flex flex-wrap gap-1.5">
            {PRESET_COMMANDS.map((cmd) => (
              <button
                key={cmd.label}
                onClick={() => handleSend(cmd.query)}
                className="font-mono text-[10px] font-bold uppercase px-2 py-1 bg-[#FAF8F5] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#CCFF00] transition-colors"
              >
                {cmd.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="p-3 bg-[#FFFFFF] border-t-2 border-[#0A0A0A]">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#0A0A0A] select-none pl-1">
                &gt;
              </span>
              <input
                type="text"
                placeholder="Query AI assistant or type /..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-[#FAF8F5] border-2 border-[#0A0A0A] px-3 py-2 text-xs font-mono text-[#0A0A0A] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#0038FF] transition-colors"
              />
              <Button
                type="submit"
                variant="lime"
                size="sm"
                className="h-9 px-3 shrink-0"
                disabled={!inputVal.trim() || isTyping}
              >
                <CornerDownLeft className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={handleToggle}
        className={cn(
          "p-3.5 border-2 border-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all select-none cursor-pointer",
          isOpen
            ? "bg-[#0A0A0A] text-white shadow-[4px_4px_0px_#0A0A0A]"
            : "bg-[#CCFF00] text-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]"
        )}
        aria-label="Open AI Terminal Assistant"
      >
        <Terminal className="w-4 h-4" />
        <span className="hidden sm:inline">
          {isOpen ? "CLOSE CLI" : "SYS.CLI ASSISTANT"}
        </span>
        {!isOpen && (
          <span className="w-2 h-2 bg-[#0038FF] inline-block animate-ping"></span>
        )}
      </button>

    </div>
  );
};
