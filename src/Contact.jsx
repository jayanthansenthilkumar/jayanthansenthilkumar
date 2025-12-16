import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from './components/SEO';
import { X, ChevronDown, Plus, Trash2, Split, MoreHorizontal } from 'lucide-react';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const Contact = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [history, setHistory] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 50);
        }
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [step, history]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = e.target.value;
            if (!value.trim()) return;

            if (step === 0) {
                setForm(prev => ({ ...prev, name: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Name', value }]);
                setStep(1);
            } else if (step === 1) {
                if (!validateEmail(value)) {
                    setHistory(prev => [...prev, { type: 'input', label: 'Email', value }, { type: 'error', value: 'Error: Invalid email format. Please try again.' }]);
                    e.target.value = '';
                    return;
                }
                setForm(prev => ({ ...prev, email: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Email', value }]);
                setStep(2);
            } else if (step === 2) {
                setForm(prev => ({ ...prev, message: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Message', value }]);
                setStep(3);
                handleSubmit();
            }
            e.target.value = '';
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setHistory(prev => [...prev, { type: 'output', value: 'Message sent successfully! I will get back to you soon.' }]);
        setIsSubmitting(false);
        setStep(4);
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <SEO
                title="Contact | Jayanthan - Get in Touch"
                description="Get in touch with Jayanthan. Connect via email, LinkedIn, GitHub, or phone. Available for web development opportunities and collaborations."
                keywords="Jayanthan, Contact, Email, LinkedIn, GitHub, Web Developer, Hire Developer"
                url="https://vigneshr.me/#contact"
            />
            <div className="flex flex-col h-full font-mono text-sm" onClick={() => inputRef.current?.focus()}>
                {/* Editor Area - Social Links */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-gruvbox-fg"
                    >
                        <p className="text-gruvbox-gray mb-4"># Contact Information</p>
                        <p className="text-gruvbox-gray mb-6"># Feel free to reach out through any of the following channels:</p>
                        
                        <div className="space-y-3">
                            <p className="flex flex-wrap items-center gap-2">
                                <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">github</span> <span className="text-gruvbox-fg">=</span>
                                <a href="https://github.com/Unknowns-007" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors">
                                    "https://github.com/Unknowns-007"
                                </a><span className="text-gruvbox-fg">;</span>
                            </p>
                            <p className="flex flex-wrap items-center gap-2">
                                <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">linkedin</span> <span className="text-gruvbox-fg">=</span>
                                <a href="https://www.linkedin.com/in/vignesh-r-7727582b7" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors">
                                    "https://linkedin.com/in/vignesh-r"
                                </a><span className="text-gruvbox-fg">;</span>
                            </p>
                            <p className="flex flex-wrap items-center gap-2">
                                <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">email</span> <span className="text-gruvbox-fg">=</span>
                                <a href="mailto:vignesh2262006@gmail.com" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors">
                                    "vignesh2262006@gmail.com"
                                </a><span className="text-gruvbox-fg">;</span>
                            </p>
                            <p className="flex flex-wrap items-center gap-2">
                                <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">phone</span> <span className="text-gruvbox-fg">=</span>
                                <a href="tel:+916382774587" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors">
                                    "+91 6382774587"
                                </a><span className="text-gruvbox-fg">;</span>
                            </p>
                            <p className="flex flex-wrap items-center gap-2">
                                <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">resume</span> <span className="text-gruvbox-fg">=</span>
                                <a href="/resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors">
                                    "Download Resume"
                                </a><span className="text-gruvbox-fg">;</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Terminal Panel - VS Code Style */}
                <motion.div 
                    className="border-t border-gruvbox-bgHard bg-gruvbox-bg"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between bg-gruvbox-bgSoft border-b border-gruvbox-bgHard px-2 py-1">
                        <div className="flex items-center gap-4">
                            <span className="text-gruvbox-gray text-xs uppercase tracking-wide">Problems</span>
                            <span className="text-gruvbox-gray text-xs uppercase tracking-wide">Output</span>
                            <span className="text-gruvbox-gray text-xs uppercase tracking-wide">Debug Console</span>
                            <span className="text-gruvbox-fg text-xs uppercase tracking-wide border-b-2 border-gruvbox-blue pb-1">Terminal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <Plus size={14} />
                            </button>
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <Split size={14} />
                            </button>
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <Trash2 size={14} />
                            </button>
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <MoreHorizontal size={14} />
                            </button>
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <ChevronDown size={14} />
                            </button>
                            <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg">
                                <X size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Terminal Dropdown */}
                    <div className="flex items-center gap-2 bg-gruvbox-bgSoft px-2 py-1 border-b border-gruvbox-bgHard">
                        <div className="flex items-center gap-1 bg-gruvbox-bgHard px-2 py-0.5 rounded text-xs">
                            <span className="text-gruvbox-fg">pwsh</span>
                            <ChevronDown size={12} className="text-gruvbox-gray" />
                        </div>
                        <span className="text-gruvbox-gray text-xs">contact-form</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="h-48 md:h-56 overflow-y-auto custom-scrollbar p-3 text-gruvbox-fg">
                        {/* Initial prompt */}
                        <div className="mb-2">
                            <span className="text-gruvbox-green">PS C:\portfolio&gt;</span>
                            <span className="text-gruvbox-yellow ml-2">./send-message.ps1</span>
                        </div>
                        <div className="text-gruvbox-aqua mb-3">
                            Initializing contact form...
                        </div>

                        {/* History */}
                        <div className="space-y-2">
                            {history.map((item, index) => (
                                <div key={index}>
                                    {item.type === 'input' ? (
                                        <div>
                                            <span className="text-gruvbox-gray">{item.label}:</span>
                                            <span className="text-gruvbox-fg ml-2">{item.value}</span>
                                        </div>
                                    ) : item.type === 'error' ? (
                                        <div className="text-gruvbox-red">
                                            ✗ {item.value}
                                        </div>
                                    ) : (
                                        <div className="text-gruvbox-green">
                                            ✓ {item.value}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Current Input */}
                            {step < 3 && (
                                <div className="flex items-center">
                                    <span className="text-gruvbox-yellow">
                                        {step === 0 ? 'Enter your name' : step === 1 ? 'Enter your email' : 'Enter your message'}:
                                    </span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="bg-transparent border-none outline-none text-gruvbox-fg ml-2 flex-1 caret-gruvbox-fg"
                                        autoComplete="off"
                                        onKeyDown={handleKeyDown}
                                    />
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="w-2 h-4 bg-gruvbox-fg"
                                    />
                                </div>
                            )}

                            {/* Submitting State */}
                            {isSubmitting && (
                                <div className="text-gruvbox-orange flex items-center gap-2">
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        ⟳
                                    </motion.span>
                                    Sending message...
                                </div>
                            )}

                            {/* Completion State */}
                            {step === 4 && !isSubmitting && (
                                <div className="mt-2">
                                    <span className="text-gruvbox-green">PS C:\portfolio&gt;</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="w-2 h-4 bg-gruvbox-fg ml-2 inline-block"
                                    />
                                </div>
                            )}

                            <div ref={bottomRef} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Contact;
