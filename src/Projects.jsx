import React, { useState, useEffect } from 'react';
import CodeLineNumbers from './CodeLineNumbers';
import { ExternalLink, Github, CheckCircle, Loader, Folder, Star, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';

const Projects = () => {
    const [showToast, setShowToast] = useState(true);
    const [isBuilding, setIsBuilding] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBuilding(false);
            setTimeout(() => setShowToast(false), 3000);
        }, 800); // Simulate build time
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            name: "SupriAI – AI Learning Recommendation System",
            tech: ["Flask", "Python-ML", "SQLite", "JavaScript"],
            desc: "Increased recommendation relevance by 40% by building an AI-driven learning analytics platform using Flask and Python ML, while reducing system latency by 60% through optimized data pipelines.",
            link: "#",
            github: "https://github.com/supriyaasrinivasan/SupriAI",
            stars: 148,
            forks: 42,
            likes: 210
        },
        {
            name: "Cargo Fleet Management System",
            tech: ["Laravel", "IoT", "Python-ML", "Arduino"],
            desc: "Improved fleet utilization by 55% by designing an IoT-based management system using Laravel and ML-driven load prediction, reducing logistics delays by 35% through real-time tracking.",
            link: "#",
            github: "#",
            stars: 96,
            forks: 28,
            likes: 130
        },
        {
            name: "KR Connect – Smart College ERP",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "Ajax", "jQuery", "MySQL"],
            desc: "Reduced issue resolution time by 50% by developing discipline and grievance modules using PHP, Ajax, and MySQL, improving system efficiency by 45% with real-time dashboards.",
            link: "#",
            github: "https://github.com/supriyaasrinivasan/GrievanceMKCE",
            stars: 121,
            forks: 35,
            likes: 175
        },
        {
            name: "Nilaa – AI Interview Platform",
            tech: ["PHP", "MySQL"],
            desc: "Improved backend data consistency by 40% by developing structured academic modules using PHP and MySQL, reducing manual errors by 30% through standardized workflows.",
            link: "#",
            github: "https://github.com/jayanthansenthilkumar/Nilaa",
            stars: 87,
            forks: 19,
            likes: 112
        },
        {
            name: "SmartPai – Smart Cloud",
            tech: ["PHP"],
            desc: "Enhanced backend scalability by 45% by building a modular cloud-based application using PHP, improving data processing reliability by 35%.",
            link: "#",
            github: "https://github.com/jayanthansenthilkumar/SmartPai",
            stars: 74,
            forks: 16,
            likes: 98
        },
        {
            name: "ClubConnect – Club Management System",
            tech: ["Java"],
            desc: "Improved club operation efficiency by 50% by developing a Java-based management system using object-oriented design, reducing manual coordination efforts by 40%.",
            link: "#",
            github: "https://github.com/jayanthansenthilkumar/ClubConnect",
            stars: 163,
            forks: 51,
            likes: 240
        }
    ];



    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <SEO
                title="Projects | Vignesh R - Portfolio"
                description="Explore projects by Vignesh R including IDE Portfolio, Harmony Hub, Sparfest Portal, and more. Built with React, Firebase, and modern web technologies."
                keywords="Vignesh R, Projects, Portfolio, React Projects, Web Development, IDE Portfolio, Harmony Hub"
                url="https://vigneshr.me/#projects"
            />
            <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base relative">
                <CodeLineNumbers lines={45} />

                {/* Build Toast */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="fixed bottom-10 right-10 z-50 bg-gruvbox-bgHard border border-gruvbox-gray p-3 rounded shadow-lg flex items-center gap-3"
                        >
                            {isBuilding ? (
                                <>
                                    <Loader className="animate-spin text-gruvbox-yellow" size={18} />
                                    <span className="text-gruvbox-fg">Compiling projects.rs...</span>
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="text-gruvbox-green" size={18} />
                                    <span className="text-gruvbox-fg">Build Succeeded (0.8s)</span>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="p-4 pt-6 md:pt-8 pb-20 text-gruvbox-fg w-full grid grid-cols-1 md:grid-cols-2 gap-6 content-start"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-gruvbox-bgSoft border border-gruvbox-bgHard rounded-lg p-5 hover:border-gruvbox-gray transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <Folder className="text-gruvbox-blue" size={20} />
                                    <h3 className="text-xl font-bold text-gruvbox-yellow group-hover:text-gruvbox-orange transition-colors">
                                        {project.name}
                                    </h3>
                                </div>
                                <div className="flex gap-3 text-gruvbox-gray">
                                    <a href={project.github} className="hover:text-gruvbox-fg transition-colors"><Github size={18} /></a>
                                    <a href={project.link} className="hover:text-gruvbox-fg transition-colors"><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <p className="text-gruvbox-fg mb-4 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-gruvbox-bg text-gruvbox-aqua border border-gruvbox-bgHard">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gruvbox-gray mt-auto pt-4 border-t border-gruvbox-bgHard">
                                <div className="flex items-center gap-1">
                                    <Star size={12} />
                                    <span>{project.stars}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitBranch size={12} />
                                    <span>{project.forks}</span>
                                </div>
                                <div className="ml-auto text-gruvbox-purple">
                                    Updated recently
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Projects;
