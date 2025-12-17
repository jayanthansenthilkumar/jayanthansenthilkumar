import React from 'react';
import CodeLineNumbers from './CodeLineNumbers';
import { motion } from 'framer-motion';
import SEO from './components/SEO';

const Experience = () => {
    const experiences = [
        {
            company: "Technology Innovation Hub",
            role: "Software Developer Trainee",
            period: "April 2024 - July 2025",
            status: "INFO",
            achievements: [
                "Developed client site 'adsof.in' and managed the company's website.",
                "Collaborated with the design team to implement responsive UI components using React and Tailwind CSS.",
                "Integrated third-party analytics tools to track user engagement and conversion rates."
            ]
        },
        {
            company: "TEK Pyramid",
            role: "Web Developer Intern",
            period: "Feb 2025 - Apr 2025",
            status: "WARN",
            achievements: [
                "Developed a music application using React for the frontend and Firebase for the backend.",
                "Assisted in debugging and resolving cross-browser compatibility issues for legacy applications.",
                "Participated in code reviews and implemented best practices for state management."
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <>
            <SEO
                title="Experience | Vignesh R - Web Developer"
                description="Professional experience of Vignesh R as a Web Developer Intern at Spark Tech and TEK Pyramid. Specialized in React, Firebase, and responsive web development."
                keywords="Vignesh R, Experience, Web Developer, Internship, Spark Tech, TEK Pyramid, React, Firebase"
                url="https://vigneshr.me/#experience"
            />
            <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base">
                <CodeLineNumbers lines={45} />
                <motion.div
                    className="p-4 pt-6 md:pt-8 pb-20 text-gruvbox-fg w-full font-mono"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} className="mb-8" variants={item}>
                            <div className="mb-2">
                                <span className="text-gruvbox-gray">[{new Date().toISOString().split('T')[0]} 10:00:{String(index * 15).padStart(2, '0')}] </span>
                                <span className={`${exp.status === 'INFO' ? 'text-gruvbox-blue' :
                                    exp.status === 'WARN' ? 'text-gruvbox-yellow' : 'text-gruvbox-green'
                                    } font-bold`}>
                                    [{exp.status}]
                                </span>
                                <span className="text-gruvbox-fg"> Process started: </span>
                                <span className="text-gruvbox-purple font-bold">{exp.company}</span>
                            </div>

                            <div className="pl-4 border-l-2 border-gruvbox-bgSoft ml-2">
                                <div className="mb-1">
                                    <span className="text-gruvbox-gray">Role: </span>
                                    <span className="text-gruvbox-aqua">{exp.role}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-gruvbox-gray">Duration: </span>
                                    <span className="text-gruvbox-orange">{exp.period}</span>
                                </div>
                                <ul className="list-none space-y-1">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gruvbox-fg/80 flex items-start">
                                            <span className="text-gruvbox-gray mr-2">-</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div className="mt-4" variants={item}>
                        <span className="text-gruvbox-gray">[{new Date().toISOString().split('T')[0]} 10:45:00] </span>
                        <span className="text-gruvbox-red font-bold">[CRITICAL]</span>
                        <span className="text-gruvbox-fg"> Waiting for next challenge...</span>
                        <span className="animate-pulse">_</span>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Experience;
