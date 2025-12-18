import React from 'react';
import { motion } from 'framer-motion';
import SEO from './components/SEO';

const CodeRow = ({ line, content, delay }) => {
    return (
        <motion.div
            className="flex hover:bg-gruvbox-bgSoft group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
        >
            <div className="hidden md:block w-12 text-right pr-4 text-gruvbox-gray select-none group-hover:text-gruvbox-fg transition-colors">
                {line}
            </div>
            <div className="flex-1 font-mono whitespace-pre-wrap break-words">
                {content}
            </div>
        </motion.div>
    );
};

const Syntax = ({ color, children }) => (
    <span style={{ color }}>{children}</span>
);

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const aboutData = [
        {
            line: 1,
            content: (
                <span>
                    <Syntax color="#b16286">const</Syntax> <Syntax color="#d79921">developer</Syntax> <Syntax color="#928374">=</Syntax> <span className="text-gruvbox-fg">{`{`}</span>
                </span>
            )
        },
        {
            line: 2,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">name</Syntax><Syntax color="#928374">:</Syntax> <Syntax color="#98971a">"Jayanthan Senthilkumar"</Syntax>,
                </span>
            )
        },
        {
            line: 3,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">role</Syntax><Syntax color="#928374">:</Syntax> <Syntax color="#98971a">"Full Stack Developer"</Syntax>,
                </span>
            )
        },
        {
            line: 4,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">education</Syntax><Syntax color="#928374">:</Syntax> <Syntax color="#98971a">"B.Tech AIML @ M.Kumarasamy College of Engineering"</Syntax>,
                </span>
            )
        },
        {
            line: 5,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">location</Syntax><Syntax color="#928374">:</Syntax> <Syntax color="#98971a">"Karur, India"</Syntax>,
                </span>
            )
        }, {
            line: 6,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">bio</Syntax><Syntax color="#928374">:</Syntax> <Syntax color="#98971a">
                        "Full Stack Developer focused on building reliable, scalable web applications with real-world impact.
                    </Syntax>
                </span>
            )
        },
        {
            line: 7,
            content: (
                <span className="pl-8 text-gruvbox-green">
                    Experienced in React, Tailwind CSS, Firebase CRUD, and Node.js through academic and industry projects.
                </span>
            )
        },
        {
            line: 8,
            content: (
                <span className="pl-8 text-gruvbox-green">
                    Contributed to production systems like KRConnect, working on discipline management and grievance workflows.
                </span>
            )
        },
        {
            line: 9,
            content: (
                <span className="pl-8 text-gruvbox-green">
                    Driven by clean code, practical problem-solving, and continuous learning through hands-on development."
                </span>
            )
        },
        {
            line: 10,
            content: <span className="text-gruvbox-fg">{`};`}</span>
        },

        { line: 11, content: <br /> },
        {
            line: 12,
            content: (
                <span>
                    <Syntax color="#b16286">const</Syntax> <Syntax color="#d79921">skills</Syntax> <Syntax color="#928374">=</Syntax> <span className="text-gruvbox-fg">{`{`}</span>
                </span>
            )
        },
        {
            line: 13,
            content: <span className="pl-4 text-gruvbox-gray">// Core Languages</span>
        },
        {
            line: 14,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">languages</Syntax><Syntax color="#928374">:</Syntax> <span className="text-gruvbox-fg">[</span>
                    <Syntax color="#98971a">"Python"</Syntax>, <Syntax color="#98971a">"JavaScript"</Syntax>
                    <span className="text-gruvbox-fg">]</span>,
                </span>
            )
        },
        { line: 15, content: <br /> },
        {
            line: 16,
            content: <span className="pl-4 text-gruvbox-gray">// Frontend Stack</span>
        },
        {
            line: 17,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">frontend</Syntax><Syntax color="#928374">:</Syntax> <span className="text-gruvbox-fg">[</span>
                </span>
            )
        },
        {
            line: 18,
            content: <span className="pl-8"><Syntax color="#98971a">"HTML5"</Syntax>, <Syntax color="#98971a">"Core CSS"</Syntax>,</span>
        },
        {
            line: 19,
            content: <span className="pl-8"><Syntax color="#98971a">"Laravel"</Syntax>, <Syntax color="#98971a">"TailwindCSS"</Syntax></span>
        },
        {
            line: 20,
            content: <span className="pl-4 text-gruvbox-fg">],</span>
        },
        { line: 21, content: <br /> },
        {
            line: 22,
            content: <span className="pl-4 text-gruvbox-gray">// Backend Stack</span>
        },
        {
            line: 23,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">backend</Syntax><Syntax color="#928374">:</Syntax> <span className="text-gruvbox-fg">[</span>
                    <Syntax color="#98971a">"PHP"</Syntax>, <Syntax color="#98971a">"Flask"</Syntax>, <Syntax color="#98971a">"Node.js"</Syntax>
                    <span className="text-gruvbox-fg">]</span>,
                </span>
            )
        },
        { line: 24, content: <br /> },
        {
            line: 25,
            content: <span className="pl-4 text-gruvbox-gray">// Dev Tools</span>
        },
        {
            line: 26,
            content: (
                <span className="pl-4">
                    <Syntax color="#458588">tools</Syntax><Syntax color="#928374">:</Syntax> <span className="text-gruvbox-fg">[</span>
                    <Syntax color="#98971a">"GitHub"</Syntax>, <Syntax color="#98971a">"Git"</Syntax>, <Syntax color="#98971a">"VS Code"</Syntax>, <Syntax color="#98971a">"REST API"</Syntax>, <Syntax color="#98971a">"MySQL"</Syntax>
                    <span className="text-gruvbox-fg">]</span>
                </span>
            )
        },
        {
            line: 27,
            content: <span className="text-gruvbox-fg">{`};`}</span>
        },
        { line: 28, content: <br /> },
        {
            line: 29,
            content: (
                <span>
                    <Syntax color="#b16286">export</Syntax> <Syntax color="#b16286">default</Syntax> <span className="text-gruvbox-fg">{`{`}</span> <Syntax color="#458588">developer</Syntax>, <Syntax color="#458588">skills</Syntax> <span className="text-gruvbox-fg">{`};`}</span>
                </span>
            )
        }
    ];

    return (
        <>
            <SEO
                title="About | Jayanthan Senthilkumar - Full Stack Developer"
                description="Learn more about Jayanthan Senthilkumar, a Full Stack Developer specializing in React.js, Node.js, and modern web technologies. Based in Chennai, India."
                keywords="Jayanthan Senthilkumar, About, Full Stack Developer, React, Node.js, JavaScript, Skills, Education"
                url="https://itsjayanthan.me/#about"
            />
            <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base">
                <motion.div
                    className="w-full pt-4 pb-20 px-4 md:px-0"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {aboutData.map((item, index) => (
                        <CodeRow
                            key={index}
                            line={item.line}
                            content={item.content}
                            delay={index * 0.05}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default About;
