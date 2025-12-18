import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const SupriAI = () => {
  const [showChatPanel, setShowChatPanel] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hey there! 👋 I'm Supri, Jayanthan's assistant. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef(null);

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // SupriAI Chat Handler
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI response with contextual replies
    setTimeout(() => {
      let response = '';
      const lowerMsg = userMessage.toLowerCase();
      
      if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
        response = "Jayanthan has worked on some amazing projects! Check out the projects.rs file to see his portfolio including web apps, AI projects, and more. Would you like me to navigate you there? 🚀";
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email')) {
        response = "You can reach Jayanthan at hii@itsmejayanthan.me or check out the contact.sh page for more ways to connect! He's always open to exciting opportunities. 📧";
      } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
        response = "Jayanthan is skilled in React, TypeScript, Node.js, Python, and more! He's a full-stack developer with a passion for clean code and great UX. Check the about.lua file for the full tech stack! 💻";
      } else if (lowerMsg.includes('experience') || lowerMsg.includes('job') || lowerMsg.includes('intern')) {
        response = "Check out experience.log to see Jayanthan's professional journey! He's gained valuable experience through internships and projects. 📋";
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        response = "Hello! 👋 Great to meet you! I'm SupriAI, here to help you explore Jayanthan's portfolio. Ask me about his projects, skills, or experience!";
      } else if (lowerMsg.includes('who') || lowerMsg.includes('about') || lowerMsg.includes('jayanthan')) {
        response = "Jayanthan is a passionate Full-Stack Developer who loves building creative solutions. He's currently focused on web development and AI. Check out about.lua for more! ✨";
      } else if (lowerMsg.includes('theme') || lowerMsg.includes('color')) {
        response = "Love customization? Click the ⚙️ Settings gear at the bottom to switch between 8 beautiful themes including Gruvbox, Dracula, Nord, and GitHub Dark! 🎨";
      } else if (lowerMsg.includes('thank')) {
        response = "You're welcome! 😊 Feel free to ask if you need anything else. Happy exploring!";
      } else {
        response = "That's interesting! Feel free to explore the portfolio using the sidebar, or ask me about Jayanthan's projects, skills, experience, or how to contact him! 🌟";
      }
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleCloseChat = () => {
    setShowChatPanel(false);
    setChatMessages([{ role: 'assistant', content: "Hey there! 👋 I'm Supri, Jayanthan's assistant. How can I help you today?" }]);
    setChatInput('');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowChatPanel(!showChatPanel)}
        className={`w-12 h-12 flex items-center justify-center cursor-pointer transition-colors relative group ${showChatPanel ? 'text-gruvbox-fg' : 'text-gruvbox-gray hover:text-gruvbox-fg'}`}
        title="SupriAI Chat"
      >
        <MessageCircle size={24} />
        {/* Notification dot */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gruvbox-green rounded-full animate-pulse" />
        {/* Tooltip */}
        <div className="absolute left-14 bg-gruvbox-bgHard text-gruvbox-fg px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-gruvbox-bgSoft z-50">
          SupriAI Chat
        </div>
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {showChatPanel && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={handleCloseChat}
            />
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-14 w-80 h-[450px] bg-gruvbox-bgHard border border-gruvbox-bgSoft rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-3 border-b border-gruvbox-bgSoft bg-gradient-to-r from-gruvbox-purple/20 to-gruvbox-blue/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gruvbox-purple to-gruvbox-blue flex items-center justify-center">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-gruvbox-fg flex items-center gap-1">
                        SupriAI
                        <Bot size={12} className="text-gruvbox-purple" />
                      </div>
                      <div className="text-[10px] text-gruvbox-green flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gruvbox-green rounded-full animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={handleCloseChat}
                    className="text-gruvbox-gray hover:text-gruvbox-fg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div ref={chatMessagesRef} className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-3 py-2 rounded-lg text-[13px] ${
                      msg.role === 'user' 
                        ? 'bg-gruvbox-blue text-white rounded-br-none' 
                        : 'bg-gruvbox-bgSoft text-gruvbox-fg rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gruvbox-bgSoft px-3 py-2 rounded-lg rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gruvbox-gray rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gruvbox-gray rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gruvbox-gray rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-gruvbox-bgSoft">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask SupriAI anything..."
                    className="flex-1 bg-gruvbox-bg border border-gruvbox-bgSoft rounded-lg px-3 py-2 text-[13px] text-gruvbox-fg placeholder:text-gruvbox-gray focus:outline-none focus:border-gruvbox-blue"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim()}
                    className="p-2 bg-gruvbox-blue text-white rounded-lg hover:bg-gruvbox-blue/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <div className="mt-2 text-[10px] text-gruvbox-gray text-center">
                  Powered by Supriya • Ask about projects, skills & more
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupriAI;
