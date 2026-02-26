import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import SEO from './components/SEO';
import { X, ChevronDown, Plus, Trash2, Split, MoreHorizontal, Download, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CodeLineNumbers from './CodeLineNumbers';

// EmailJS Configuration - Replace these with your actual IDs from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_88va89j';  // e.g., 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_fiizzos'; // e.g., 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = 'FMfTLaoYiQ5bY8_NF';   // e.g., 'xxxxxxxxxxxxxxx'

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
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

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
                const updatedForm = { ...form, message: value };
                setForm(updatedForm);
                setHistory(prev => [...prev, { type: 'input', label: 'Message', value }]);
                setStep(3);
                handleSubmit(updatedForm);
            }
            e.target.value = '';
        }
    };

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setHistory(prev => [...prev, { type: 'status', value: 'Connecting to SMTP server...' }]);

        try {
            // Prepare template parameters - must match EmailJS template variables exactly
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date().toLocaleString(),
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                setHistory(prev => [
                    ...prev.filter(item => item.type !== 'status'),
                    { type: 'success', value: 'Connection established!' },
                    { type: 'success', value: 'Email packet sent successfully!' },
                    { type: 'output', value: 'Message delivered to Jayanthan Senthilkumar' },
                    { type: 'output', value: 'Thank you for reaching out! I will get back to you soon.' }
                ]);
                
                // Trigger confetti celebration on successful form submission
                console.log('Triggering confetti!');
                setTimeout(() => {
                    setShowConfetti(true);
                    console.log('Confetti state set to true');
                }, 100);
                setTimeout(() => {
                    setShowConfetti(false);
                    console.log('Confetti state set to false');
                }, 6100);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setHistory(prev => [
                ...prev.filter(item => item.type !== 'status'),
                { type: 'error', value: `SMTP Error: ${error.text || 'Failed to send message'}` },
                { type: 'error', value: 'Please try again or contact directly via email.' }
            ]);
        } finally {
            setIsSubmitting(false);
            setStep(4);
        }
    };

    const resetForm = () => {
    setStep(0);
    setForm({ name: '', email: '', message: '' });
    setHistory([]);
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
            url="https://itsjayanthan.me/#contact"
        />
        
        {/* Confetti Effect - Spraying from both bottom corners */}
        {showConfetti && (
            <>
                <div style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    zIndex: 999999, 
                    pointerEvents: 'none',
                    overflow: 'visible'
                }}>
                    {/* Left bottom corner confetti */}
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={300}
                        gravity={0.2}
                        wind={0.03}
                        confettiSource={{
                            x: -50,
                            y: window.innerHeight - 100,
                            w: 100,
                            h: 100
                        }}
                        initialVelocityX={{ min: 10, max: 25 }}
                        initialVelocityY={{ min: -30, max: -20 }}
                        colors={['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b', '#8ec07c', '#fe8019', '#f9f5d7']}
                        tweenDuration={3000}
                    />
                    {/* Right bottom corner confetti */}
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={300}
                        gravity={0.2}
                        wind={-0.03}
                        confettiSource={{
                            x: window.innerWidth - 50,
                            y: window.innerHeight - 100,
                            w: 100,
                            h: 100
                        }}
                        initialVelocityX={{ min: -25, max: -10 }}
                        initialVelocityY={{ min: -30, max: -20 }}
                        colors={['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b', '#8ec07c', '#fe8019', '#f9f5d7']}
                        tweenDuration={3000}
                    />
                </div>
                {/* Visual indicator for debugging */}
                <div style={{ 
                    position: 'fixed', 
                    bottom: 0, 
                    left: 0, 
                    width: '100px', 
                    height: '100px', 
                    // backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    zIndex: 999998,
                    pointerEvents: 'none'
                }} />
                <div style={{ 
                    position: 'fixed', 
                    bottom: 0, 
                    right: 0, 
                    width: '100px', 
                    height: '100px', 
                    // backgroundColor: 'rgba(0, 255, 0, 0.3)',
                    zIndex: 999998,
                    pointerEvents: 'none'
                }} />
            </>
        )}
        
        <div className="flex flex-col h-full font-mono text-sm" onClick={() => inputRef.current?.focus()}>
            {/* Editor Area - Social Links */}
            <div className="flex-1 flex overflow-y-auto custom-scrollbar">
                <div className="hidden md:block pt-4">
                    <CodeLineNumbers lines={15} />
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-gruvbox-fg flex-1 pt-4 px-3 pr-4 md:pr-6 overflow-x-hidden"
                >
                    <div className="space-y-1 break-words">
                        <p className="text-gruvbox-gray"># Contact Information</p>
                        <p className="text-gruvbox-gray"># Feel free to reach out through any of the following channels:</p>
                        <p>&nbsp;</p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">medium</span> <span className="text-gruvbox-fg">=</span>
                            <a href="https://medium.com/@jayanthansenthilkumar" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors">
                                "@jayanthansenthilkumar"
                            </a><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">github</span> <span className="text-gruvbox-fg">=</span>
                            <a href="https://github.com/jayanthansenthilkumar" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors">
                                "jayanthansenthilkumar"
                            </a><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">linkedin</span> <span className="text-gruvbox-fg">=</span>
                            <a href="https://www.linkedin.com/in/jayanthan18" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors">
                                "jayanthan18"
                            </a><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">email</span> <span className="text-gruvbox-fg">=</span>
                            <a href="mailto:jayanthansenthilkumar18@gmail.com" className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors">
                                "jayanthansenthilkumar18@gmail.com"
                            </a><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">phone</span> <span className="text-gruvbox-fg">=</span>
                            <a href="tel:+918825756388" className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors">
                                "+91 8825756388"
                            </a><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-purple">const</span> <span className="text-gruvbox-yellow">resume</span> <span className="text-gruvbox-fg">=</span>
                            <button
                                onClick={() => setShowResumeModal(true)}
                                className="text-gruvbox-green hover:text-gruvbox-aqua transition-colors cursor-pointer"
                            >
                                "View My Resume"
                            </button><span className="text-gruvbox-fg">;</span>
                        </p>
                        <p>&nbsp;</p>
                        <p className="text-gruvbox-gray"># Use the terminal below to send me a message</p>
                        <p className="text-gruvbox-purple">export default <span className="text-gruvbox-yellow">contactInfo</span><span className="text-gruvbox-fg">;</span></p>
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
                    <div className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
                        <span className="text-gruvbox-gray text-xs uppercase tracking-wide hidden md:inline">Problems</span>
                        <span className="text-gruvbox-gray text-xs uppercase tracking-wide hidden md:inline">Output</span>
                        <span className="text-gruvbox-gray text-xs uppercase tracking-wide hidden md:inline">Debug Console</span>
                        <span className="text-gruvbox-fg text-xs uppercase tracking-wide border-b-2 border-gruvbox-blue pb-1 whitespace-nowrap">Terminal</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
                            <Plus size={14} />
                        </button>
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
                            <Split size={14} />
                        </button>
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
                            <Trash2 size={14} />
                        </button>
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
                            <MoreHorizontal size={14} />
                        </button>
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
                            <ChevronDown size={14} />
                        </button>
                        <button className="p-1 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg hidden md:block">
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
                    <span className="text-gruvbox-gray text-xs hidden sm:inline">contact-form</span>
                </div>

                {/* Terminal Content */}
                <div className="h-40 md:h-56 overflow-y-auto custom-scrollbar p-3 text-gruvbox-fg">
                    {/* Initial prompt */}
                    <div className="mb-2">
                        <span className="text-gruvbox-green">PS C:\portfolio&gt;</span>
                        <span className="text-gruvbox-yellow ml-2">./send-message.ps1</span>
                    </div>
                    <div className="text-gruvbox-aqua mb-3">
                        Initializing EmailJS SMTP connection...
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
                                ) : item.type === 'success' ? (
                                    <div className="text-gruvbox-green">
                                        ✓ {item.value}
                                    </div>
                                ) : item.type === 'status' ? (
                                    <div className="text-gruvbox-orange flex items-center gap-2">
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            ⟳
                                        </motion.span>
                                        {item.value}
                                    </div>
                                ) : (
                                    <div className="text-gruvbox-aqua">
                                        → {item.value}
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
                                Sending email via SMTP...
                            </div>
                        )}

                        {/* Completion State */}
                        {step === 4 && !isSubmitting && (
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-gruvbox-green">PS C:\portfolio&gt;</span>
                                    <button
                                        onClick={resetForm}
                                        className="text-gruvbox-yellow hover:text-gruvbox-orange transition-colors underline"
                                    >
                                        ./send-message.ps1
                                    </button>
                                    <span className="text-gruvbox-gray text-xs">(click to send another)</span>
                                </div>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-2 h-4 bg-gruvbox-fg inline-block"
                                />
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Resume Modal */}
        <AnimatePresence>
            {showResumeModal && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowResumeModal(false)}
                >
                    <motion.div
                        className="relative w-full max-w-4xl h-[85vh] bg-gruvbox-bg border border-gruvbox-bgHard rounded-lg shadow-2xl overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between bg-gruvbox-bgSoft px-3 md:px-4 py-2 md:py-3 border-b border-gruvbox-bgHard">
                            <div className="flex items-center gap-2 md:gap-3 min-w-0">
                                <span className="text-gruvbox-yellow font-mono text-sm truncate">resume.pdf</span>
                                <span className="text-gruvbox-gray text-xs hidden sm:inline">— Jayanthan</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gruvbox-bgHard hover:bg-gruvbox-bg text-gruvbox-fg text-xs rounded transition-colors"
                                >
                                    <ExternalLink size={14} />
                                    Open in New Tab
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download="Jayanthan_Senthilkumar_Resume.pdf"
                                    className="flex items-center gap-2 px-3 py-1.5 bg-gruvbox-blue hover:bg-gruvbox-aqua text-gruvbox-bg text-xs rounded transition-colors font-medium"
                                >
                                    <Download size={14} />
                                    Download
                                </a>
                                <button
                                    onClick={() => setShowResumeModal(false)}
                                    className="p-1.5 hover:bg-gruvbox-bgHard rounded text-gruvbox-gray hover:text-gruvbox-fg transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="h-[calc(85vh-56px)] bg-gruvbox-bgHard">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-full"
                                title="Resume - Jayanthan Senthilkumar"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
);
};

export default Contact;