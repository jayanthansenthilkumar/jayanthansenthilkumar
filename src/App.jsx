import React, { useState, useEffect } from 'react';
import { Folder, FileCode, Hash, Cpu, FileText, Terminal, X, Menu, GitBranch, BookOpen, Search, Settings, ChevronRight, ChevronDown, Files, GitFork, Blocks, User, Bell } from 'lucide-react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Journey from './Journey';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from './components/PageTransition';
import CommandPalette from './components/CommandPalette';
import MatrixBackground from './components/MatrixBackground';
import ParticlesBackground from './components/ParticlesBackground';
import StructuredData from './components/StructuredData';
import useVimNavigation from './hooks/useVimNavigation';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [activeFile, setActiveFile] = useState('home');
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeActivity, setActiveActivity] = useState('explorer');
  const [isExplorerExpanded, setIsExplorerExpanded] = useState(true);
  const [openTabs, setOpenTabs] = useState(['home']);

  const { showToast } = useVimNavigation(setActiveFile);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setIsTreeOpen(false);
      else setIsTreeOpen(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const files = [
    { id: 'home', name: 'README.md', icon: Hash, color: 'text-gruvbox-yellow' },
    { id: 'about', name: 'about.lua', icon: FileCode, color: 'text-gruvbox-blue' },
    { id: 'projects', name: 'projects.rs', icon: Cpu, color: 'text-gruvbox-orange' },
    { id: 'experience', name: 'experience.log', icon: FileText, color: 'text-gruvbox-aqua' },
    { id: 'journey', name: 'journey.json', icon: BookOpen, color: 'text-gruvbox-purple' },
    { id: 'contact', name: 'contact.sh', icon: Terminal, color: 'text-gruvbox-green' },
  ];

  const activityBarItems = [
    { id: 'explorer', icon: Files, label: 'Explorer' },
    // { id: 'search', icon: Search, label: 'Search' },
    { id: 'source', icon: GitFork, label: 'Source Control' },
    // { id: 'extensions', icon: Blocks, label: 'Extensions' },
  ];

  // Handle file selection and tab management
  const handleFileSelect = (fileId) => {
    setActiveFile(fileId);
    if (!openTabs.includes(fileId)) {
      setOpenTabs([...openTabs, fileId]);
    }
    if (isMobile) setIsTreeOpen(false);
  };

  // Close tab
  const handleCloseTab = (e, fileId) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(id => id !== fileId);
    setOpenTabs(newTabs);
    if (activeFile === fileId && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    } else if (newTabs.length === 0) {
      setOpenTabs(['home']);
      setActiveFile('home');
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Vim Motions (j/k) - Only if not typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'j') {
        const scrollable = document.querySelector('.custom-scrollbar');
        if (scrollable) scrollable.scrollBy({ top: 50, behavior: 'smooth' });
      } else if (e.key === 'k') {
        const scrollable = document.querySelector('.custom-scrollbar');
        if (scrollable) scrollable.scrollBy({ top: -50, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeFileData = files.find(f => f.id === activeFile);

  const renderContent = () => {
    switch (activeFile) {
      case 'home': return <Home navigateToFile={setActiveFile} />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'journey': return <Journey />;
      case 'contact': return <Contact />;
      default: return <Home navigateToFile={setActiveFile} />;
    }
  };

  return (
    <HelmetProvider>
      <StructuredData />
      <div className="flex flex-col h-[100dvh] bg-gruvbox-bg text-gruvbox-fg font-mono overflow-hidden relative">
        <ParticlesBackground />
        <MatrixBackground />

        <CommandPalette onNavigate={handleFileSelect} />

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20, x: '50%' }}
              animate={{ opacity: 1, y: 0, x: '50%' }}
              exit={{ opacity: 0, y: 20, x: '50%' }}
              className="fixed bottom-12 right-1/2 translate-x-1/2 z-50 bg-gruvbox-bgHard border border-gruvbox-blue text-gruvbox-fg px-4 py-2 rounded shadow-lg font-mono flex items-center"
              style={{ right: '50%', transform: 'translateX(50%)' }}
            >
              <span className="text-gruvbox-blue mr-2 font-bold">➜</span>
              {showToast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title Bar - VS Code Style */}
        <div className="flex items-center bg-gruvbox-bgHard text-xs h-8 border-b border-gruvbox-bgSoft relative z-10 select-none">
          <div className="flex items-center gap-2 px-3">
            <div className="w-3 h-3 rounded-full bg-gruvbox-red hover:brightness-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-gruvbox-yellow hover:brightness-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-gruvbox-green hover:brightness-110 cursor-pointer" />
          </div>
          <div className="flex-1 text-center text-gruvbox-gray">
            {activeFileData?.name} - itsmejayanthan.me
          </div>
          <div className="px-3" />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden relative z-10">

          {/* Activity Bar - VS Code Style */}
          {!isMobile && (
            <div className="w-12 bg-gruvbox-bgHard flex flex-col items-center py-2 border-r border-gruvbox-bgSoft">
              {activityBarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeActivity === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveActivity(item.id);
                      if (item.id === 'explorer') setIsTreeOpen(true);
                    }}
                    className={`w-12 h-12 flex items-center justify-center cursor-pointer relative group transition-colors ${
                      isActive ? 'text-gruvbox-fg' : 'text-gruvbox-gray hover:text-gruvbox-fg'
                    }`}
                    title={item.label}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gruvbox-blue" />
                    )}
                    <Icon size={24} />
                    {/* Tooltip */}
                    <div className="absolute left-14 bg-gruvbox-bgHard text-gruvbox-fg px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-gruvbox-bgSoft z-50">
                      {item.label}
                    </div>
                  </button>
                );
              })}
              <div className="flex-1" />
              <button
                className="w-12 h-12 flex items-center justify-center cursor-pointer text-gruvbox-gray hover:text-gruvbox-fg transition-colors"
                title="Account"
              >
                <User size={24} />
              </button>
              <button
                className="w-12 h-12 flex items-center justify-center cursor-pointer text-gruvbox-gray hover:text-gruvbox-fg transition-colors"
                title="Settings"
              >
                <Settings size={24} />
              </button>
            </div>
          )}

          {/* Mobile Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsTreeOpen(!isTreeOpen)}
              className="absolute top-4 right-4 z-50 p-2 bg-gruvbox-bgSoft rounded-md border border-gruvbox-gray text-gruvbox-fg"
            >
              <Menu size={20} />
            </button>
          )}

          {/* Sidebar / Explorer - VS Code Style */}
          <AnimatePresence>
            {(isTreeOpen || !isMobile) && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: isTreeOpen ? 240 : 0, opacity: isTreeOpen ? 1 : 0 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`
                  ${isMobile ? 'absolute inset-y-0 left-0 z-40 shadow-2xl' : 'relative'} 
                  bg-gruvbox-bgHard border-r border-gruvbox-bgSoft overflow-hidden
                `}
              >
                <div className="w-60 h-full flex flex-col">
                  {/* Explorer Header */}
                  <div className="px-4 py-2 text-[11px] text-gruvbox-gray uppercase tracking-wider font-semibold">
                    Explorer
                  </div>
                  
                  {/* Project Section */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Portfolio Folder */}
                    <button
                      onClick={() => setIsExplorerExpanded(!isExplorerExpanded)}
                      className="flex items-center w-full px-2 py-1 hover:bg-gruvbox-bgSoft cursor-pointer text-[13px] font-semibold text-gruvbox-fg"
                    >
                      {isExplorerExpanded ? (
                        <ChevronDown size={16} className="mr-1 text-gruvbox-gray" />
                      ) : (
                        <ChevronRight size={16} className="mr-1 text-gruvbox-gray" />
                      )}
                      <span className="uppercase text-[11px] tracking-wider">portfolio</span>
                    </button>

                    {isExplorerExpanded && (
                      <div className="ml-4">
                        {/* src folder */}
                        <div className="flex items-center px-2 py-1 text-[13px] text-gruvbox-gray">
                          <ChevronDown size={14} className="mr-1" />
                          <Folder size={14} className="mr-2 text-gruvbox-yellow" />
                          <span>src</span>
                        </div>
                        
                        {/* Files */}
                        <div className="ml-5">
                          {files.map(file => {
                            const FileIcon = file.icon;
                            const isActive = activeFile === file.id;
                            return (
                              <button
                                key={file.id}
                                onClick={() => handleFileSelect(file.id)}
                                className={`flex items-center w-full px-2 py-0.5 text-[13px] cursor-pointer transition-colors ${
                                  isActive 
                                    ? 'bg-gruvbox-bgSoft text-gruvbox-fg' 
                                    : 'text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg'
                                }`}
                              >
                                <FileIcon size={14} className={`mr-2 ${file.color}`} />
                                <span>{file.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay for mobile sidebar */}
          {isMobile && isTreeOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-30"
              onClick={() => setIsTreeOpen(false)}
            />
          )}

          {/* Editor Area */}
          <div className="flex-1 flex flex-col bg-gruvbox-bg overflow-hidden">
            {/* Tab Bar - VS Code Style */}
            <div className="flex bg-gruvbox-bgHard border-b border-gruvbox-bgSoft overflow-x-auto scrollbar-hide">
              {openTabs.map(tabId => {
                const file = files.find(f => f.id === tabId);
                if (!file) return null;
                const FileIcon = file.icon;
                const isActive = activeFile === tabId;
                return (
                  <button
                    key={tabId}
                    onClick={() => setActiveFile(tabId)}
                    className={`group flex items-center gap-2 px-3 py-2 text-[13px] border-r border-gruvbox-bgSoft cursor-pointer transition-colors min-w-fit ${
                      isActive 
                        ? 'bg-gruvbox-bg text-gruvbox-fg border-t-2 border-t-gruvbox-blue -mt-[2px]' 
                        : 'text-gruvbox-gray hover:bg-gruvbox-bgSoft'
                    }`}
                  >
                    <FileIcon size={14} className={file.color} />
                    <span>{file.name}</span>
                    <div
                      onClick={(e) => handleCloseTab(e, tabId)}
                      className={`p-0.5 rounded hover:bg-gruvbox-bgHard transition-colors ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <X size={14} className="text-gruvbox-gray hover:text-gruvbox-fg" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Breadcrumbs */}
            <div className="px-4 py-1 text-[12px] text-gruvbox-gray bg-gruvbox-bg border-b border-gruvbox-bgSoft flex items-center gap-1">
              <span className="hover:text-gruvbox-fg cursor-pointer">portfolio</span>
              <ChevronRight size={14} />
              <span className="hover:text-gruvbox-fg cursor-pointer">src</span>
              <ChevronRight size={14} />
              <span className="text-gruvbox-fg">{activeFileData?.name}</span>
            </div>

            {/* Editor Content */}
            <main className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <PageTransition key={activeFile}>
                  {renderContent()}
                </PageTransition>
              </AnimatePresence>
            </main>
          </div>
        </div>

        {/* Status Bar - VS Code Style */}
        <div className="bg-[#1f1f1f] h-6 text-[12px] flex justify-between items-center select-none relative z-10 border-t border-[#2d2d2d]">
          <div className="flex items-center h-full">
            <div className="px-2 h-full flex items-center bg-[#2d2d2d] hover:bg-[#3d3d3d] cursor-pointer text-[#cccccc]">
              <GitBranch size={14} className="mr-1" />
              <span className="hidden sm:inline">main</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer text-[#cccccc]">
              <span>0 ⚠️</span>
              <span className="ml-2">0 ✕</span>
            </div>
          </div>

          <div className="flex items-center h-full text-[#cccccc]">
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer">
              <span>Ln 1, Col 1</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer hidden sm:flex">
              <span>Spaces: 2</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer hidden sm:flex">
              <span>UTF-8</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer hidden md:flex">
              <span>{activeFileData?.name.split('.').pop()?.toUpperCase()}</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-[#3d3d3d] cursor-pointer">
              <span>🔔</span>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
