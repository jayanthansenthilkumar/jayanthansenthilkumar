import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { NoUnderlineTabsList as TabsList } from '@/components/ui/no-underline-tabs-list';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Rocket, 
  Lightbulb, 
  Heart, 
  BookOpen, 
  Trophy, 
  Calendar, 
  Handshake, 
  Laptop, 
  Zap,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ScrollAreaHorizontal } from '@/components/ui/scroll-area-horizontal';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  counts: {
    education: number;
    vitahonour: number;
    events: number;
    volunteering: number;
    projects: number;
    certifications: number;
    internship: number;
    skills: number;
    startup: number;
  };
}

const ResumeSidebar = ({ activeTab, setActiveTab, counts }: ResumeSidebarProps) => {
  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap, count: counts.education },
    { id: 'vitahonour', label: 'VitaHonour', icon: Trophy, count: counts.vitahonour },
    { id: 'events', label: 'Events', icon: Calendar, count: counts.events },
    { id: 'volunteering', label: 'Volunteering', icon: Handshake, count: counts.volunteering },
    { id: 'projects', label: 'Projects', icon: Rocket, count: counts.projects },
    { id: 'certifications', label: 'Certifications', icon: Award, count: counts.certifications },
    { id: 'internship', label: 'Internship', icon: Briefcase, count: counts.internship },
    { id: 'skills', label: 'Skills', icon: Code, count: counts.skills },
    { id: 'startup', label: 'Startup', icon: Zap, count: counts.startup },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full md:w-64 bg-card dark:bg-card rounded-lg shadow-md border border-border sticky top-20 sm:top-24 self-start max-h-[calc(100vh-120px)] flex flex-col"
    >
      <div className="p-3 sm:p-4 border-b border-border">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <h2 className="font-bold text-lg sm:text-xl text-primary">Journey Book</h2>
        </div>
      </div>
      <div className="p-2 sm:p-4 overflow-y-auto flex-grow">
        <div className="space-y-0.5 sm:space-y-1">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all text-left text-sm sm:text-base",
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium shadow-md"
                  : "hover:bg-muted dark:hover:bg-muted text-muted-foreground"
              )}
            >
              <tab.icon size={16} className={activeTab === tab.id ? "animate-pulse" : ""} />
              <span className="flex-1 text-left">{tab.label}</span>
              {tab.count > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    "px-2 py-0.5 text-xs font-medium rounded-full transition-all",
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  {tab.count}
                </motion.span>
              )}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute right-1 w-1.5 h-1.5 rounded-full bg-white"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 sm:px-4 pb-3 sm:pb-4 pt-2 border-t border-border">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg text-sm sm:text-base py-1.5 sm:py-2"
          asChild
        >
          <a href="/Resume/jayanthan.pdf" download>
            <Download size={14} className="sm:w-4 sm:h-4" /> Download CV
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);  
  const education = [
    {
      degree: "B.Tech - AIML",
      institution: "M. Kumarasamy College of Engineering",
      location: "Karur, Tamil Nadu",
      period: "Oct 2022 - May 2026",
      gpa: "8.2",
      image: "images/mkce.jpeg"
    },
    {
      degree: "12th Standard (HSC)",
      institution: "Cheran Matriculation Higher Secondary School",
      location: "Karur, Tamil Nadu",
      period: "Jun 2021 - Apr 2022",
      gpa: "89.5%",
      image: "images/cheran.avif"
    },
    {
      degree: "10th Standard (SSLC)",
      institution: "Cheran Matriculation Higher Secondary School",
      location: "karur, Tamil Nadu",
      period: "Apr 2019 - June 2020",
      gpa: "75.6%",
      image: "images/cheran.avif"
    }
  ];
  const vitaHonour = [
    {
      title: "Honoured as a Guest",
      organization: "Panimalar Engineering College, Chennai",
      year: "Feb 2025",
      image: "images/honour1.jpg",
      badges: ["Chief Guest", "Honour"]
    },
    {
      title: "Honoured as a Speaker",
      organization: "M. Kumarasamy College of Engineering, Karur",
      year: "2024",
      image: "images/honour2.jpg",
      badges: ["Honour", "Speaker"]
    }
  ];

  const events = [
    {
      title: "Orlia'25",
      organization: "M. Kumarasamy College of Engineering",
      year: "April 3 & 4 2025",
      image: "images/event1.jpg",
      badges: ["Organizer"]
    },
    {
      title: "Trenz'25",
      organization: "M. Kumarasamy College of Engineering",
      year: "April 30 2025",
      image: "images/event2.jpg",
      badges: ["Organizer"]
    }
  ];

  const volunteering = [
    {
      title: "Joint Secretary - AI CLUB",
      organization: "M. Kumarasamy College of Engineering",
      period: "Jun 2024 - Nov 2024",
      image: "images/aiclub.jpg",
      badges: ["Leadership", "Event Management", "Technical Education"]
    },
    {
      title: "President - AI CLUB",
      organization: "M. Kumarasamy College of Engineering",
      period: "Apr 2023 - May 2024",
      image: "images/aiclub.jpg",
      badges: ["AI Projects", "Community Building", "Technical Support"]
    },
    {
      title: "GitHub Student Developer",
      organization: "GitHub Education",
      period: "Jan 2023 - Present",
      image: "images/github.jpg",
      badges: ["Open Source", "Mentorship", "Code Reviews"]
    }
  ];

  // Projects data
  const projects = [
    {
      name: "Orlia'25 Website",
      image: "images/fullstackorlia.jpg",
      description: "March 2025",
      badges: ["Computer Vision", "AI/ML", "HCI"]
    },
    {
      name: "Sowberry",
      image: "images/sowberry.jpg",
      description: "February 2025 - Present",
      badges: ["Web App", "Full Stack"]
    },
    {
      name: "Virtual Mouse",
      image: "images/virtualmouse.png",
      description: "January 2025",
      badges: ["Analytics", "Data Visualization"]
    },
    {
      name: "CMS - Portal MKCE",
      image: "images/cms.webp",
      description: "September 2024 - February 2025",
      badges: ["CMS", "Content Creation", "SEO"]
    },
    {
      name: "Action Analysis",
      image: "images/aa.png",
      description: "September 2024",
      badges: ["AI", "Developer Tools"]
    },
    {
      name: "Haitatsu - Delivery App",
      image: "images/fleet.jpg",
      description: "September 2023 - March 2024",
      badges: ["Team Lead", "Full Stack"]
    }
  ];

  // Certifications data
  const certifications = [
    {
      name: "GitHub Foundation",
      issuer: "GitHub Education",
      logo: "/images/git.jpg",
      date: "Dec 2024",
      description: "Foundational certification covering GitHub fundamentals, version control, collaboration workflows, and open source development practices.",
      badges: ["Version Control", "Open Source", "Collaboration"]
    },
    {
      name: "HR Analytics",
      issuer: "NPTEL",
      logo: "/images/hranalytics.png",
      date: "Oct 2024",
      description: "Comprehensive certification in human resource analytics, data-driven HR decision making, and workforce analytics methodologies.",
      badges: ["Data Analytics", "HR Technology", "Business Intelligence"]
    },
    {
      name: "The Joy of Computing using Python",
      issuer: "NPTEL",
      logo: "/images/joyofpython.png",
      date: "April 2024",
      description: "Extensive certification covering Python programming fundamentals, computational thinking, and practical programming applications.",
      badges: ["Python Programming", "Problem Solving"]
    }
  ];

  const internship = [
    {
      title: "Full Stack Developer",
      company: "Technology Innovation Hub",
      location: "M. Kumarasamy College of Engineering, Karur",
      period: "Jan 2025 - May 2025",
      image: "images/tih.jpg",
      badges: ["HTML", "MySQL", "MongoDB", "PHP"],
      responsibilities: [
        "Developed and maintained full stack web applications using MERN stack",
        "Implemented responsive UI designs and RESTful API integrations",
        "Collaborated with design and product teams to deliver high-quality software solutions"
      ]
    }
  ];

  // Skills data
  const skills = [
    {
      category: "ML & AI Technologies",
      logo: "/images/aitools.webp",
      skills: [
        { name: "TensorFlow", proficiency: 70 },
        { name: "PyTorch", proficiency: 65 },
        { name: "NLP", proficiency: 60 },
        { name: "Hugging Face", proficiency: 65 },
        { name: "OpenCV", proficiency: 68 },
        { name: "NumPy", proficiency: 80 },
        { name: "Pandas", proficiency: 78 },
        { name: "Polars", proficiency: 55 },
        { name: "Matplotlib", proficiency: 75 }
      ]
    },
    {
      category: "Web Development",
      logo: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      skills: [
        { name: "HTML", proficiency: 85 },
        { name: "CSS", proficiency: 82 },
        { name: "JavaScript", proficiency: 75 },
        { name: "Tailwind CSS", proficiency: 80 },
        { name: "FastAPI", proficiency: 58 },
        { name: "MongoDB", proficiency: 60 },
        { name: "PostgreSQL", proficiency: 55 },
        { name: "MySQL", proficiency: 65 },
        { name: "Git & GitHub", proficiency: 75 }
      ]
    },
    {
      category: "Tools & Frameworks",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      skills: [
        { name: "Python", proficiency: 80 },
        { name: "VS Code", proficiency: 85 },
        { name: "Docker", proficiency: 55 },
        { name: "CustomTkinter", proficiency: 70 },
        { name: "DearPyGUI", proficiency: 65 },
        { name: "Claude AI", proficiency: 70 },
        { name: "ChatGPT", proficiency: 75 },
        { name: "Data Visualization", proficiency: 75 },
        { name: "Version Control", proficiency: 75 }
      ]
    }
  ];

  const startup = [
    {
      title: "PrisolTech",
      role: "Co-founder & Chief Executive Officer",
      period: "Feb 2025 - Present",
      image: "/images/prisoltech.jpg",
      description: "Co-founded an innovative IT solutions provider specializing in comprehensive digital transformation services. Leading strategic planning, business development, and technology vision while delivering customized IT infrastructure, cybersecurity, cloud services, and custom software development solutions to help businesses maximize efficiency and achieve digital transformation.",
      website: "https://prisoltech.com"
    }
  ];

  // Calculate counts for each section
  const counts = {
    education: education.length,
    vitahonour: vitaHonour.length,
    events: events.length,
    volunteering: volunteering.length,
    projects: projects.length,
    certifications: certifications.length,
    internship: internship.length,
    skills: skills.length,
    startup: startup.length
  };

  // Render card based on tab content
  const renderCards = () => {
    let items = [];
    
    switch (activeTab) {
      case 'education':
        items = education;
        break;
      case 'vitahonour':
        items = vitaHonour;
        break;
      case 'events':
        items = events;
        break;
      case 'volunteering':
        items = volunteering;
        break;
      case 'projects':
        items = projects;
        break;
      case 'certifications':
        items = certifications.slice(0, 3); // Only show first 3 certification cards
        break;
      case 'internship':
        items = internship; // Show all internships
        break;
      case 'skills':
        items = skills;
        break;
      case 'startup':
        items = startup.slice(0, 1); // Only show first startup card
        break;
      default:
        items = [];
    }

    // Use different layouts based on the number of items to display
    const getGridLayout = () => {
      if (activeTab === 'internship' || activeTab === 'startup') {
        return "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-xl mx-auto gap-6 sm:gap-8";
      } else if (activeTab === 'certifications') {
        return "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8";
      } else if (activeTab === 'skills') {
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8";
      } else {
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";
      }
    };
    
    // For single item displays, add a custom wrapper
    const shouldWrapContent = activeTab === 'internship' || activeTab === 'startup';
    
    // Special rendering for skills section
    const isSkillsTab = activeTab === 'skills';
    
    // Helper function to check tab type for TypeScript
    const isTab = (tab: string) => activeTab === tab;
    
    return (
      <AnimatePresence mode="wait">              {isSkillsTab ? (
          <motion.div
            key="skills-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              key="skills-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
            >
              {items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: index * 0.05, 
                    ease: "easeOut" 
                  }}
                  className="bg-white/30 dark:bg-navy-light/30 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20">
                      <img 
                        src={item.logo} 
                        alt={item.category} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {item.skills.map((skill, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.6, delay: 0.1 + (i * 0.05) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : shouldWrapContent ? (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base text-muted-foreground font-medium mb-4"
            >
              {isTab('internship') ? 'Professional Internships' : 'Featured Startup Project'}
            </motion.h3>
            <motion.div 
              key={`${activeTab}-grid`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={getGridLayout()}
            >
              {items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: index * 0.05, 
                    ease: "easeOut" 
                  }}
                  className={cn(
                    "group relative bg-gradient-to-br from-card to-card/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-primary/20 h-full flex flex-col overflow-hidden",
                    // Compact styling for internship or startup cards
                    (activeTab === 'internship' || activeTab === 'startup') && "p-5 sm:p-6 shadow-md"
                  )}
                >
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 z-0"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-full -ml-8 -mb-8 z-0"></div>
                  
                  {/* Image section with enhanced styling */}
                  {(!isTab('skills')) && (
                    <div className={cn(
                      "mb-4 rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 shadow-sm relative z-10",
                      (isTab('startup') || isTab('internship')) ? "h-40 w-40 mx-auto" : "h-40"
                    )}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <img 
                        src={item.image || item.logo || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} 
                        alt={item.name || item.title || item.degree || item.category} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                      />
                    </div>
                  )}
                  
                  {/* Header section with updated styling */}
                  <div className="flex items-start gap-4 mb-3 relative z-10">                  
                  {/* Icon with enhanced styling - only for skills section */}
                  {isTab('skills') && (
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary/20 group-hover:border-primary/40 shadow-md transition-all">
                      <img 
                        src={item.logo || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} 
                        alt={item.category || "Icon"} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
                      />
                    </div>
                  )}
                    
                    <div className={cn(
                      "flex-1",
                      // Add additional styling for internship layout
                      (isTab('internship') || isTab('startup')) && "text-center mx-auto"
                    )}>
                      {/* Title with hover effect and year badge for events */}
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1 pr-2">
                          {item.name || item.title || item.degree || item.category}
                        </h3>
                        {isTab('events') && item.year && 
                          <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors duration-300 flex-shrink-0">{item.year}</span>
                        }
                      </div>
                      
                      {/* Subtitle with appropriate styling */}
                      {item.institution && <p className="text-secondary font-medium text-sm">{item.institution}</p>}
                      {item.company && <p className="text-primary font-medium text-sm">{item.company}</p>}
                      {item.organization && <p className="text-accent font-medium text-sm">{item.organization}</p>}
                      {item.issuer && <p className="text-accent font-medium text-sm">{item.issuer}</p>}
                      {item.platform && <p className="text-primary font-medium text-sm">{item.platform}</p>}
                      {item.role && <p className="text-primary font-medium text-sm">{item.role}</p>}
                      
                      {/* Metadata with enhanced badges */}
                      <div className={cn(
                        "flex items-center flex-wrap gap-2 mt-2",
                        isTab('startup') && "justify-center" // Center metadata for startup cards
                      )}>
                        {item.location && <span className="text-xs text-muted-foreground">{item.location}</span>}
                        {(item.location && (item.period || (item.year && !isTab('events')) || item.date)) && 
                          <span className="text-muted-foreground hidden sm:inline-block">•</span>}
                        {item.period && 
                          <span className="bg-primary/10 text-primary group-hover:bg-primary/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.period}</span>}
                        {/* Display year badge only for non-event tabs */}
                        {item.year && !isTab('events') && 
                          <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.year}</span>}
                        {item.date && 
                          <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.date}</span>}
                        {item.gpa && 
                          <span className="bg-secondary/10 text-secondary group-hover:bg-secondary/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">GPA: {item.gpa}</span>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description with enhanced styling */}
                  {item.description && (
                    <p className={cn(
                      "text-muted-foreground group-hover:text-foreground/80 text-sm flex-grow mb-4 transition-colors duration-300 relative z-10",
                      isTab('startup') ? "text-xs line-clamp-4" : "line-clamp-3"
                    )}>{item.description}</p>
                  )}
                  
                  {/* Lists with enhanced styling */}
                  {item.details && (
                    <ul className="mt-1 mb-4 space-y-1.5 list-disc list-inside text-muted-foreground group-hover:text-foreground/80 text-sm relative z-10 transition-colors duration-300">
                      {item.details.slice(0, 3).map((detail: string, i: number) => (
                        <li key={i} className="pl-2">{detail}</li>
                      ))}
                      {item.details.length > 3 && (
                        <li className="pl-2 text-muted-foreground/70 italic">+{item.details.length - 3} more...</li>
                      )}
                    </ul>
                  )}
                     {/* Responsibilities with enhanced styling */}
                {item.responsibilities && (
                  <ul className={cn(
                    "mt-1 mb-4 space-y-1.5 list-disc list-inside text-muted-foreground group-hover:text-foreground/80 text-sm relative z-10 transition-colors duration-300",
                    isTab('internship') && "space-y-1 text-xs"
                  )}>
                    {/* Show 3 responsibilities for consistency with startup card */}
                    {item.responsibilities.slice(0, 3).map((responsibility: string, i: number) => (
                      <li key={i} className={cn("pl-2", isTab('internship') && "line-clamp-2")}>{responsibility}</li>
                    ))}
                    {item.responsibilities && item.responsibilities.length > 3 && (
                      <li className="pl-2 text-muted-foreground/70 italic">+{item.responsibilities.length - 3} more...</li>
                    )}
                  </ul>
                )}
                  
                  {/* Skills tags with enhanced styling */}
                  {item.items && !isTab('skills') && (
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {item.items.slice(0, 6).map((skill: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary group-hover:bg-primary/20 text-xs rounded-full transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                      {item.items.length > 6 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground group-hover:bg-muted/80 text-xs rounded-full transition-colors duration-300">
                          +{item.items.length - 6} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Special skill list display for skills tab with checkmark icons */}
                  {isTab('skills') && item.items && (
                    <ul className="space-y-1.5 sm:space-y-2 mt-3">
                      {item.items.map((skill: string, i: number) => (
                        <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 dark:text-gray-300 text-sm">
                          <CheckCircle size={14} className="text-primary sm:w-4 sm:h-4" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Technologies tags with enhanced styling */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {item.technologies.slice(0, 4).map((tech: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary group-hover:bg-primary/20 text-xs rounded-full transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground group-hover:bg-muted/80 text-xs rounded-full transition-colors duration-300">
                          +{item.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Badges for VitaHonour, Internship, and Startup */}
                  {item.badges && (
                    <div className={cn(
                      "flex flex-wrap gap-2 mt-4 relative z-10",
                      (isTab('internship') || isTab('startup')) && "justify-center" // Center badges for internship and startup sections
                    )}>
                      {item.badges.map((badge: string, i: number) => (
                        <span key={i} className={cn(
                          "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border shadow-sm",
                          (isTab('internship') || isTab('startup'))
                            ? "bg-primary/15 text-primary group-hover:bg-primary/25 border-primary/20" 
                            : "bg-secondary/15 text-secondary group-hover:bg-secondary/25 border-secondary/20"
                        )}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Website link for startup */}
                  {isTab('startup') && item.website && (
                    <div className="mt-4 relative z-10 text-center">
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm font-medium"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={getGridLayout()}
          >
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.25, 
                  delay: index * 0.05, 
                  ease: "easeOut" 
                }}
                className={cn(
                  "group relative bg-gradient-to-br from-card to-card/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-primary/20 h-full flex flex-col overflow-hidden",
                  // Compact styling for internship or startup cards
                  (activeTab === 'internship' || activeTab === 'startup') && "p-5 sm:p-6 shadow-md"
                )}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 z-0"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-full -ml-8 -mb-8 z-0"></div>
                
                {/* Image section with enhanced styling */}
                {(!isTab('skills') && !isTab('internship')) && (
                  <div className={cn(
                    "mb-4 rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 shadow-sm relative z-10",
                    isTab('startup') ? "h-40 w-40 mx-auto" : "h-40"
                  )}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img 
                      src={item.image || item.logo || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} 
                      alt={item.name || item.title || item.degree || item.category} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                    />
                  </div>
                )}
                
                {/* Header section with updated styling */}
                <div className="flex items-start gap-4 mb-3 relative z-10">
                  {/* Icon with enhanced styling */}
                  {isTab('skills') && (
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary/20 group-hover:border-primary/40 shadow-md transition-all">
                      <img 
                        src={item.logo || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} 
                        alt={item.category || item.title || "Icon"} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
                      />
                    </div>
                  )}
                  {/* Removed duplicate internship image */}
                  
                  <div className="flex-1">
                    {/* Title with hover effect and year badge for events */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1 pr-2">
                        {item.name || item.title || item.degree || item.category}
                      </h3>
                      {isTab('events') && item.year && 
                        <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors duration-300 flex-shrink-0">{item.year}</span>
                      }
                    </div>
                    
                    {/* Subtitle with appropriate styling */}
                    {item.institution && <p className="text-secondary font-medium text-sm">{item.institution}</p>}
                    {item.company && <p className="text-primary font-medium text-sm">{item.company}</p>}
                    {item.organization && <p className="text-accent font-medium text-sm">{item.organization}</p>}
                    {item.issuer && <p className="text-accent font-medium text-sm">{item.issuer}</p>}
                    {item.platform && <p className="text-primary font-medium text-sm">{item.platform}</p>}
                    {item.role && <p className="text-primary font-medium text-sm">{item.role}</p>}
                    
                    {/* Metadata with enhanced badges */}
                    <div className={cn(
                      "flex items-center flex-wrap gap-2 mt-2",
                      isTab('startup') && "justify-center" // Center metadata for startup cards
                    )}>
                      {item.location && <span className="text-xs text-muted-foreground">{item.location}</span>}
                      {(item.location && (item.period || (item.year && !isTab('events')) || item.date)) && 
                        <span className="text-muted-foreground hidden sm:inline-block">•</span>}
                      {item.period && 
                        <span className="bg-primary/10 text-primary group-hover:bg-primary/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.period}</span>}
                      {/* Display year badge only for non-event tabs */}
                      {item.year && !isTab('events') && 
                        <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.year}</span>}
                      {item.date && 
                        <span className="bg-accent/10 text-accent group-hover:bg-accent/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">{item.date}</span>}
                      {item.gpa && 
                        <span className="bg-secondary/10 text-secondary group-hover:bg-secondary/20 px-3 py-1 rounded-full text-xs transition-colors duration-300">GPA: {item.gpa}</span>}
                    </div>
                  </div>
                </div>
                
                {/* Description with enhanced styling */}
                {item.description && (
                  <p className={cn(
                    "text-muted-foreground group-hover:text-foreground/80 text-sm flex-grow mb-4 transition-colors duration-300 relative z-10",
                    isTab('startup') ? "text-xs line-clamp-4" : "line-clamp-3"
                  )}>{item.description}</p>
                )}
                
                {/* Lists with enhanced styling */}
                {item.details && (
                  <ul className="mt-1 mb-4 space-y-1.5 list-disc list-inside text-muted-foreground group-hover:text-foreground/80 text-sm relative z-10 transition-colors duration-300">
                    {item.details.slice(0, 3).map((detail: string, i: number) => (
                      <li key={i} className="pl-2">{detail}</li>
                    ))}
                    {item.details.length > 3 && (
                      <li className="pl-2 text-muted-foreground/70 italic">+{item.details.length - 3} more...</li>
                    )}
                  </ul>
                )}
                
                {/* Responsibilities with enhanced styling */}
                {item.responsibilities && (
                  <ul className={cn(
                    "mt-1 mb-4 space-y-1.5 list-disc list-inside text-muted-foreground group-hover:text-foreground/80 text-sm relative z-10 transition-colors duration-300",
                    isTab('internship') && "space-y-1 text-xs"
                  )}>
                    {/* Show all responsibilities for the internship tab, otherwise limit to 3 */}
                    {(isTab('internship') ? item.responsibilities : item.responsibilities.slice(0, 3)).map((responsibility: string, i: number) => (
                      <li key={i} className={cn("pl-2", isTab('internship') && "line-clamp-2")}>{responsibility}</li>
                    ))}
                    {!isTab('internship') && item.responsibilities.length > 3 && (
                      <li className="pl-2 text-muted-foreground/70 italic">+{item.responsibilities.length - 3} more...</li>
                    )}
                  </ul>
                )}
                
                {/* Skills tags with enhanced styling */}
                {item.items && !isTab('skills') && (
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {item.items.slice(0, 6).map((skill: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary group-hover:bg-primary/20 text-xs rounded-full transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                    {item.items.length > 6 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground group-hover:bg-muted/80 text-xs rounded-full transition-colors duration-300">
                        +{item.items.length - 6} more
                      </span>
                    )}
                  </div>
                )}
                
                {/* Special skill list display for skills tab with progress bars */}
                {isTab('skills') && item.skills && (
                  <div className="space-y-3 mt-3">
                    {item.skills.map((skill: { name: string, proficiency: number }, i: number) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.6, delay: 0.1 + (i * 0.05) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Technologies tags with enhanced styling */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {item.technologies.slice(0, 4).map((tech: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary group-hover:bg-primary/20 text-xs rounded-full transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground group-hover:bg-muted/80 text-xs rounded-full transition-colors duration-300">
                        +{item.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                )}
                
                {/* Badges for VitaHonour, Internship, and other sections */}
                {item.badges && (
                  <div className={cn(
                    "flex flex-wrap gap-2 mt-4 relative z-10",
                    (isTab('internship') || isTab('startup')) && "justify-center" // Center badges for internship and startup sections
                  )}>
                    {item.badges.map((badge: string, i: number) => (
                      <span key={i} className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border shadow-sm",
                        (isTab('internship') || isTab('startup'))
                          ? "bg-primary/15 text-primary group-hover:bg-primary/25 border-primary/20" 
                          : "bg-secondary/15 text-secondary group-hover:bg-secondary/25 border-secondary/20"
                      )}>
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Website link for startup */}
                {isTab('startup') && item.website && (
                  <div className="mt-4 relative z-10 text-center">
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm font-medium"
                    >
                      Visit Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Resume</h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              A comprehensive overview of my professional experience, education, and skills.
            </p>
            {isMobileView && (
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-1.5 px-3" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-1.5 h-3.5 w-3.5" /> Download Resume
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
      
      {/* Resume Content */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-background to-accent/5 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* Sidebar Navigation for Desktop */}
            {!isMobileView && (
              <ResumeSidebar activeTab={activeTab} setActiveTab={setActiveTab} counts={counts} />
            )}
            
            {/* Mobile Tabs */}
            {isMobileView && (
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-6 border-b-0 shadow-none">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                  <ScrollAreaHorizontal className="w-full">
                    <TabsList className="flex w-max space-x-2 p-1.5 px-2 bg-muted border border-border rounded-md after:hidden border-b-0 shadow-none">
                      {[
                        { id: 'education', label: 'Education', icon: GraduationCap, count: counts.education },
                        { id: 'vitahonour', label: 'VitaHonour', icon: Trophy, count: counts.vitahonour },
                        { id: 'events', label: 'Events', icon: Calendar, count: counts.events },
                        { id: 'volunteering', label: 'Volunteering', icon: Handshake, count: counts.volunteering },
                        { id: 'projects', label: 'Projects', icon: Rocket, count: counts.projects },
                        { id: 'certifications', label: 'Certifications', icon: Award, count: counts.certifications },
                        { id: 'internship', label: 'Internship', icon: Briefcase, count: counts.internship },
                        { id: 'skills', label: 'Skills', icon: Code, count: counts.skills },
                        { id: 'startup', label: 'Startup', icon: Zap, count: counts.startup },
                      ].map((tab) => (
                        <TabsTrigger 
                          key={tab.id} 
                          value={tab.id}
                          className={cn(
                            "flex items-center gap-1 px-3 py-1.5 whitespace-nowrap text-xs font-medium rounded-md transition-all duration-200 border-none after:hidden relative overflow-hidden",
                            activeTab === tab.id 
                              ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm" 
                              : "hover:bg-muted-foreground/10"
                          )}
                        >
                          {activeTab === tab.id && (
                            <motion.div
                              layoutId="activeMobileTabBackground"
                              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                              initial={false}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            />
                          )}
                          <span className={cn(
                            "flex items-center gap-1 relative z-10", 
                            activeTab === tab.id && "text-primary-foreground"
                          )}>
                            <tab.icon className="h-3.5 w-3.5 mr-1" />
                            {tab.label}
                            {tab.count > 0 && (
                              <span className={cn(
                                "ml-1 px-1.5 py-0.5 text-xs font-medium rounded-full transition-all",
                                activeTab === tab.id
                                  ? "bg-white/20 text-white"
                                  : "bg-primary/10 text-primary"
                              )}>
                                {tab.count}
                              </span>
                            )}
                          </span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </ScrollAreaHorizontal>
                </motion.div>
              </Tabs>
            )}
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 bg-gradient-to-br from-card to-card/90 rounded-xl shadow-lg p-5 sm:p-8 border border-border/50 min-h-[500px] sm:min-h-[600px] relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 z-0"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full -ml-20 -mb-20 z-0"
              ></motion.div>
              
              {/* Tab Content */}
              <div className="relative z-10">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 sm:mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-card-foreground border-b border-border/70 pb-3 flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mr-2"
                      >
                        {activeTab === 'education' && 'Education'}
                        {activeTab === 'vitahonour' && 'Vita Honours'}
                        {activeTab === 'events' && 'Events Participated'}
                        {activeTab === 'volunteering' && 'Volunteering Experience'}
                        {activeTab === 'projects' && 'Key Projects'}
                        {activeTab === 'certifications' && 'Professional Certifications'}
                        {activeTab === 'internship' && 'Internship Experience'}
                        {activeTab === 'skills' && 'Technical Skills'}
                        {activeTab === 'startup' && 'Startup Journey'}
                      </motion.span>
                    </AnimatePresence>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full ml-auto"
                    ></motion.div>
                  </h2>
                </motion.div>
                
                {renderCards()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-foreground">Ready to Hire Me?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              I'm actively seeking new opportunities in AI/ML development and full-stack engineering. Let's discuss how I can contribute to your team's success!
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-base">
                <Link to="/contact">Hire Me Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary hover:text-primary-foreground py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-base">
                <Link to="/about">View My Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
