import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Briefcase, Folder, Mail, BookOpen } from 'lucide-react';

const CommandPalette = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands = [
        {
            id: 'home',
            label: 'Go Home',
            icon: Home,
            action: () => onNavigate('home')
        },
        {
            id: 'about',
            label: 'Go to About',
            icon: User,
            action: () => onNavigate('about')
        },
        {
            id: 'experience',
            label: 'Go to Experience',
            icon: Briefcase,
            action: () => onNavigate('experience')
        },
        {
            id: 'projects',
            label: 'Go to Projects',
            icon: Folder,
            action: () => onNavigate('projects')
        },
        {
            id: 'journey',
            label: 'Go to Journey Book',
            icon: BookOpen,
            action: () => onNavigate('journey')
        },
        {
            id: 'contact',
            label: 'Go to Contact',
            icon: Mail,
            action: () => onNavigate('contact')
        },
        {
            id: 'email',
            label: 'Copy Email',
            icon: Mail,
            action: () => {
                navigator.clipboard.writeText('vignesh@example.com'); // Replace with actual email
                alert('Email copied to clipboard!');
            }
        },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const handleSelect = (command) => {
        command.action();
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-[#282828] border border-[#3c3836] rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-[#3c3836]">
                            <Search className="w-5 h-5 text-[#a89984] mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent text-[#ebdbb2] placeholder-[#7c6f64] focus:outline-none text-lg font-mono"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && filteredCommands.length > 0) {
                                        handleSelect(filteredCommands[selectedIndex]);
                                    }
                                    if (e.key === 'ArrowDown') {
                                        e.preventDefault();
                                        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
                                    }
                                    if (e.key === 'ArrowUp') {
                                        e.preventDefault();
                                        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                                    }
                                }}
                            />
                            <div className="hidden sm:flex items-center gap-1 text-xs text-[#7c6f64] font-mono border border-[#3c3836] rounded px-1.5 py-0.5">
                                <span>ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto py-2">
                            {filteredCommands.length === 0 ? (
                                <div className="px-4 py-8 text-center text-[#7c6f64] font-mono">
                                    No commands found.
                                </div>
                            ) : (
                                filteredCommands.map((cmd, index) => (
                                    <button
                                        key={cmd.id}
                                        onClick={() => handleSelect(cmd)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center px-4 py-3 text-left font-mono transition-colors ${index === selectedIndex ? 'bg-[#3c3836] text-[#ebdbb2]' : 'text-[#a89984] hover:bg-[#32302f]'
                                            }`}
                                    >
                                        <cmd.icon className={`w-5 h-5 mr-3 ${index === selectedIndex ? 'text-[#fabd2f]' : 'text-[#7c6f64]'}`} />
                                        <span className="flex-1">{cmd.label}</span>
                                        {index === selectedIndex && (
                                            <span className="text-xs text-[#7c6f64]">↵</span>
                                        )}
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="px-4 py-2 bg-[#32302f] border-t border-[#3c3836] flex justify-between items-center text-xs text-[#7c6f64] font-mono">
                            <div className="flex gap-3">
                                <span><strong className="text-[#a89984]">↑↓</strong> to navigate</span>
                                <span><strong className="text-[#a89984]">↵</strong> to select</span>
                            </div>
                            <span>NeoVim Portfolio</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
