import { Helmet } from "react-helmet-async";
import { Terminal, GitPullRequest, GitFork, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GithubIcon = ({ className = "w-5 h-5", ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M1 19c-1 1-3 1-3 1" />
  </svg>
);

export default function OpenSourcePage() {
  const contributions = [
    {
      repo: "prithika/machine-learning-toolkit",
      description: "A collection of utility scripts and algorithms for preprocessing data and training standard models quickly.",
      stars: 12,
      forks: 3,
      language: "Python",
      type: "Maintainer"
    },
    {
      repo: "open-source/data-analyzer",
      description: "Contributed to optimizing the SQL querying engine and improving the data visualization components.",
      stars: 345,
      forks: 89,
      language: "TypeScript",
      type: "Contributor"
    },
    {
      repo: "prithika/portfolio-v1",
      description: "My open-source portfolio template built with React, Vite, and Tailwind CSS. Feel free to fork and use it!",
      stars: 5,
      forks: 1,
      language: "React",
      type: "Maintainer"
    }
  ];

  const stats = [
    { label: "Repositories", value: "24+" },
    { label: "Contributions", value: "150+" },
    { label: "Pull Requests", value: "30+" },
    { label: "Followers", value: "45" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
        <meta name="description" content="Explore Prithika Kannan's open source contributions, GitHub repositories, and community involvement." />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>prithika/open-source</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Building in the open.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              I believe in the power of open-source software. Contributing to the community helps me learn, share knowledge, and build better software together.
            </p>

            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-md font-mono text-sm hover:bg-gray-800 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              Follow me on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-serif mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 font-serif italic">Highlighted Repositories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributions.map((repo, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white border border-gray-200 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <GithubIcon className="w-5 h-5" />
                    <a href="#" className="font-mono text-sm font-bold hover:underline">
                      {repo.repo}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-gray-100 text-gray-600 px-2 py-1 rounded-sm border border-gray-200">
                    {repo.type}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 font-mono flex-grow mb-6">
                  {repo.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
                      <Star className="w-3.5 h-3.5" /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
                      <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                    </div>
                  </div>
                </div>

                {/* Hover overlay link icon */}
                <a href="#" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-blue-600">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
}
