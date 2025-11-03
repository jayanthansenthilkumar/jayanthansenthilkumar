
import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import ChatInput from "./chat/ChatInput";
import MessageBubble from "./chat/MessageBubble";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { getAIResponse } from "@/services/chatbotService";
import { Message, INITIAL_MESSAGES } from "@/types/chat";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const { isSpeaking, speakMessage, stopSpeaking } = useSpeechSynthesis();
  const { isListening, startListening, stopListening } = useSpeechRecognition((transcript) => {
    setInput(transcript);
  });
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userMessage.text),
        isUser: false,
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Focus textarea when chat opens
  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-portfolio-teal text-white p-3 rounded-full shadow-lg hover:bg-portfolio-navy transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      
      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md h-[600px] bg-white/95 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl flex flex-col overflow-hidden glass-card">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-medium text-lg text-portfolio-navy">Portfolio Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isSpeaking={isSpeaking}
                    onSpeak={speakMessage}
                    onStopSpeaking={stopSpeaking}
                  />
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-portfolio-subtle rounded-2xl p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* Input */}
            <ChatInput
              ref={textareaRef}
              input={input}
              isLoading={isLoading}
              isListening={isListening}
              onChange={setInput}
              onSend={handleSendMessage}
              onKeyDown={handleKeyDown}
              onStartListening={startListening}
              onStopListening={stopListening}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
