
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeEditorProps {
  className?: string;
}

const CodeEditor = ({ className }: CodeEditorProps) => {
  const [code, setCode] = useState(`// Hi, I'm Jayanthan 👋
function aboutMe() {
  const techStack = ["React", "Node.js", "MongoDB", "Express"];
  const tools = ["Git", "Docker", "Firebase"];
  const experience = {
    years: 3,
    focus: "Full-Stack Web Development"
  };

  return {
    name: "Jayanthan Senthilkumar",
    title: "Full-Stack Developer",
    lookingFor: "Challenging remote-friendly roles",
    email: "jayanthan.dev@example.com"
  };
}

// Building scalable apps & solving real-world problems 🚀
const currentProject = {
  name: "GreenGrocery",
  stack: ["React", "Express", "MongoDB"],
  role: "Lead Developer",
  status: "In Development"
};

aboutMe();`);

  return (
    <div className={cn("rounded-lg overflow-hidden shadow-xl hidden md:block", className)}>
      {/* Editor Header */}
      <div className="bg-[#282c34] p-3 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-gray-400 text-sm font-mono">
          portfolio.js
        </div>
      </div>
      
      {/* Editor Content */}
      <div className="bg-[#1e1e1e] p-4 font-mono text-sm relative">
        <div className="absolute left-0 top-0 h-full px-2 py-4 text-right bg-[#282c34] text-gray-500 select-none">
          {code.split('\n').map((_, i) => (
            <div key={i} className="leading-relaxed">{i + 1}</div>
          ))}
        </div>
        <pre className="pl-12 text-gray-300 leading-relaxed">
          <code>{code.split('\n').map((line, i) => {
            // Simple syntax highlighting
            let coloredLine = line
              .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>') // Comments
              .replace(/(".*?")/g, '<span class="text-yellow-300">$1</span>')
              .replace(/\b(function|const|let|var|return|if|else|for|while)\b/g, '<span class="text-pink-400">$1</span>')
              .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-pink-deep">$1</span>');
              
            return (
              <div key={i} dangerouslySetInnerHTML={{ __html: coloredLine }} />
            );
          })}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
