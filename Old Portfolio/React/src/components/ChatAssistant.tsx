import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  navigationOptions?: NavigationOption[];
}

interface NavigationOption {
  label: string;
  path: string;
  description?: string;
}

interface ChatAssistantProps {
  className?: string;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Jayani, Jayanthan's AI assistant. I can help you learn about his skills, projects, experience, and navigate around the website. What would you like to know?",
      timestamp: new Date(),
      navigationOptions: [
        { label: "Featured Projects", path: "/", description: "View main projects" },
        { label: "About Jayanthan", path: "/about", description: "Personal story" },
        { label: "Professional Resume", path: "/resume", description: "Experience & skills" },
        { label: "Contact Info", path: "/contact", description: "Get in touch" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);  // Knowledge base about Jayanthan's portfolio with navigation
  const getResponse = (userMessage: string): { content: string; navigationOptions?: NavigationOption[] } => {
    const message = userMessage.toLowerCase();

    // Current page context with more details
    const getCurrentPageInfo = () => {
      switch (location.pathname) {
        case '/':
          return {
            message: "You're currently viewing the Home page featuring Jayanthan's main projects and skills. ",
            currentPageOptions: [
              { label: "About Jayanthan", path: "/about", description: "Learn his personal story" },
              { label: "View Resume", path: "/resume", description: "Professional experience" },
              { label: "Read Blog", path: "/blog", description: "Technical articles" }
            ]
          };
        case '/about':
          return {
            message: "You're on the About page learning about Jayanthan's personal journey. ",
            currentPageOptions: [
              { label: "View Projects", path: "/", description: "See his work" },
              { label: "Professional Resume", path: "/resume", description: "Career details" },
              { label: "Contact Him", path: "/contact", description: "Get in touch" }
            ]
          };
        case '/resume':
          return {
            message: "You're browsing the Resume (Journey Book) with professional details. ",
            currentPageOptions: [
              { label: "See Projects", path: "/", description: "Featured work" },
              { label: "Personal Story", path: "/about", description: "About Jayanthan" },
              { label: "Contact", path: "/contact", description: "Reach out" }
            ]
          };
        case '/blog':
          return {
            message: "You're reading the Blog with Jayanthan's articles and insights. ",
            currentPageOptions: [
              { label: "View Projects", path: "/", description: "Featured work" },
              { label: "About Page", path: "/about", description: "Personal background" },
              { label: "Resume", path: "/resume", description: "Professional profile" }
            ]
          };
        case '/contact':
          return {
            message: "You're on the Contact page to reach out to Jayanthan. ",
            currentPageOptions: [
              { label: "View Projects", path: "/", description: "See his work" },
              { label: "About Jayanthan", path: "/about", description: "Personal story" },
              { label: "Read Resume", path: "/resume", description: "Professional background" }
            ]
          };
        default:
          return {
            message: "",
            currentPageOptions: [
              { label: "Home", path: "/", description: "Featured projects" },
              { label: "About", path: "/about", description: "Personal story" },
              { label: "Resume", path: "/resume", description: "Professional profile" }
            ]
          };
      }
    };

    // Current page context
    const currentPageInfo = () => {
      switch (location.pathname) {
        case '/':
          return "You're currently on the Home page. ";
        case '/about':
          return "You're currently on the About page. ";
        case '/resume':
          return "You're currently on the Resume page. ";
        case '/blog':
          return "You're currently on the Blog page. ";
        case '/contact':
          return "You're currently on the Contact page. ";
        default:
          return "";
      }
    };

    // Quick navigation shortcuts
    if (message === 'home' || message === 'projects' || message === '/') {
      setTimeout(() => navigate('/'), 1500);
      return { content: "Taking you to the Home page! 🏠" };
    }
    if (message === 'about' || message === '/about') {
      setTimeout(() => navigate('/about'), 1500);
      return { content: "Opening the About page! 👨‍💻" };
    }
    if (message === 'resume' || message === '/resume' || message === 'cv') {
      setTimeout(() => navigate('/resume'), 1500);
      return { content: "Loading the Resume page! 📄" };
    }
    if (message === 'blog' || message === '/blog' || message === 'articles') {
      setTimeout(() => navigate('/blog'), 1500);
      return { content: "Heading to the Blog! 📝" };
    }
    if (message === 'contact' || message === '/contact') {
      setTimeout(() => navigate('/contact'), 1500);
      return { content: "Opening the Contact page! 📧" };
    }

    // Handle navigation commands directly
    if (message.includes('go to') || message.includes('navigate to') || message.includes('open') || message.includes('show me') || message.includes('take me to')) {
      if (message.includes('home') || message.includes('main page') || message.includes('homepage')) {
        setTimeout(() => navigate('/'), 1500);
        return { content: "Taking you to the Home page where you can see featured projects, skills overview, and the interactive code editor! 🏠" };
      }
      if (message.includes('about') && !message.includes('about page')) {
        setTimeout(() => navigate('/about'), 1500);
        return { content: "Navigating to the About page where you'll find Jayanthan's personal story, interests, and background! 👨‍💻" };
      }
      if (message.includes('resume') || message.includes('journey book') || message.includes('experience')) {
        setTimeout(() => navigate('/resume'), 1500);
        return { content: "Opening the Resume (Journey Book) page with education, achievements, projects, and professional experience! 📄" };
      }
      if (message.includes('blog') || message.includes('articles') || message.includes('writings')) {
        setTimeout(() => navigate('/blog'), 1500);
        return { content: "Heading to the Blog page where you can read Jayanthan's insights on AI/ML, tech trends, and personal growth! 📝" };
      }
      if (message.includes('contact') || message.includes('get in touch') || message.includes('message')) {
        setTimeout(() => navigate('/contact'), 1500);
        return { content: "Taking you to the Contact page where you can send a message or find connection details! 📧" };
      }
    }

    // Current page inquiry
    if (message.includes('where am i') || message.includes('current page') || message.includes('what page') || message.includes('which page')) {
      const pageInfo = getCurrentPageInfo();
      return {
        content: pageInfo.message + "Would you like to explore other sections?",
        navigationOptions: pageInfo.currentPageOptions
      };
    }

    // Navigation menu command
    if (message === 'menu' || message === 'nav' || message === 'navigation' || message === 'pages' || message === 'sitemap') {
      return {
        content: "Here are all the pages you can visit on Jayanthan's website:",
        navigationOptions: [
          { label: "🏠 Home", path: "/", description: "Featured projects & skills overview" },
          { label: "👨‍💻 About", path: "/about", description: "Personal story & background" },
          { label: "📄 Resume", path: "/resume", description: "Professional experience & achievements" },
          { label: "📝 Blog", path: "/blog", description: "Articles & technical insights" },
          { label: "📧 Contact", path: "/contact", description: "Get in touch & contact form" }
        ]
      };
    }

    // Quick one-line responses
    if (message.includes('thanks') || message.includes('thank you') || message.includes('appreciate')) {
      return { content: "You're welcome! Happy to help you learn more about Jayanthan's journey and expertise!" };
    }

    // Greetings with navigation options
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return {
        content: `Hello! ${currentPageInfo()}I'm here to help you learn about Jayanthan Senthilkumar - a final year B.Tech AI/ML student passionate about building intelligent solutions. I can also help you navigate around the website!`,
        navigationOptions: [
          { label: "About Jayanthan", path: "/about", description: "Personal story & background" },
          { label: "View Projects", path: "/resume", description: "Featured projects & skills" },
          { label: "Read Resume", path: "/resume", description: "Experience & achievements" },
          { label: "Contact Info", path: "/contact", description: "Get in touch" }
        ]
      };
    }

    // About Jayanthan
    if (message.includes('about') || message.includes('who is') || message.includes('story') || message.includes('background') || message.includes('introduce')) {
      return {
        content: "Jayanthan is a final year B.Tech AI/ML student from M. Kumarasamy College, founder of PrisolTech, combining AI/ML with full-stack development.",
        navigationOptions: [
          { label: "Learn More", path: "/about", description: "Detailed personal story" },
          { label: "View Resume", path: "/resume", description: "Professional background" }
        ]
      };
    }

    // Skills and Technologies
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('programming') || message.includes('languages') || message.includes('framework')) {
      return {
        content: "AI/ML: Python, TensorFlow, PyTorch, OpenCV | Full-Stack: React, TypeScript, Node.js, FastAPI | DevOps: AWS, Docker, Git.",
        navigationOptions: [
          { label: "See Projects", path: "/", description: "Skills in action" },
          { label: "Full Resume", path: "/resume", description: "Complete skill breakdown" }
        ]
      };
    }

    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('development') || message.includes('application')) {
      return {
        content: "Key projects: Orlia'25 (React/Node.js), Sowberry (React/FastAPI), Virtual Mouse (AI/OpenCV), PrisolTech Platform.",
        navigationOptions: [
          { label: "View Projects", path: "/", description: "Featured project details" },
          { label: "Full Portfolio", path: "/resume", description: "Complete project list" }
        ]
      };
    }

    // Education & Academic Background
    if (message.includes('education') || message.includes('college') || message.includes('university') || message.includes('degree') || message.includes('academic') || message.includes('study') || message.includes('learning')) {
      return {
        content: "Final year B.Tech AI/ML from M. Kumarasamy College of Engineering, Karur with strong performance in hackathons and technical events.",
        navigationOptions: [{ label: "Full Academic Details", path: "/resume", description: "Education & achievements" }]
      };
    }

    // Blog and Writing
    if (message.includes('blog') || message.includes('article') || message.includes('writing') || message.includes('medium') || message.includes('content') || message.includes('publish')) {
      return {
        content: "Writes on Medium @jayanthansenthilkumar covering AI tools, self-confidence, ML journey challenges, and daily progress strategies.",
        navigationOptions: [{ label: "Read Blog", path: "/blog", description: "Latest articles & insights" }]
      };
    }

    // Contact and Location
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('location') || message.includes('connect') || message.includes('touch') || message.includes('communicate')) {
      return {
        content: "Email: jayanthansenthilkumar18@gmail.com | Location: Karur, Tamil Nadu | Website: jayanthan.prisoltech.com",
        navigationOptions: [{ label: "Contact Form", path: "/contact", description: "Send a message directly" }]
      };
    }

    // Experience and Internships
    if (message.includes('experience') || message.includes('internship') || message.includes('work') || message.includes('job') || message.includes('career') || message.includes('professional') || message.includes('opportunity')) {
      return {
        content: "Seeking AI/ML and full-stack opportunities with experience in event management systems, AI projects, and PrisolTech startup.",
        navigationOptions: [{ label: "View Experience", path: "/resume", description: "Professional journey" }]
      };
    }

    // Interests and Hobbies
    if (message.includes('interest') || message.includes('hobby') || message.includes('personal') || message.includes('cricket') || message.includes('music') || message.includes('travel') || message.includes('passion') || message.includes('free time') || message.includes('outside')) {
      return {
        content: "Enjoys cricket, tech podcasts, train travel, building AI projects, and reading research papers from top conferences.",
        navigationOptions: [{ label: "Personal Story", path: "/about", description: "More about interests" }]
      };
    }

    // Startup and Entrepreneurship
    if (message.includes('startup') || message.includes('prisoltech') || message.includes('founder') || message.includes('business') || message.includes('entrepreneurship') || message.includes('company') || message.includes('venture')) {
      return {
        content: "Founder of PrisolTech, gaining experience in business development, client relations, and translating tech into market solutions.",
        navigationOptions: [{ label: "Startup Details", path: "/resume", description: "PrisolTech journey" }]
      };
    }

    // Career Goals and Future
    if (message.includes('goal') || message.includes('future') || message.includes('aspiration') || message.includes('vision') || message.includes('plan') || message.includes('ambition') || message.includes('dream')) {
      return { content: "Aims to become a leading AI/ML engineer solving real-world problems in healthcare, education, and sustainability." };
    }

    // Resume/CV and Qualifications
    if (message.includes('resume') || message.includes('cv') || message.includes('download') || message.includes('qualification') || message.includes('achievement') || message.includes('credentials') || message.includes('certification')) {
      return {
        content: "Download complete resume from website covering education, projects, certifications, and PrisolTech startup experience.",
        navigationOptions: [{ label: "View Resume", path: "/resume", description: "Complete professional profile" }]
      };
    }

    // Learning and Development
    if (message.includes('learn') || message.includes('study') || message.includes('course') || message.includes('training') || message.includes('development') || message.includes('improve') || message.includes('growth')) {
      return { content: "Committed to continuous learning through hands-on projects, online courses, research engagement, and coding communities." };
    }

    // Achievements and Recognition
    if (message.includes('achievement') || message.includes('award') || message.includes('recognition') || message.includes('accomplish') || message.includes('success') || message.includes('honor')) {
      return { content: "Recognized for high academic performance, successful client projects via PrisolTech, and complex AI/ML application development." };
    }

    // Innovation and Research
    if (message.includes('innovation') || message.includes('research') || message.includes('creative') || message.includes('invention') || message.includes('discovery') || message.includes('breakthrough')) {
      return { content: "Focuses on computer vision for healthcare, NLP for education, ML for sustainability, and ethical AI development." };
    }

    // Navigation - Home
    if (message.includes('home') || message.includes('main page') || message.includes('homepage') || message.includes('landing') || message.includes('front page')) {
      return {
        content: "Home page features dynamic hero section, featured projects (Orlia'25, Sowberry, Virtual Mouse), skills overview, and interactive code editor.",
        navigationOptions: [{ label: "Go to Home", path: "/", description: "View featured projects" }]
      };
    }

    // Navigation - About
    if (message.includes('about page') || message.includes('more about') || message.includes('story page') || message.includes('biography') || message.includes('personal page')) {
      return {
        content: "About page provides personal journey details, educational background, interests, professional photography, and direct contact options.",
        navigationOptions: [{ label: "Visit About", path: "/about", description: "Personal journey details" }]
      };
    }

    // Navigation - Resume
    if (message.includes('resume page') || message.includes('journey book') || message.includes('qualifications') || message.includes('experience page') || message.includes('professional page')) {
      return {
        content: "Resume page (Journey Book) covers education, achievements, events, volunteering, projects, certifications, and startup information.",
        navigationOptions: [{ label: "Open Resume", path: "/resume", description: "Complete professional profile" }]
      };
    }

    // Navigation - Contact
    if (message.includes('contact page') || message.includes('get in touch') || message.includes('message form') || message.includes('communication') || message.includes('reach out')) {
      return {
        content: "Contact page has functional form, email (jayanthansenthilkumar18@gmail.com), location info, and social media links.",
        navigationOptions: [{ label: "Go to Contact", path: "/contact", description: "Send a message" }]
      };
    }

    // Navigation - Blog
    if (message.includes('blog page') || message.includes('articles page') || message.includes('writings') || message.includes('publications') || message.includes('content page')) {
      return {
        content: "Blog page covers AI/ML tools, personal growth insights, technical tutorials, and Medium publications.",
        navigationOptions: [{ label: "Read Blog", path: "/blog", description: "Latest articles" }]
      };
    }

    // Help or capabilities
    if (message.includes('help') || message.includes('what can you') || message.includes('capabilities') || message.includes('assist') || message.includes('support') || message.includes('guide')) {
      return {
        content: "I can help with personal info, website navigation, education details, contact info, blog content, and professional background.",
        navigationOptions: [
          { label: "Home", path: "/", description: "Projects & skills" },
          { label: "About", path: "/about", description: "Personal story" },
          { label: "Resume", path: "/resume", description: "Professional profile" },
          { label: "Contact", path: "/contact", description: "Get in touch" }
        ]
      };
    }

    // Website sections and navigation
    if (message.includes('section') || message.includes('page') || message.includes('navigate') || message.includes('website') || message.includes('site map') || message.includes('structure')) {
      return {
        content: "Website sections: Home (projects/skills), About (personal story), Resume (experience), Contact (form/email), Blog (articles).",
        navigationOptions: [
          { label: "Home", path: "/", description: "Featured projects" },
          { label: "About", path: "/about", description: "Personal journey" },
          { label: "Resume", path: "/resume", description: "Professional experience" },
          { label: "Blog", path: "/blog", description: "Articles & insights" },
          { label: "Contact", path: "/contact", description: "Contact form" }
        ]
      };
    }

    // Technical expertise and specializations
    if (message.includes('expertise') || message.includes('specialization') || message.includes('focus') || message.includes('strength') || message.includes('domain') || message.includes('mastery')) {
      return { content: "Specializes in AI/ML (computer vision, NLP, deep learning) and full-stack development, combining both for intelligent systems." };
    }    // Collaboration and Teamwork
    if (message.includes('collaboration') || message.includes('teamwork') || message.includes('team') || message.includes('work together') || message.includes('partnership') || message.includes('cooperation')) {
      return { content: "Strong team coordination from cricket & PrisolTech, clear communication, mentoring, and client relationship management." };
    }

    // Technology Trends and Industry Insights
    if (message.includes('trend') || message.includes('industry') || message.includes('future tech') || message.includes('emerging') || message.includes('latest') || message.includes('cutting edge') || message.includes('advancement')) {
      return { content: "Focuses on large language models, generative AI, edge computing, AI ethics, and sustainable technologies." };
    }

    // Problem-Solving and Analytical Thinking
    if (message.includes('problem solving') || message.includes('analytical') || message.includes('logic') || message.includes('approach') || message.includes('methodology') || message.includes('thinking') || message.includes('analysis')) {
      return { content: "Breaks complex problems into components, researches solutions, designs innovative approaches with iterative testing." };
    }

    // Communication and Presentation Skills
    if (message.includes('communication') || message.includes('presentation') || message.includes('explain') || message.includes('teaching') || message.includes('speaking') || message.includes('writing') || message.includes('articulate')) {
      return { content: "Clear technical documentation, engaging blog content, effective presentations, and multilingual communication abilities." };
    }
    if (message.includes('social impact') || message.includes('ethics') || message.includes('responsibility') || message.includes('society') || message.includes('positive change') || message.includes('community') || message.includes('volunteer')) {
      return { content: "Committed to ethical AI development, positive social change through technology, and community education initiatives." };
    }
    if (message.includes('adaptable') || message.includes('flexible') || message.includes('quick learner') || message.includes('agile') || message.includes('versatile') || message.includes('adjust') || message.includes('change')) {
      return { content: "Quick technology mastery, diverse project portfolio, flexible team dynamics, and continuous feedback integration." };
    }    // Default response for unrecognized queries
    return {
      content: "I help with Jayanthan's background, skills, projects, and website navigation. Ask about featured projects, technical skills, PrisolTech startup, blog articles, or career goals!",
      navigationOptions: [
        { label: "View Projects", path: "/", description: "Featured work" },
        { label: "About Jayanthan", path: "/about", description: "Personal story" },
        { label: "Read Resume", path: "/resume", description: "Professional profile" },
        { label: "Contact", path: "/contact", description: "Get in touch" }
      ]
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        navigationOptions: response.navigationOptions
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Optionally close the chat after navigation
    // setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };  const toggleChat = () => {
    if (isOpen) {
      // If closing the chat, clear the history
      setIsOpen(false);
      setIsMinimized(false);
      // Clear chat history and reset to initial welcome message with a small delay
      setTimeout(() => {
        setMessages([
          {
            id: '1',
            type: 'bot',
            content: "Hi! I'm Jayani, Jayanthan's AI assistant. I can help you learn about his skills, projects, experience, and navigate around the website. What would you like to know?",
            timestamp: new Date(),
            navigationOptions: [
              { label: "Featured Projects", path: "/", description: "View main projects" },
              { label: "About Jayanthan", path: "/about", description: "Personal story" },
              { label: "Professional Resume", path: "/resume", description: "Experience & skills" },
              { label: "Contact Info", path: "/contact", description: "Get in touch" }
            ]
          }
        ]);
        setInputValue('');
        setIsTyping(false);
      }, 100);
    } else {
      // If opening the chat, just open it
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
    // Clear chat history and reset to initial welcome message with a small delay
    setTimeout(() => {
      setMessages([
        {
          id: '1',
          type: 'bot',
          content: "Hi! I'm Jayani, Jayanthan's AI assistant. I can help you learn about his skills, projects, experience, and navigate around the website. What would you like to know?",
          timestamp: new Date(),
          navigationOptions: [
            { label: "Featured Projects", path: "/", description: "View main projects" },
            { label: "About Jayanthan", path: "/about", description: "Personal story" },
            { label: "Professional Resume", path: "/resume", description: "Experience & skills" },
            { label: "Contact Info", path: "/contact", description: "Get in touch" }
          ]
        }
      ]);
      setInputValue('');
      setIsTyping(false);
    }, 100);
  };return (
    <div className={cn("fixed bottom-6 left-6 z-50", className)}>
      {/* Chat Window */}
      {isOpen && (        <div className={cn(
          "mb-4 bg-background border border-border rounded-lg shadow-2xl transition-all duration-300 ease-in-out",
          isMinimized ? "w-80 h-16" : "w-80 h-[520px] sm:w-96 sm:h-[580px]"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Profile Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src="images/jayanthan.jpg" 
                    alt="Jayani Assistant" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to Bot icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const botIcon = target.nextElementSibling as HTMLElement;
                      if (botIcon) botIcon.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-secondary text-secondary-foreground rounded-full items-center justify-center hidden">
                    <Bot className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Jayani Assistant</h3>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>Online now</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(currentTime)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeChat}
                className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <ScrollArea className="flex-1 p-4 h-96 sm:h-[420px]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex flex-col space-y-1 max-w-[90%]",
                        message.type === 'user' ? "ml-auto items-end" : "items-start"
                      )}
                    >
                      <div className={cn(
                        "flex items-start space-x-2",
                        message.type === 'user' ? "flex-row-reverse space-x-reverse" : ""
                      )}>
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          message.type === 'user' 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-secondary-foreground"
                        )}>
                          {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={cn(
                          "rounded-lg px-3 py-2 text-sm whitespace-pre-line",
                          message.type === 'user'
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}>
                          {message.content}
                        </div>
                      </div>
                      
                      {/* Navigation Options */}
                      {message.type === 'bot' && message.navigationOptions && message.navigationOptions.length > 0 && (
                        <div className="mt-3 space-y-2 max-w-full">
                          {message.navigationOptions.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleNavigation(option.path)}
                              className="flex items-center space-x-2 text-xs h-auto py-2 px-3 w-full justify-start hover:bg-primary/10 transition-colors"
                            >
                              <ExternalLink className="h-3 w-3 flex-shrink-0" />
                              <div className="flex flex-col items-start text-left">
                                <span className="font-medium">{option.label}</span>
                                {option.description && (
                                  <span className="text-muted-foreground text-xs mt-0.5">{option.description}</span>
                                )}
                              </div>
                            </Button>
                          ))}
                        </div>
                      )}
                      <div className={cn(
                        "text-xs text-muted-foreground px-2",
                        message.type === 'user' ? "text-right" : "text-left"
                      )}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>              {/* Input Area */}
              <div className="border-t border-border p-4 rounded-b-lg">
                <div className="flex items-center space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Jayani is ready to assist you!"
                    className="flex-1 text-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputValue.trim()}
                    size="sm"
                    className="px-3 h-9"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>              </div>
            </>
          )}
        </div>      )}

      {/* Chat Toggle Button - Only show when chat is closed */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-110"
          )}
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
        </Button>
      )}
    </div>
  );
};

export default ChatAssistant;
