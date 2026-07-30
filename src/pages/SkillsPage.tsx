import { Helmet } from "react-helmet-async";
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  BrainCircuit, 
  BarChart, 
  Braces,
  Laptop
} from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
      skills: [
        { name: "Scikit-Learn", level: 85 },
        { name: "Pandas & NumPy", level: 90 },
        { name: "TensorFlow / PyTorch", level: 75 },
        { name: "NLP (NLTK, SpaCy)", level: 80 },
        { name: "Data Visualization (Matplotlib, Seaborn)", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Flask & Django", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "PHP", level: 80 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-5 h-5 text-orange-500" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 70 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      skills: [
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux / Bash", level: 85 }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Technical Skills | Prithika Kannan</title>
        <meta name="description" content="Detailed overview of Prithika Kannan's technical skills across Machine Learning, Backend, Frontend, and Tools." />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>prithika/skills</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Technical Arsenal
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed">
              A comprehensive breakdown of the tools, languages, and frameworks I use to build intelligent applications and scalable systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-50 border border-gray-100 rounded-sm">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-serif">{category.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-gray-700 font-mono">{skill.name}</span>
                        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
}
