import React, { useState, useEffect } from 'react';
import { Hash, FileCode, Cpu, FileText, Terminal, Download, X, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import SEO from './components/SEO';
import CodeLineNumbers from './CodeLineNumbers';

const Home = ({ navigateToFile }) => {
    const [text, setText] = useState('');
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const fullText = 'Jayanthan Senthilkumar';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    // Confetti effect handler
    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Show for 5 seconds
    };

    // Trigger confetti when modals open
    useEffect(() => {
        if (showResumeModal || showProfileModal) {
            triggerConfetti();
        }
    }, [showResumeModal, showProfileModal]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <SEO
                title="Jayanthan Senthilkumar | Portfolio - Developer & Quick Learner"
                description="Welcome to Jayanthan Senthilkumar's portfolio. Developer and Quick Learner specializing in Web Development with expertise in React, JavaScript, and modern web technologies."
                keywords="Jayanthan Senthilkumar, Portfolio, Developer, Web Development, React, JavaScript, Full Stack Developer"
                url="https://itsjayanthan.me/"
            />
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                    gravity={0.3}
                    colors={['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b', '#8ec07c']}
                    style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
                />
            )}
            <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base">
                <div className="hidden md:block">
                    <CodeLineNumbers lines={32} />
                </div>
                <motion.div
                    className="flex-1 p-4 md:p-8 text-gruvbox-fg"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                        <motion.div
                            onClick={() => setShowProfileModal(true)}
                            className="w-32 h-32 rounded-full bg-gruvbox-bgSoft border-2 border-gruvbox-blue flex items-center justify-center overflow-hidden cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, borderColor: '#fabd2f' }}
                        >
                            <picture className="w-full h-full block">
                                <source srcSet="/assets/jayanthan.jpg" sizes="(max-width: 600px) 100vw, 400px" type="image/webp" />
                                <img
                                    src="/assets/jayanthan.jpg"
                                    alt="Jayanthan Senthilkumar"
                                    width={400}
                                    height={400}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                            </picture>
                        </motion.div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-gruvbox-yellow mb-2 flex justify-center md:justify-start items-center min-h-[60px]">
                                <span>{text}</span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                    className="inline-block w-3 h-8 md:h-12 bg-gruvbox-yellow ml-1"
                                />
                            </h1>
                            <motion.p className="text-xl text-gruvbox-blue mb-4" variants={itemVariants}>
                                Developer • Quick Learner
                            </motion.p>
                        </div>
                    </div>

                    {/* ASCII Art Banner */}
                    <motion.div className="hidden md:block text-xs text-gruvbox-gray whitespace-pre mb-12" variants={itemVariants}>
                        {`
 __        __   _                            ____             _      _        __  __        __        __         _     _    ____                       _ _ _ 
 \\ \\      / /__| | ___ ___  _ __ ___   ___  | __ )  __ _  ___| | __ | |_ ___  |  \\/  |_   _  \\ \\      / /__  _ __| | __| |  / ___|_   _ _   _ ___   | | | |
  \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ |  _ \\ / _\` |/ __| |/ / | __/ _ \\ | |\\/| | | | |  \\ \\ /\\ / / _ \\| '__| |/ _\` | | |  _| | | | | | / __|  | | | |
   \\ V  V /  __/ | (_| (_) | | | | | |  __/ | |_) | (_| | (__|   <  | || (_) || |  | | |_| |   \\ V  V / (_) | |  | | (_| | | |_| | |_| | |_| \\__ \\  |_|_|_|
    \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___| |____/ \\__,_|\\___|_|\\_\\  \\__\\___/ |_|  |_|\\__, |    \\_/\\_/ \\___/|_|  |_|\\__,_|  \\____|\\__,_|\\__, |___/  (_|_|_)
                                                                                      |___/                                            |___/               
`}
                    </motion.div>

                    {/* Quick Access */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-gruvbox-bgSoft p-6 rounded-lg border border-gruvbox-bgHard"
                            variants={itemVariants}
                        >
                            <h2 className="text-xl font-bold text-gruvbox-orange mb-4 flex items-center gap-2">
                                <Hash size={20} /> Quick Access
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button
                                    onClick={() => setShowResumeModal(true)}
                                    className="flex items-center gap-3 p-3 cursor-pointer bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                                >
                                    <Download className="text-gruvbox-purple group-hover:text-gruvbox-fg" size={20} />
                                    <div>
                                        <span className="block text-gruvbox-fg">My Resume</span>
                                        <span className="text-xs text-gruvbox-gray">View &amp; Download</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => navigateToFile('about')}
                                    className="flex items-center gap-3 p-3 cursor-pointer bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                                >
                                    <FileCode className="text-gruvbox-blue group-hover:text-gruvbox-fg" size={20} />
                                    <div>
                                        <span className="block text-gruvbox-fg">Edit init.lua</span>
                                        <span className="text-xs text-gruvbox-gray">View Bio &amp; Skills</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => navigateToFile('projects')}
                                    className="flex items-center gap-3 p-3 cursor-pointer bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                                >
                                    <Cpu className="text-gruvbox-yellow group-hover:text-gruvbox-fg" size={20} />
                                    <div>
                                        <span className="block text-gruvbox-fg">Run projects.rs</span>
                                        <span className="text-xs text-gruvbox-gray">View Work</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => navigateToFile('contact')}
                                    className="flex items-center gap-3 p-3 cursor-pointer bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                                >
                                    <Terminal className="text-gruvbox-green group-hover:text-gruvbox-fg" size={20} />
                                    <div>
                                        <span className="block text-gruvbox-fg">Exec deploy.sh</span>
                                        <span className="text-xs text-gruvbox-gray">Contact Me</span>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                        {/* Certifications */}
                        <motion.div
                            className="bg-gruvbox-bgSoft p-6 rounded-lg border border-gruvbox-bgHard"
                            variants={itemVariants}
                        >
                            <h2 className="text-xl font-bold text-gruvbox-aqua mb-4 flex items-center gap-2">
                                <FileText size={20} /> Certifications & Achievements
                            </h2>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-gruvbox-green">✓</span>
                                    <span>
                                        <strong>NPTEL</strong> – Python for Data Science, The Joy of Computing using Python,
                                        HR Analytics, Industry 4.0 & Internet of Things
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gruvbox-green">✓</span>
                                    <span>
                                        <strong>GitHub Foundations</strong>
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gruvbox-green">✓</span>
                                    <span>
                                        <strong>Student of the Month</strong> –
                                        Technical Leadership & Performance
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gruvbox-green">✓</span>
                                    <span>
                                        <strong>Finalist</strong> – PECHACKS 2.0 Hackathon
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gruvbox-green">✓</span>
                                    <span>
                                        <strong> Guest Lecturer</strong> – Git vs GitHub Workshop (PEC Chennai)
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </motion.div>
            </div>

            {/* Resume Modal */}
            <AnimatePresence>
                {showResumeModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowResumeModal(false)}
                            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-4xl h-[90vh] bg-gruvbox-bgHard border-2 border-gruvbox-blue rounded-lg shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gruvbox-bgSoft bg-gruvbox-bgHard">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-gruvbox-purple" size={20} />
                                    <div>
                                        <h2 className="text-base font-bold text-gruvbox-fg">Resume Preview</h2>
                                        <p className="text-xs text-gruvbox-gray">Jayanthan Senthilkumar</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowResumeModal(false)}
                                    className="p-2 hover:bg-gruvbox-bgSoft rounded transition-colors text-gruvbox-gray hover:text-gruvbox-fg"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* PDF Viewer */}
                            <div className="flex-1 overflow-hidden bg-gruvbox-bg p-4">
                                <iframe
                                    src="/resume.pdf"
                                    className="w-full h-full rounded border border-gruvbox-bgSoft"
                                    title="Resume Preview"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center justify-end gap-3 p-4 border-t border-gruvbox-bgSoft bg-gruvbox-bgHard">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gruvbox-bgSoft hover:bg-gruvbox-bg text-gruvbox-fg rounded transition-colors text-sm border border-gruvbox-bgSoft"
                                >
                                    <ExternalLink size={16} />
                                    Open in New Tab
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download="Jayanthan_Senthilkumar_Resume.pdf"
                                    onClick={triggerConfetti}
                                    className="flex items-center gap-2 px-4 py-2 bg-gruvbox-blue text-white rounded hover:bg-gruvbox-blue/80 transition-colors text-sm"
                                >
                                    <Download size={16} />
                                    Download PDF
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Profile Picture Modal */}
            <AnimatePresence>
                {showProfileModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowProfileModal(false)}
                            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, type: "spring" }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-6xl h-[90vh] bg-gruvbox-bgHard border-2 border-gruvbox-blue rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
                        >
                            {/* Left Sidebar - Action Buttons */}
                            <div className="w-full md:w-72 bg-gruvbox-bg border-b md:border-b-0 md:border-r border-gruvbox-bgSoft p-4 md:p-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                                <div className="mb-2">
                                    <h3 className="text-base md:text-lg font-bold text-gruvbox-yellow mb-1">Jayanthan Senthilkumar</h3>
                                    <p className="text-xs md:text-sm text-gruvbox-blue mb-2 md:mb-3">Developer • Quick Learner</p>
                                    
                                    <div className="text-[11px] md:text-xs text-gruvbox-fg leading-relaxed space-y-2">
                                        <p className="text-gruvbox-gray">
                                            Passionate Full-Stack Developer specializing in building modern web applications with React, TypeScript, and Node.js.
                                        </p>
                                        <div className="flex flex-wrap gap-1 pt-1 md:pt-2">
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-blue rounded text-[9px] md:text-[10px]">React</span>
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-orange rounded text-[9px] md:text-[10px]">TypeScript</span>
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-green rounded text-[9px] md:text-[10px]">Node.js</span>
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-purple rounded text-[9px] md:text-[10px]">Python</span>
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-aqua rounded text-[9px] md:text-[10px]">MongoDB</span>
                                            <span className="px-2 py-0.5 bg-gruvbox-bgSoft text-gruvbox-yellow rounded text-[9px] md:text-[10px]">Tailwind</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gruvbox-bgSoft pt-3 md:pt-4">
                                    <p className="text-[10px] md:text-[11px] text-gruvbox-gray uppercase tracking-wider mb-2 md:mb-3">Quick Links</p>

                                    <button
                                    onClick={() => {
                                        setShowProfileModal(false);
                                        setShowResumeModal(true);
                                    }}
                                    className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gruvbox-bgSoft hover:bg-gruvbox-bgHard transition-colors rounded group"
                                >
                                    <FileText className="text-gruvbox-purple group-hover:text-gruvbox-fg flex-shrink-0" size={18} />
                                    <div className="text-left flex-1 min-w-0">
                                        <span className="block text-gruvbox-fg text-xs md:text-sm font-semibold">View Resume</span>
                                        <span className="text-[10px] md:text-xs text-gruvbox-gray">Download PDF</span>
                                    </div>
                                    <ExternalLink size={12} className="text-gruvbox-gray flex-shrink-0" />
                                </button>

                                <a
                                    href="https://github.com/jayanthansenthilkumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gruvbox-bgSoft hover:bg-gruvbox-bgHard transition-colors rounded group"
                                >
                                    <Github className="text-gruvbox-orange group-hover:text-gruvbox-fg flex-shrink-0" size={18} />
                                    <div className="text-left flex-1 min-w-0">
                                        <span className="block text-gruvbox-fg text-xs md:text-sm font-semibold">GitHub</span>
                                        <span className="text-[10px] md:text-xs text-gruvbox-gray">View repositories</span>
                                    </div>
                                    <ExternalLink size={12} className="text-gruvbox-gray flex-shrink-0" />
                                </a>

                                <a
                                    href="https://linkedin.com/in/jayanthan18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gruvbox-bgSoft hover:bg-gruvbox-bgHard transition-colors rounded group"
                                >
                                    <Linkedin className="text-gruvbox-blue group-hover:text-gruvbox-fg flex-shrink-0" size={18} />
                                    <div className="text-left flex-1 min-w-0">
                                        <span className="block text-gruvbox-fg text-xs md:text-sm font-semibold">LinkedIn</span>
                                        <span className="text-[10px] md:text-xs text-gruvbox-gray">Connect with me</span>
                                    </div>
                                    <ExternalLink size={12} className="text-gruvbox-gray flex-shrink-0" />
                                </a>

                                <a
                                    href="mailto:hii@itsmejayanthan.me"
                                    className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gruvbox-bgSoft hover:bg-gruvbox-bgHard transition-colors rounded group"
                                >
                                    <Mail className="text-gruvbox-green group-hover:text-gruvbox-fg flex-shrink-0" size={18} />
                                    <div className="text-left flex-1 min-w-0">
                                        <span className="block text-gruvbox-fg text-xs md:text-sm font-semibold">Email Me</span>
                                        <span className="text-[10px] md:text-xs text-gruvbox-gray">Get in touch</span>
                                    </div>
                                    <ExternalLink size={12} className="text-gruvbox-gray flex-shrink-0" />
                                </a>

                                <div className="hidden md:block flex-1" />

                                <div className="text-[10px] md:text-xs text-gruvbox-gray text-center pt-3 md:pt-4 border-t border-gruvbox-bgSoft">
                                    <p className="mb-1">📧 hii@itsmejayanthan.me</p>
                                    <p className="text-[10px]">Click outside to close</p>
                                </div>
                                </div>
                            </div>

                            {/* Right Side - Large Image */}
                            <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-gruvbox-bgSoft hover:bg-gruvbox-bg rounded-full transition-colors text-gruvbox-gray hover:text-gruvbox-fg z-10"
                                >
                                    <X size={20} />
                                </button>

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    className="w-full h-full flex items-center justify-center p-2"
                                >
                                    <img
                                        src="/assets/jayanthan.jpg"
                                        alt="Jayanthan Senthilkumar - Full View"
                                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl border-2 md:border-4 border-gruvbox-blue"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;
