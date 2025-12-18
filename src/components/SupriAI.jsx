import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot, ArrowRight, FileCode, Cpu, FileText, Hash, Terminal, BookOpen } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Confetti from 'react-confetti';

const SupriAI = ({ onNavigate, currentPage }) => {
  const [showChatPanel, setShowChatPanel] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hey there! 👋 I'm Supri, Jayanthan's assistant. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedActions, setSuggestedActions] = useState([]);
  const chatMessagesRef = useRef(null);

  // Quick action buttons
  const quickActions = [
    { label: 'View Projects', icon: Cpu, page: 'projects', color: 'gruvbox-orange' },
    { label: 'About Jayanthan', icon: FileCode, page: 'about', color: 'gruvbox-blue' },
    { label: 'Contact Info', icon: Terminal, page: 'contact', color: 'gruvbox-green' },
    { label: 'Experience', icon: FileText, page: 'experience', color: 'gruvbox-aqua' },
  ];

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Confetti on chat panel open
  useEffect(() => {
    if (showChatPanel) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000);
    }
  }, [showChatPanel]);

  // Navigate to page
  const navigateToPage = (pageId, pageName) => {
    if (onNavigate) {
      onNavigate(pageId);
      setChatMessages(prev => [...prev, 
        { role: 'assistant', content: `✅ Navigated to ${pageName}! Let me know if you need anything else.` }
      ]);
      setSuggestedActions([]);
    }
  };

  // SupriAI Enhanced Chat Handler
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsTyping(true);
    setSuggestedActions([]);

    // Simulate AI response with contextual replies
    setTimeout(() => {
      let response = '';
      let actions = [];
      const lowerMsg = userMessage.toLowerCase();
      
      // Get page-specific context
      const getPageContext = () => {
        switch(currentPage) {
          case 'home':
            return {
              name: 'Home',
              context: "You're viewing Jayanthan's home page with his introduction and quick links.",
              suggestions: "You can download his resume, or navigate to other sections."
            };
          case 'about':
            return {
              name: 'About',
              context: "You're viewing Jayanthan's skills, tech stack, and professional background.",
              suggestions: "Ask me about specific technologies or skills!"
            };
          case 'projects':
            return {
              name: 'Projects',
              context: "You're viewing Jayanthan's portfolio of projects and applications.",
              suggestions: "Ask me about specific projects, technologies used, or features!"
            };
          case 'experience':
            return {
              name: 'Experience',
              context: "You're viewing Jayanthan's professional work experience and internships.",
              suggestions: "Ask me about his roles, responsibilities, or achievements!"
            };
          case 'journey':
            return {
              name: 'Journey',
              context: "You're viewing Jayanthan's timeline, achievements, and volunteering experiences.",
              suggestions: "Ask me about his milestones, events, or community contributions!"
            };
          case 'contact':
            return {
              name: 'Contact',
              context: "You're viewing the contact page with ways to reach Jayanthan.",
              suggestions: "You can find his email, LinkedIn, GitHub, and other social links here!"
            };
          default:
            return {
              name: 'Portfolio',
              context: "You're exploring Jayanthan's portfolio.",
              suggestions: "Feel free to navigate to any section!"
            };
        }
      };

      const pageContext = getPageContext();
      
      // Page-specific responses
      if (lowerMsg.includes('where am i') || lowerMsg.includes('current page') || lowerMsg.includes('what page')) {
        response = `You're currently on the **${pageContext.name}** page! ${pageContext.context}\n\n${pageContext.suggestions}`;
        actions = quickActions.filter(a => a.page !== currentPage).slice(0, 2);
      }
      // Context-aware responses based on current page
      else if (currentPage === 'projects' && (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('tell me') || lowerMsg.includes('what'))) {
        response = "Great! You're on the Projects page. Jayanthan has worked on:\n\n🚀 Full-stack web applications with React & Node.js\n🤖 AI-powered solutions and integrations\n💻 Modern, responsive UI/UX designs\n🔧 Real-world problem-solving applications\n\nEach project showcases his skills in different technologies. Want to know about a specific project or technology?";
        actions = [
          { label: 'View Experience', page: 'experience', icon: FileText },
          { label: 'See Skills', page: 'about', icon: FileCode }
        ];
      }
      else if (currentPage === 'about' && (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('know') || lowerMsg.includes('can he') || lowerMsg.includes('tell me'))) {
        response = "Perfect! You're viewing his skills. Jayanthan's tech stack includes:\n\n**Frontend:** React, TypeScript, Tailwind CSS, Framer Motion\n**Backend:** Node.js, Express, Python\n**Database:** MongoDB, PostgreSQL\n**Tools:** Git, Docker, VS Code, Cloudflare\n**Other:** REST APIs, Cloud Deployment, AI Integration\n\nHe's always learning new technologies! Want to see these skills in action?";
        actions = [
          { label: 'View Projects', page: 'projects', icon: Cpu },
          { label: 'See Experience', page: 'experience', icon: FileText }
        ];
      }
      else if (currentPage === 'experience' && (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('job') || lowerMsg.includes('tell me') || lowerMsg.includes('what'))) {
        response = "You're viewing his professional experience! Jayanthan has:\n\n💼 Hands-on internship experience\n🛠️ Built production-ready applications\n👥 Collaborated with development teams\n📈 Delivered projects from concept to deployment\n🎯 Gained expertise in full-stack development\n\nHe's passionate about creating impactful solutions. Want to see what he built?";
        actions = [
          { label: 'View Projects', page: 'projects', icon: Cpu },
          { label: 'View Skills', page: 'about', icon: FileCode }
        ];
      }
      else if (currentPage === 'contact' && (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach') || lowerMsg.includes('how') || lowerMsg.includes('connect'))) {
        response = "Perfect! You're on the contact page. Here's how to reach Jayanthan:\n\n📧 **Email:** hii@itsmejayanthan.me\n💼 **LinkedIn:** Connect for professional networking\n🐙 **GitHub:** Check out his code repositories\n🐦 **Twitter:** Follow for updates\n\nHe's always open to:\n✅ Job opportunities\n✅ Collaboration on projects\n✅ Technical discussions\n✅ Freelance work\n\nFeel free to reach out!";
        actions = [
          { label: 'View Resume', page: 'home', icon: Hash },
          { label: 'View Projects', page: 'projects', icon: Cpu }
        ];
      }
      else if (currentPage === 'journey' && (lowerMsg.includes('journey') || lowerMsg.includes('timeline') || lowerMsg.includes('achievement') || lowerMsg.includes('tell me') || lowerMsg.includes('what'))) {
        response = "You're viewing Jayanthan's journey! 📖 This timeline includes:\n\n🎓 Educational milestones\n🏆 Achievements and certifications\n🤝 Volunteering and community work\n💡 Key learning experiences\n🎯 Personal and professional growth\n\nEach event has shaped his journey as a developer. Anything specific you'd like to know?";
        actions = [
          { label: 'View Experience', page: 'experience', icon: FileText },
          { label: 'See Projects', page: 'projects', icon: Cpu }
        ];
      }
      else if (currentPage === 'home' && (lowerMsg.includes('resume') || lowerMsg.includes('cv') || lowerMsg.includes('download') || lowerMsg.includes('tell me'))) {
        response = "You're on the home page! 🏠 From here you can:\n\n📄 **View & Download Resume** - Click the resume button to preview and download\n🚀 Quick navigation to all sections\n👤 See Jayanthan's introduction\n\nThe resume includes his complete professional profile, skills, experience, and education. Want to explore other sections?";
        actions = [
          { label: 'View Projects', page: 'projects', icon: Cpu },
          { label: 'About Jayanthan', page: 'about', icon: FileCode }
        ];
      }
      // Navigation keywords
      else if (lowerMsg.includes('go to') || lowerMsg.includes('navigate') || lowerMsg.includes('take me') || lowerMsg.includes('show me')) {
        if (lowerMsg.includes('project')) {
          navigateToPage('projects', 'Projects');
          setIsTyping(false);
          return;
        } else if (lowerMsg.includes('about')) {
          navigateToPage('about', 'About');
          setIsTyping(false);
          return;
        } else if (lowerMsg.includes('contact')) {
          navigateToPage('contact', 'Contact');
          setIsTyping(false);
          return;
        } else if (lowerMsg.includes('experience')) {
          navigateToPage('experience', 'Experience');
          setIsTyping(false);
          return;
        } else if (lowerMsg.includes('journey')) {
          navigateToPage('journey', 'Journey');
          setIsTyping(false);
          return;
        } else if (lowerMsg.includes('home')) {
          navigateToPage('home', 'Home');
          setIsTyping(false);
          return;
        }
      }

      // Content-based responses with navigation suggestions
      else if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('portfolio')) {
        response = "Jayanthan has worked on some amazing projects! 🚀 From full-stack web apps to AI-powered solutions. Would you like me to show you his projects?";
        actions = [
          { label: 'View Projects', page: 'projects', icon: Cpu },
          { label: 'See Experience', page: 'experience', icon: FileText }
        ];
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
        response = "You can reach Jayanthan at hii@itsmejayanthan.me 📧 or connect with him on LinkedIn and GitHub. Want to see the full contact page?";
        actions = [
          { label: 'Open Contact Page', page: 'contact', icon: Terminal },
          { label: 'View Resume', page: 'home', icon: Hash }
        ];
      } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack') || lowerMsg.includes('know')) {
        response = "Jayanthan is skilled in React, TypeScript, Node.js, Python, and more! 💻 He's a full-stack developer with expertise in modern web technologies, cloud platforms, and AI integration. Check out his full tech stack!";
        actions = [
          { label: 'View Skills', page: 'about', icon: FileCode },
          { label: 'See Projects', page: 'projects', icon: Cpu }
        ];
      } else if (lowerMsg.includes('experience') || lowerMsg.includes('job') || lowerMsg.includes('intern') || lowerMsg.includes('work history')) {
        response = "Jayanthan has valuable professional experience through internships and projects! 📋 He's worked on real-world applications and gained expertise across the full development lifecycle.";
        actions = [
          { label: 'View Experience', page: 'experience', icon: FileText },
          { label: 'See Projects', page: 'projects', icon: Cpu }
        ];
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        response = "Hello! 👋 Great to meet you! I'm SupriAI, Jayanthan's AI assistant. I can help you explore his portfolio, answer questions about his skills, experience, and projects, or navigate to any section you'd like to see!";
        actions = [
          { label: 'About Jayanthan', page: 'about', icon: FileCode },
          { label: 'View Projects', page: 'projects', icon: Cpu }
        ];
      } else if (lowerMsg.includes('who') || lowerMsg.includes('about jayanthan') || lowerMsg.includes('tell me about')) {
        response = "Jayanthan Senthilkumar is a passionate Full-Stack Developer and Quick Learner who loves building creative solutions! ✨ He's currently focused on web development, cloud technologies, and AI integration. He brings together technical expertise with creative problem-solving.";
        actions = [
          { label: 'Learn More', page: 'about', icon: FileCode },
          { label: 'View Journey', page: 'journey', icon: BookOpen }
        ];
      } else if (lowerMsg.includes('theme') || lowerMsg.includes('color') || lowerMsg.includes('appearance')) {
        response = "Love customization? 🎨 Click the ⚙️ Settings gear at the bottom to switch between 8 beautiful themes including Gruvbox, Dracula, Nord, GitHub Dark, VS Code Light, and GitHub Light!";
        actions = [];
      } else if (lowerMsg.includes('journey') || lowerMsg.includes('timeline') || lowerMsg.includes('story')) {
        response = "Want to see Jayanthan's journey? 📖 Check out the Journey page to explore his timeline, achievements, and volunteering experiences!";
        actions = [
          { label: 'View Journey', page: 'journey', icon: BookOpen },
          { label: 'See Experience', page: 'experience', icon: FileText }
        ];
      } else if (lowerMsg.includes('resume') || lowerMsg.includes('cv')) {
        response = "You can view and download Jayanthan's resume from the home page! 📄 It includes all his skills, experience, and achievements in a professional format.";
        actions = [
          { label: 'Go to Home', page: 'home', icon: Hash }
        ];
      } else if (lowerMsg.includes('help') || lowerMsg.includes('what can you do')) {
        response = "I can help you with:\n\n🔹 Navigate to any section (just say 'go to projects')\n🔹 Answer questions about Jayanthan's skills\n🔹 Show you his work and experience\n🔹 Provide contact information\n🔹 Guide you through the portfolio\n\nJust ask me anything!";
        actions = quickActions.slice(0, 2);
      } else if (lowerMsg.includes('thank')) {
        response = "You're very welcome! 😊 Feel free to ask if you need anything else. I'm here to help you explore Jayanthan's portfolio!";
        actions = [];
      } else {
        response = "That's interesting! I'd be happy to help you explore Jayanthan's portfolio. You can ask me about his projects, skills, experience, or just tell me where you'd like to go! 🌟";
        actions = [
          { label: 'View Projects', page: 'projects', icon: Cpu },
          { label: 'About', page: 'about', icon: FileCode }
        ];
      }
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setSuggestedActions(actions);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleCloseChat = () => {
    setShowChatPanel(false);
    setChatMessages([{ role: 'assistant', content: "Hey there! 👋 I'm Supri, Jayanthan's assistant. How can I help you today?" }]);
    setChatInput('');
    setSuggestedActions([]);
  };

  return (
    <>
      {/* Confetti for AI Opening */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={400}
          gravity={0.3}
          colors={['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b', '#8ec07c']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
        />
      )}

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
                    <div className={`max-w-[85%] px-3 py-2 rounded-lg text-[13px] whitespace-pre-line ${
                      msg.role === 'user' 
                        ? 'bg-gruvbox-blue text-white rounded-br-none' 
                        : 'bg-gruvbox-bgSoft text-gruvbox-fg rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {/* Suggested Action Buttons */}
                {suggestedActions.length > 0 && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {suggestedActions.map((action, idx) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => navigateToPage(action.page, action.label)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gruvbox-blue/20 hover:bg-gruvbox-blue text-gruvbox-blue hover:text-white rounded-full text-[12px] transition-all border border-gruvbox-blue/30 hover:border-gruvbox-blue group"
                        >
                          <Icon size={12} />
                          <span>{action.label}</span>
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      );
                    })}
                  </motion.div>
                )}

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
                {/* Quick Actions */}
                {chatMessages.length === 1 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {quickActions.map((action, idx) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => navigateToPage(action.page, action.label)}
                          className="flex items-center gap-1.5 px-2 py-1 bg-gruvbox-bgSoft hover:bg-gruvbox-bg rounded text-[11px] text-gruvbox-gray hover:text-gruvbox-fg transition-colors border border-gruvbox-bgSoft"
                        >
                          <Icon size={12} />
                          <span>{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything or say 'go to projects'..."
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
                  Powered by Supriya • I can help you navigate & explore! 🚀
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default SupriAI;
