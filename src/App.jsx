import React, { useState, useEffect } from 'react';
import { Folder, FileCode, Hash, Cpu, FileText, Terminal, X, Menu, GitBranch } from 'lucide-react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
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
    { id: 'contact', name: 'contact.sh', icon: Terminal, color: 'text-gruvbox-green' },
  ];

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

        <CommandPalette onNavigate={setActiveFile} />

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

        {/* Top Buffer Line */}
        <div className="flex bg-gruvbox-bgHard text-sm overflow-x-auto scrollbar-hide border-b border-gruvbox-bgSoft relative z-10">
          <div className="flex items-center px-4 py-2 bg-gruvbox-bgSoft text-gruvbox-fg font-bold min-w-fit border-r border-gruvbox-bg">
            <span className="mr-2">VSCode</span>
          </div>
          <AnimatePresence initial={false}>
            {files.map(file => (
              <motion.button
                key={file.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setActiveFile(file.id)}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-4 py-2 min-w-fit border-r border-gruvbox-bgSoft hover:bg-gruvbox-bgSoft transition-colors relative ${activeFile === file.id ? 'bg-gruvbox-bg text-gruvbox-fg' : 'text-gruvbox-gray'
                  }`}
              >
                {activeFile === file.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gruvbox-bg border-t-2 border-gruvbox-blue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <file.icon size={14} className={`mr-2 ${file.color}`} />
                  <span>{file.name}</span>
                  {activeFile === file.id && <X size={12} className="ml-2 text-gruvbox-gray hover:text-gruvbox-red" />}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden relative z-10">

          {/* Mobile Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsTreeOpen(!isTreeOpen)}
              className="absolute top-4 right-4 z-50 p-2 bg-gruvbox-bgSoft rounded-md border border-gruvbox-gray text-gruvbox-fg"
            >
              <Menu size={20} />
            </button>
          )}

          {/* Sidebar (NvimTree) */}
          <AnimatePresence>
            {(isTreeOpen || !isMobile) && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: isTreeOpen ? 256 : 0, opacity: isTreeOpen ? 1 : 0 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`
              ${isMobile ? 'absolute inset-y-0 left-0 z-40 shadow-2xl' : 'relative'} 
              bg-gruvbox-bgHard border-r border-gruvbox-bgSoft overflow-hidden whitespace-nowrap
            `}
              >
                <div className="p-4 text-sm w-64">
                  <div className="flex items-center mb-4 text-gruvbox-blue font-bold">
                    <Folder size={16} className="mr-2" />
                    <span>portfolio</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    {files.map(file => (
                      <button
                        key={file.id}
                        onClick={() => {
                          setActiveFile(file.id);
                          if (isMobile) setIsTreeOpen(false);
                        }}
                        className={`flex items-center w-full text-left hover:text-gruvbox-fg transition-colors ${activeFile === file.id ? 'text-gruvbox-fg' : 'text-gruvbox-gray'
                          }`}
                      >
                        <file.icon size={14} className={`mr-2 ${file.color}`} />
                        <span>{file.name}</span>
                      </button>
                    ))}
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

          {/* Editor Content */}
          <main className="flex-1 flex flex-col bg-transparent overflow-hidden relative">
            {/* Breadcrumbs / File Path (Optional visual aid) */}
            <div className="px-4 py-1 text-xs text-gruvbox-gray bg-gruvbox-bg border-b border-gruvbox-bgSoft flex justify-between items-center">
              <span>portfolio &gt; src &gt; {activeFileData?.name}</span>
            </div>

            <AnimatePresence mode="wait">
              <PageTransition key={activeFile}>
                {renderContent()}
              </PageTransition>
            </AnimatePresence>
          </main>
        </div>

        {/* Status Line */}
        <div className="bg-gruvbox-bgSoft text-xs py-1 px-2 flex justify-between items-center border-t border-gruvbox-bgHard select-none relative z-10">
          <div className="flex items-center gap-4">
            <motion.div
              key={activeFile}
              initial={{ backgroundColor: '#928374' }}
              animate={{
                backgroundColor: activeFile === 'home' ? '#458588' :
                  activeFile === 'contact' ? '#98971a' : '#d65d0e'
              }}
              className="px-2 py-0.5 font-bold text-gruvbox-bgHard"
            >
              {activeFile === 'home' ? 'NORMAL' : 'INSERT'}
            </motion.div>
            <div className="flex items-center text-gruvbox-gray">
              <GitBranch size={12} className="mr-1" />
              <span className="hidden md:inline">main</span>
            </div>
            <span className="text-gruvbox-fg truncate max-w-[100px] md:max-w-none">{activeFileData?.name}</span>
          </div>

          <div className="flex items-center gap-4 text-gruvbox-gray">
            <span className="hidden md:inline">utf-8</span>
            <span className="hidden md:inline">react</span>
            <span className="hidden md:inline">100%</span>
            <span className="text-gruvbox-blue">Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
