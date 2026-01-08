import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Folder, FileCode, Hash, Cpu, FileText, Terminal, X, Menu, GitBranch, BookOpen, Search, Settings, ChevronRight, ChevronDown, Files, GitFork, Blocks, User, Bell, GitCommit, Clock, RefreshCw, Palette, Monitor, Moon, Sun, ExternalLink, LogOut, Check } from 'lucide-react';
import Confetti from 'react-confetti';
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
import StructuredData from './components/StructuredData';
import SupriAI from './components/SupriAI';
import CustomCursor from './components/CustomCursor';
import useVimNavigation from './hooks/useVimNavigation';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [activeFile, setActiveFile] = useState('home');
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeActivity, setActiveActivity] = useState('explorer');
  const [isExplorerExpanded, setIsExplorerExpanded] = useState(true);
  const [openTabs, setOpenTabs] = useState(['home']);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage on initial render
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'github-dark';
    }
    return 'github-dark';
  });

  const { showToast } = useVimNavigation(setActiveFile);

  // Close theme dropdown when settings menu closes
  useEffect(() => {
    if (!showSettingsMenu) {
      setShowThemeDropdown(false);
    }
  }, [showSettingsMenu]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Trigger confetti on initial page load
  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []); // Empty dependency array means this runs once on mount

  // Available themes with accent colors for status bar
  const themes = [
    { id: 'gruvbox', name: 'Gruvbox Dark', color: '#282828', accent: '#458588', statusBg: '#1d2021' },
    { id: 'dracula', name: 'Dracula', color: '#282a36', accent: '#bd93f9', statusBg: '#21222c' },
    { id: 'monokai', name: 'Monokai', color: '#272822', accent: '#66d9ef', statusBg: '#1e1f1a' },
    { id: 'nord', name: 'Nord', color: '#2e3440', accent: '#88c0d0', statusBg: '#242933' },
    { id: 'onedark', name: 'One Dark', color: '#282c34', accent: '#61afef', statusBg: '#21252b' },
    { id: 'github', name: 'GitHub Dark', color: '#0d1117', accent: '#238636', statusBg: '#010409' },
    { id: 'vscode-light', name: 'VS Code Light', color: '#ffffff', accent: '#005cc5', statusBg: '#f3f3f3' },
    { id: 'github-light', name: 'GitHub Light', color: '#ffffff', accent: '#0969da', statusBg: '#f6f8fa' },
  ];

  // Git commits data (simulated)
  const gitCommits = [
    { hash: 'a1b2c3d', message: 'feat: Add Journey Book page', author: 'Jayanthan', time: '2 hours ago', branch: 'main' },
    { hash: 'e4f5g6h', message: 'fix: Status bar styling update', author: 'Jayanthan', time: '3 hours ago', branch: 'main' },
    { hash: 'i7j8k9l', message: 'feat: VS Code style sidebar', author: 'Jayanthan', time: '5 hours ago', branch: 'main' },
    { hash: 'm0n1o2p', message: 'refactor: Activity bar icons', author: 'Jayanthan', time: '1 day ago', branch: 'main' },
    { hash: 'q3r4s5t', message: 'feat: Add Contact terminal', author: 'Jayanthan', time: '2 days ago', branch: 'main' },
    { hash: 'u6v7w8x', message: 'style: Gruvbox theme update', author: 'Jayanthan', time: '3 days ago', branch: 'main' },
    { hash: 'y9z0a1b', message: 'feat: Projects page carousel', author: 'Jayanthan', time: '4 days ago', branch: 'main' },
    { hash: 'c2d3e4f', message: 'init: Portfolio setup', author: 'Jayanthan', time: '1 week ago', branch: 'main' },
  ];

  // Search content data
  const searchableContent = [
    { file: 'README.md', id: 'home', content: 'Welcome Home Portfolio Developer Full Stack React JavaScript' },
    { file: 'about.lua', id: 'about', content: 'About Developer Skills Experience Education Background' },
    { file: 'projects.rs', id: 'projects', content: 'Projects Portfolio Applications Web Development GitHub' },
    { file: 'experience.log', id: 'experience', content: 'Experience Work Internship Company Role Developer' },
    // { file: 'journey.json', id: 'journey', content: 'Journey Events Volunteering Achievements Timeline' },
    { file: 'contact.sh', id: 'contact', content: 'Contact Email Message Form Terminal PowerShell' },
  ];

  // Filter search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContent.filter(item => 
      item.file.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get current theme data
  const currentTheme = useMemo(() => {
    return themes.find(t => t.id === theme) || themes[0];
  }, [theme]);

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
    // { id: 'journey', name: 'journey.json', icon: BookOpen, color: 'text-gruvbox-purple' },
    { id: 'contact', name: 'contact.sh', icon: Terminal, color: 'text-gruvbox-green' },
  ];

  const activityBarItems = [
    { id: 'explorer', icon: Files, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'source', icon: GitFork, label: 'Source Control' },
  ];

  // Handle file selection and tab management
  const handleFileSelect = (fileId) => {
    setActiveFile(fileId);
    if (!openTabs.includes(fileId)) {
      setOpenTabs([...openTabs, fileId]);
    }
    if (isMobile) setIsTreeOpen(false);
    
    // Trigger confetti on page navigation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
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
      // case 'journey': return <Journey />;
      case 'contact': return <Contact />;
      default: return <Home navigateToFile={setActiveFile} />;
    }
  };

  return (
    <HelmetProvider>
      <StructuredData />
      <div className="flex flex-col h-[100dvh] bg-gruvbox-bg text-gruvbox-fg font-mono overflow-hidden relative">
        <MatrixBackground />

        <CommandPalette onNavigate={handleFileSelect} />

        {/* Confetti Effect for Navigation */}
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={300}
            gravity={0.25}
            colors={['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b', '#8ec07c']}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
          />
        )}

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
            {activeFileData?.name} - itsjayanthan.me
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
                      setIsTreeOpen(true);
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
              
              {/* SupriAI Chat Component */}
              <SupriAI onNavigate={handleFileSelect} currentPage={activeFile} />

              <div className="relative">
                <button
                  onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                  className={`w-12 h-12 flex items-center justify-center cursor-pointer transition-colors ${showSettingsMenu ? 'text-gruvbox-fg' : 'text-gruvbox-gray hover:text-gruvbox-fg'}`}
                  title="Settings"
                >
                  <Settings size={24} className={showSettingsMenu ? 'animate-spin-slow' : ''} />
                </button>
                
                {/* Settings Dropdown */}
                <AnimatePresence>
                  {showSettingsMenu && (
                    <>
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setShowSettingsMenu(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-12 mb-2 w-64 bg-gruvbox-bgHard border border-gruvbox-bgSoft rounded-lg shadow-2xl z-50 overflow-hidden"
                      >
                        {/* Profile Section */}
                        <div className="p-3 border-b border-gruvbox-bgSoft">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gruvbox-blue to-gruvbox-purple flex items-center justify-center text-white font-bold">
                              J
                            </div>
                            <div>
                              <div className="text-[13px] text-gruvbox-fg font-semibold">Jayanthan Senthilkumar</div>
                              <div className="text-[11px] text-gruvbox-gray">hii@itsjayanthan.me</div>
                            </div>
                          </div>
                        </div>

                        {/* Theme Section */}
                        <div className="p-2 border-b border-gruvbox-bgSoft">
                          <button
                            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-[13px] text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg transition-colors"
                          >
                            <Palette size={14} />
                            <span className="flex-1 text-left">Color Theme</span>
                            {showThemeDropdown ? (
                              <ChevronDown size={14} />
                            ) : (
                              <ChevronRight size={14} />
                            )}
                          </button>
                          
                          {showThemeDropdown && (
                            <div className="mt-1 ml-6 space-y-0.5">
                              {themes.map((t) => (
                                <button
                                  key={t.id}
                                  onClick={() => setTheme(t.id)}
                                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-[13px] transition-colors ${
                                    theme === t.id 
                                      ? 'bg-gruvbox-bgSoft text-gruvbox-fg' 
                                      : 'text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg'
                                  }`}
                                >
                                  <div 
                                    className="w-3 h-3 rounded border border-gruvbox-bgSoft"
                                    style={{ backgroundColor: t.color }}
                                  />
                                  <span className="flex-1 text-left text-[12px]">{t.name}</span>
                                  {theme === t.id && <Check size={12} className="text-gruvbox-green" />}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Quick Actions */}
                        <div className="p-2">
                          <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-[13px] text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg transition-colors">
                            <Monitor size={14} />
                            <span>Keyboard Shortcuts</span>
                            <span className="ml-auto text-[11px] text-gruvbox-gray">Ctrl+K</span>
                          </button>
                          <a 
                            href="https://github.com/jayanthansenthilkumar" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-[13px] text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>GitHub Profile</span>
                          </a>
                          <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-[13px] text-gruvbox-gray hover:bg-gruvbox-bgSoft hover:text-gruvbox-fg transition-colors">
                            <Settings size={14} />
                            <span>Settings</span>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
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
                  
                  {/* Explorer View */}
                  {activeActivity === 'explorer' && (
                    <>
                      <div className="px-4 py-2 text-[11px] text-gruvbox-gray uppercase tracking-wider font-semibold">
                        Explorer
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <button
                          onClick={() => setIsNotExplorerExpanded(!isExplorerExpanded)}
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
                            <div className="flex items-center px-2 py-1 text-[13px] text-gruvbox-gray">
                              <ChevronDown size={14} className="mr-1" />
                              <Folder size={14} className="mr-2 text-gruvbox-yellow" />
                              <span>src</span>
                            </div>
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
                    </>
                  )}

                  {/* Search View */}
                  {activeActivity === 'search' && (
                    <>
                      <div className="px-4 py-2 text-[11px] text-gruvbox-gray uppercase tracking-wider font-semibold">
                        Search
                      </div>
                      <div className="px-2 pb-2">
                        <div className="relative">
                          <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-gruvbox-gray" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search files..."
                            className="w-full bg-gruvbox-bg border border-gruvbox-bgSoft rounded px-7 py-1.5 text-[13px] text-gruvbox-fg placeholder:text-gruvbox-gray focus:outline-none focus:border-gruvbox-blue"
                            autoFocus
                          />
                          {searchQuery && (
                            <button
                              onClick={() => setSearchQuery('')}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-gruvbox-gray hover:text-gruvbox-fg"
                            >
                              <X size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {searchQuery && searchResults.length === 0 && (
                          <div className="px-4 py-8 text-center text-gruvbox-gray text-[13px]">
                            No results found for "{searchQuery}"
                          </div>
                        )}
                        {searchResults.map((result, index) => {
                          const file = files.find(f => f.id === result.id);
                          const FileIcon = file?.icon || FileText;
                          return (
                            <button
                              key={index}
                              onClick={() => {
                                handleFileSelect(result.id);
                                setSearchQuery('');
                              }}
                              className="flex items-center w-full px-3 py-2 hover:bg-gruvbox-bgSoft cursor-pointer text-[13px] text-gruvbox-fg border-b border-gruvbox-bgSoft"
                            >
                              <FileIcon size={14} className={`mr-2 ${file?.color || 'text-gruvbox-gray'}`} />
                              <div className="text-left">
                                <div className="text-gruvbox-fg">{result.file}</div>
                                <div className="text-[11px] text-gruvbox-gray truncate max-w-[180px]">
                                  {result.content.split(' ').slice(0, 5).join(' ')}...
                                </div>
                              </div>
                            </button>
                          );
                        })}
                        {!searchQuery && (
                          <div className="px-4 py-8 text-center text-gruvbox-gray text-[13px]">
                            <Search size={32} className="mx-auto mb-2 opacity-50" />
                            <p>Type to search in files</p>
                            <p className="text-[11px] mt-1">Press Ctrl+K for command palette</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Source Control View */}
                  {activeActivity === 'source' && (
                    <>
                      <div className="px-4 py-2 text-[11px] text-gruvbox-gray uppercase tracking-wider font-semibold flex items-center justify-between">
                        <span>Source Control</span>
                        <button className="hover:text-gruvbox-fg transition-colors" title="Refresh">
                          <RefreshCw size={14} />
                        </button>
                      </div>
                      <div className="px-3 py-2 border-b border-gruvbox-bgSoft">
                        <div className="flex items-center gap-2 text-[13px] text-gruvbox-fg">
                          <GitBranch size={14} className="text-gruvbox-green" />
                          <span>main</span>
                          <span className="text-gruvbox-gray text-[11px]">• synced</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <div className="px-3 py-2 text-[11px] text-gruvbox-gray uppercase tracking-wider">
                          Commits ({gitCommits.length})
                        </div>
                        {gitCommits.map((commit, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 hover:bg-gruvbox-bgSoft cursor-pointer border-b border-gruvbox-bgSoft group"
                          >
                            <div className="flex items-start gap-2">
                              <GitCommit size={14} className="text-gruvbox-orange mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-[13px] text-gruvbox-fg truncate group-hover:text-gruvbox-yellow transition-colors">
                                  {commit.message}
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-[11px] text-gruvbox-gray">
                                  <span className="text-gruvbox-aqua font-mono">{commit.hash}</span>
                                  <span>•</span>
                                  <Clock size={10} />
                                  <span>{commit.time}</span>
                                </div>
                                <div className="text-[11px] text-gruvbox-gray mt-0.5">
                                  by {commit.author}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

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
        <div 
          className="h-6 text-[12px] flex justify-between items-center select-none relative z-10 border-t transition-colors duration-300"
          style={{ 
            backgroundColor: currentTheme.statusBg,
            borderColor: currentTheme.color 
          }}
        >
          <div className="flex items-center h-full">
            <div 
              className="px-2 h-full flex items-center cursor-pointer text-white transition-colors"
              style={{ backgroundColor: currentTheme.accent }}
            >
              <GitBranch size={14} className="mr-1" />
              <span className="hidden sm:inline">itsjayanthan.me</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer text-gruvbox-fg">
              <span>0 ⚠️</span>
              <span className="ml-2">0 ✕</span>
            </div>
          </div>

          <div className="flex items-center h-full text-gruvbox-fg">
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer">
              <span>Ln 1, Col 1</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer hidden sm:flex">
              <span>Spaces: 2</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer hidden sm:flex">
              <span>UTF-8</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer hidden md:flex">
              <span>{activeFileData?.name.split('.').pop()?.toUpperCase()}</span>
            </div>
            <div className="px-2 h-full flex items-center hover:bg-gruvbox-bgSoft cursor-pointer">
              <span>🔔</span>
            </div>
          </div>
        </div>
      </div>
      <CustomCursor />
    </HelmetProvider>
  );
}

export default App;
