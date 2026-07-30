
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
  role: "bot" | "user";
  text: string;
}

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm the Austral AI technical assistant. How can I help you architect your intelligence infrastructure today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setMessage("");
    setIsTyping(true);

    // Mock an AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          role: "bot", 
          text: `I've analyzed your request regarding "${userMsg}". As a mock AI assistant for this enterprise platform, I can confirm our infrastructure is designed to handle this at scale.` 
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={cn(
          "mb-4 w-[350px] bg-white border border-gray-200 shadow-xl rounded-sm overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-mono text-gray-700 font-semibold">austral-assistant</span>
          </div>
          <button 
            onClick={handleToggle}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Messages Area */}
        <div className="h-[350px] p-4 overflow-y-auto bg-[#fcfcfc] flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={cn("flex items-start gap-3 max-w-[90%]", msg.role === "user" ? "ml-auto flex-row-reverse" : "")}>
              {msg.role === "bot" ? (
                <div className="w-8 h-8 rounded-sm bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-sm bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-700 font-mono">U</span>
                </div>
              )}
              
              <div className={cn(
                "border p-3 rounded-sm shadow-sm text-sm font-mono leading-relaxed",
                msg.role === "bot" 
                  ? "bg-white border-gray-200 rounded-tl-none text-gray-700" 
                  : "bg-blue-600 border-blue-700 text-white rounded-tr-none"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-sm bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 p-3 rounded-sm rounded-tl-none shadow-sm flex gap-1 items-center h-10">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-200">
          <form 
            className="flex items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Query austral-assistant..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm font-mono focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-sm shrink-0"
              disabled={!message.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "p-4 rounded-sm shadow-sm transition-all duration-300 relative flex items-center justify-center overflow-hidden border group",
          isOpen ? "bg-gray-800 text-white border-gray-800 hover:bg-gray-900" : "bg-white text-blue-600 border-gray-200 hover:border-blue-500"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:0.5rem_0.5rem]" />
        
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
        </div>
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
        )}
      </button>

    </div>
  );
}
