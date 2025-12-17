import React, { useState } from 'react';
import CodeLineNumbers from './CodeLineNumbers';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';
import { 
    RiProjectorLine, RiBriefcaseLine, RiCalendarEventLine, 
    RiTeamLine, RiTrophyLine, RiMapPinLine, RiExternalLinkLine
} from '@remixicon/react';

const Journey = () => {
    const [activeTab, setActiveTab] = useState('events');

    const tabs = [
        { id: 'events', name: 'Events', icon: RiCalendarEventLine, count: 2 },
        { id: 'volunteering', name: 'Volunteering', icon: RiTeamLine, count: 2 },
        { id: 'achievements', name: 'Achievements', icon: RiTrophyLine, count: 4 },
    ];

    const journeyData = {
        events: [
            {
                title: "Trenz'25",
                subtitle: "Tech Fest",
                institution: "M. Kumarasamy College of Engineering",
                period: "April 2025",
                // description: "Presented on modern React patterns and performance optimization techniques.",
                tags: ["Organizer", "TechFest"],
                image: "🎤"
            },
            {
                title: "Orlia'25",
                subtitle: "Cultural Fest",
                institution: "M. Kumarasamy College of Engineering",
                period: "April 2025",
                // description: "Won first place in 24-hour hackathon with an AI-powered solution for healthcare.",
                tags: ["Fun", "Cultural", "Leadership"],
                image: "🏆"
            }
        ],
        volunteering: [
            {
                title: "Open Source Contributor",
                subtitle: "Various Projects",
                institution: "GitHub",
                period: "2023 - Present",
                description: "Contributing to open source projects including documentation, bug fixes, and feature development.",
                tags: ["Open Source", "Community", "Collaboration"],
                image: "🌍"
            },
            {
                title: "Tech Mentor",
                subtitle: "Code for Good",
                institution: "NGO Initiative",
                period: "2023 - Present",
                description: "Mentoring underprivileged students in programming and helping them build career skills.",
                tags: ["Mentoring", "Teaching", "Social Impact"],
                image: "🤝"
            }
        ],
        achievements: [
            {
                title: "Dean's List",
                subtitle: "Academic Excellence",
                institution: "University",
                period: "2022 - 2024",
                description: "Recognized for maintaining excellent academic performance throughout the program.",
                tags: ["Academic", "Excellence", "Recognition"],
                image: "🎖️"
            },
            {
                title: "Best Project Award",
                subtitle: "Final Year Project",
                institution: "University",
                period: "2024",
                description: "Awarded for developing an innovative AI-based solution for real-world problems.",
                tags: ["Project", "Innovation", "AI"],
                image: "🥇"
            },
            {
                title: "Coding Competition Winner",
                subtitle: "National Level",
                institution: "CodeChef",
                period: "2023",
                description: "Secured top position in national-level competitive programming contest.",
                tags: ["Competitive", "Programming", "National"],
                image: "🏅"
            }
        ]
    };

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

    const renderCard = (data, index) => (
        <motion.div
            key={index}
            variants={item}
            className="group relative bg-gruvbox-bgHard border border-gruvbox-bgSoft rounded-lg overflow-hidden hover:border-gruvbox-blue transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
        >
            {/* Card Header with Emoji/Image */}
            <div className="relative h-32 bg-gradient-to-br from-gruvbox-bg to-gruvbox-bgHard flex items-center justify-center overflow-hidden">
                <span className="text-6xl">{data.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-gruvbox-bgHard to-transparent" />
                {data.period && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-gruvbox-bg/80 rounded text-xs text-gruvbox-aqua border border-gruvbox-bgSoft">
                        {data.period}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-gruvbox-yellow font-bold text-lg mb-1 group-hover:text-gruvbox-orange transition-colors">
                    {data.title}
                </h3>
                <p className="text-gruvbox-aqua text-sm mb-2">{data.subtitle}</p>
                
                {data.institution && (
                    <div className="flex items-center gap-1 text-gruvbox-gray text-xs mb-2">
                        <RiMapPinLine size={12} />
                        <span>{data.institution}</span>
                        {data.location && <span>• {data.location}</span>}
                    </div>
                )}

                {data.grade && (
                    <div className="inline-block px-2 py-1 bg-gruvbox-green/20 text-gruvbox-green text-xs rounded mb-2">
                        {data.grade}
                    </div>
                )}

                <p className="text-gruvbox-fg text-sm mb-3 line-clamp-2">{data.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {data.tags?.slice(0, 4).map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-0.5 bg-gruvbox-bg text-gruvbox-purple text-xs rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link */}
                {data.link && (
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gruvbox-blue hover:text-gruvbox-aqua text-sm transition-colors"
                    >
                        <RiExternalLinkLine size={14} />
                        <span>View More</span>
                    </a>
                )}
            </div>

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gruvbox-blue via-gruvbox-purple to-gruvbox-aqua transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>
    );

    return (
        <>
            <SEO
                title="Journey Book | Jayanthan Senthilkumar - Developer Portfolio"
                description="Explore the journey of Jayanthan Senthilkumar through education, certifications, projects, skills, internships, events, and achievements."
                keywords="Jayanthan Senthilkumar, Journey, Education, Certifications, Projects, Skills, Portfolio, Developer"
                url="https://vigneshr.me/#journey"
            />
            <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base">
                <CodeLineNumbers lines={34} />
                <div className="flex-1">
                    <div className="p-4 md:p-6 pb-20">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-gruvbox-purple">class</span>
                                <span className="text-gruvbox-yellow">JourneyBook</span>
                                <span className="text-gruvbox-fg">{"{"}</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gruvbox-fg pl-4">
                                <span className="text-gruvbox-gray">// </span>
                                <span className="text-gruvbox-green">Look my Journey Book</span>
                            </h1>
                            {/* <p className="text-gruvbox-gray pl-4 mt-2 text-sm md:text-base">
                                Welcome to my portfolio showcase – a collection of experiences that represent my journey
                                in crafting digital solutions and solving real-world challenges.
                            </p> */}
                        </motion.div>

                        {/* Tab Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 overflow-x-auto custom-scrollbar pb-2"
                        >
                            <div className="flex gap-2 min-w-max">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-gruvbox-blue/20 border-gruvbox-blue text-gruvbox-blue'
                                                    : 'bg-gruvbox-bgHard border-gruvbox-bgSoft text-gruvbox-gray hover:border-gruvbox-fg hover:text-gruvbox-fg'
                                            }`}
                                        >
                                            <Icon size={16} />
                                            <span className="text-sm">{tab.name}</span>
                                            <span className={`px-1.5 py-0.5 rounded text-xs ${
                                                isActive ? 'bg-gruvbox-blue/30' : 'bg-gruvbox-bg'
                                            }`}>
                                                {tab.count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Content Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                variants={container}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {journeyData[activeTab]?.map((data, index) => renderCard(data, index))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-gruvbox-gray"
                        >
                            <span className="text-gruvbox-fg">{"}"}</span>
                            <span className="text-gruvbox-gray ml-2">// End of JourneyBook</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Journey;
