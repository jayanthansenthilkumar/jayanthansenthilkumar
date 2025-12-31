import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from '@/components/SocialLinks';
import SectionHeading from '@/components/SectionHeading';
import { useIsMobile } from '@/hooks/use-mobile';
import { TypeAnimation } from 'react-type-animation';
import ProjectCard, { Project } from '@/components/ProjectCard';

const featuredProjects: Project[] = [
	{
		id: 1,
		title: "Orlia'25 Website",
		description:
			'Complete event management website for the annual technical symposium featuring comprehensive event information, registration system, and interactive user experience.',
		image: 'images/fullstackorlia.jpg',
		tags: ['React', 'Node.js', 'MongoDB', 'Express'],
		featured: true,
	},
	{
		id: 2,
		title: 'Sowberry',
		description:
			'Modern full-stack web application with advanced user interface and robust backend architecture for enhanced user experience and scalability.',
		image: 'images/sowberry.jpg',
		tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
		featured: true,
	},
	{
		id: 3,
		title: 'Virtual Mouse',
		description:
			'AI-powered computer vision application that enables hands-free mouse control using gesture recognition and real-time motion tracking.',
		image: 'images/virtualmouse.png',
		tags: ['Python', 'OpenCV', 'MediaPipe'],
		featured: true,
	},
];

const skills = [
	'Python',
	'TensorFlow',
	'PyTorch',
	'Scikit-learn',
	'React',
	'TypeScript',
	'Node.js',
	'JavaScript',
	'HTML/CSS',
	'MongoDB',
	'PostgreSQL',
	'OpenCV',
	'Pandas',
	'NumPy',
	'FastAPI',
	'Express',
	'Tailwind CSS',
	'Git',
	'AWS',
	'Docker',
];

const Home = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/5 min-h-[calc(100vh-80px)] flex items-center pt-2 sm:pt-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-1 space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left">
              <p className="text-primary font-mono text-sm sm:text-base">Hello, my name is</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                <span className="block">Jayanthan</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-1 lg:mt-2">
                  Senthilkumar
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                <TypeAnimation
                  sequence={[
                    'I am a Full Stack Developer',
                    1000,
                    'I am a business analyst',
                    1000,
                    'I am a DevOps Engineer',
                    1000,
                    'I am a Founder of PrisolTech',
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: 'inline-block' }}
                  speed={50}
                />
              </h2>              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                I'm a passionate full-stack developer and AI/ML enthusiast specializing in creating intelligent digital solutions. 
                Currently, I'm focused on building scalable applications and implementing machine learning solutions that solve real-world problems.
              </p>
              
              {/* Enhanced Buttons with Effects */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden">
                  <Link to="/about">
                    <span className="relative z-10">About Me</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group border-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden">
                  <Link to="/contact">
                    <span className="relative z-10">Let's Talk</span>
                    <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-border/20 lg:border-t-0 lg:pt-8">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Connect with me</p>
                <SocialLinks className="justify-center lg:justify-start" />
              </div>
            </div>
              {/* Right Column - Interactive Code Editor */}
            <div className="order-2 hidden lg:block">
              <div className="relative">
                {/* Enhanced Floating code particles with hover effects */}
                <div className="absolute -inset-12 opacity-30">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-green-400/40 rounded-lg animate-bounce delay-100 hover:bg-green-400/60 transition-all duration-300 cursor-pointer group/particle">
                    <span className="text-sm text-green-400 font-mono flex items-center justify-center h-full group-hover/particle:scale-110 transition-transform">{`{}`}</span>
                  </div>
                  <div className="absolute bottom-8 left-4 w-8 h-8 bg-blue-400/40 rounded-lg animate-pulse delay-500 hover:bg-blue-400/60 transition-all duration-300 cursor-pointer group/particle">
                    <span className="text-sm text-blue-400 font-mono flex items-center justify-center h-full group-hover/particle:scale-110 transition-transform">&lt;/&gt;</span>
                  </div>
                  <div className="absolute top-16 left-8 w-6 h-6 bg-purple-400/40 rounded-lg animate-ping delay-300 hover:bg-purple-400/60 transition-all duration-300 cursor-pointer group/particle">
                    <span className="text-sm text-purple-400 font-mono flex items-center justify-center h-full group-hover/particle:scale-110 transition-transform">;</span>
                  </div>
                  <div className="absolute top-32 right-16 w-7 h-7 bg-yellow-400/40 rounded-lg animate-bounce delay-700 hover:bg-yellow-400/60 transition-all duration-300 cursor-pointer group/particle">
                    <span className="text-sm text-yellow-400 font-mono flex items-center justify-center h-full group-hover/particle:scale-110 transition-transform">( )</span>
                  </div>
                </div>
                
                {/* Interactive Code Editor Container */}
                <div className="relative bg-gray-900/95 dark:bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-700 group cursor-pointer">
                  {/* Enhanced Editor Header with interactive elements */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50 group-hover:bg-gray-800/90 transition-all duration-300">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 hover:scale-125 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-500/50" title="Close"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-125 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-yellow-500/50" title="Minimize"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 hover:scale-125 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-green-500/50" title="Maximize"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Jayanthan-Senthilkumar</span>
                      <div className="w-1 h-1 bg-orange-400 rounded-full" title="Unsaved changes"></div>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <div className="w-2 h-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors cursor-pointer" title="Split Editor"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors cursor-pointer" title="More Options"></div>
                    </div>
                  </div>                  
                  {/* Enhanced Line Numbers with hover effects */}
                  <div className="flex">
                    <div className="bg-gray-800/50 px-3 py-4 text-xs text-gray-500 font-mono select-none border-r border-gray-700/30 hover:bg-gray-800/70 transition-all duration-300">                      <div className="space-y-1">
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((num) => (
                          <div key={num} className="hover:text-gray-300 hover:bg-gray-700/30 px-1 rounded transition-all duration-200 cursor-pointer">{num}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Code Content with typing animation */}
                    <div className="flex-1 p-4 font-mono text-sm leading-relaxed hover:bg-gray-900/50 transition-all duration-300">
                      <div className="space-y-1">
                        <div className="group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-purple-400 hover:text-purple-300 transition-colors">const</span>
                          <span className="text-blue-300 hover:text-blue-200 transition-colors"> developer</span>
                          <span className="text-gray-300"> = {`{`}</span>
                        </div>                        <div className="pl-4 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-green-300 hover:text-green-200 transition-colors">name</span>
                          <span className="text-gray-300">: </span>
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"Jayanthan"</span>
                          <span className="text-gray-300">,</span>
                        </div>
                        <div className="pl-4 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-green-300 hover:text-green-200 transition-colors">skills</span>
                          <span className="text-gray-300">: [</span>
                        </div><div className="pl-8 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"PHP"</span>
                          <span className="text-gray-300">, </span>
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"Laravel"</span>
                          <span className="text-gray-300">,</span>
                        </div>
                        <div className="pl-8 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"MySQL"</span>
                          <span className="text-gray-300">, </span>
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"JavaScript"</span>
                          <span className="text-gray-300">,</span>
                        </div>
                        <div className="pl-8 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"Bootstrap"</span>
                          <span className="text-gray-300">, </span>
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"jQuery"</span>
                        </div>
                        <div className="pl-4 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-gray-300">],</span>
                        </div>                        <div className="pl-4 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-green-300 hover:text-green-200 transition-colors">passion</span>
                          <span className="text-gray-300">: </span>
                          <span className="text-orange-300 hover:text-orange-200 transition-colors">"Building Web Applications"</span>
                        </div>
                        <div className="group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-gray-300">{`};`}</span>
                        </div>
                        <div className="mt-3 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-blue-300 hover:text-blue-200 transition-colors">console</span>
                          <span className="text-gray-300">.</span>
                          <span className="text-yellow-300 hover:text-yellow-200 transition-colors">log</span>
                          <span className="text-gray-300">(developer);</span>
                        </div>
                        <div className="mt-2 group/line hover:bg-gray-800/30 px-2 py-0.5 rounded transition-all duration-200">
                          <span className="text-gray-500">// Ready to create something amazing! 🚀</span>
                        </div>
                      </div>
                        {/* Enhanced typing cursor with glow effect */}
                      <div className="inline-block w-2 h-5 bg-primary animate-pulse ml-1 mt-2 shadow-lg shadow-primary/50"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced integrated terminal section - split panel inside editor */}
                  <div className="border-t border-gray-700/50 bg-black/95 backdrop-blur-md">
                    {/* Terminal header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                        </div>
                        <span className="text-xs text-gray-400 font-mono">Terminal</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>bash</span>
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Terminal content */}
                    <div className="p-4 text-xs font-mono space-y-2 min-h-[120px]">
                      <div className="text-green-400 flex items-center group/cmd hover:text-green-300 transition-colors">
                        <span className="text-blue-300 mr-1">jayanthan@portfolio</span>
                        <span className="text-gray-300 mr-1">:</span>
                        <span className="text-purple-300 mr-1">~/projects</span>
                        <span className="text-gray-300 mr-1">$</span>
                        <TypeAnimation
                          sequence={[
                            'npm run dev',
                            2000,
                            'npm start',
                            2000,
                            'npm run build',
                            2000,
                            'git status',
                            2000,
                          ]}
                          wrapper="span"
                          cursor={true}
                          repeat={Infinity}
                          speed={70}
                          className="ml-1"
                        />
                      </div>
                        <div className="text-gray-300 mt-2">
                        <div className="flex items-center mt-1">
                          <span className="mr-2 text-blue-300 animate-pulse">🌐</span>
                          <span>Network: </span>
                          <a 
                            href="http://jayanthan.prisoltech.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors cursor-pointer"
                          >
                            http://jayanthan.prisoltech.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="text-cyan-300 mt-2">
                        <span className="text-gray-500">[</span>
                        <span className="animate-pulse">●</span>
                        <span className="text-gray-500">]</span>
                        <span className="ml-2">Watching for file changes...</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Status Bar with interactive elements */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-gray-700/30 text-xs hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300">
                    <div className="flex items-center space-x-4 text-gray-300">
                      <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>TypeScript</span>
                      </span>
                      <span className="hover:text-white transition-colors cursor-pointer" title="Encoding">UTF-8</span>
                      <span className="hover:text-white transition-colors cursor-pointer" title="Line Ending">LF</span>
                      <span className="hover:text-white transition-colors cursor-pointer" title="Indentation">Spaces: 2</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <span className="hover:text-white transition-colors cursor-pointer">Ln 14, Col 45</span>
                      <div className="flex items-center space-x-1 hover:scale-105 transition-transform cursor-pointer">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded animate-spin-slow"></div>
                        <span className="text-primary hover:text-primary/80 transition-colors">AI Copilot</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced VS Code style minimap with interactive elements */}
                <div className="absolute top-16 -right-3 w-4 h-40 bg-gray-800/80 rounded-r-lg border border-gray-700/50 overflow-hidden hover:w-5 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer group/minimap">
                  <div className="space-y-px p-px">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-sm transition-all duration-200 hover:brightness-150 cursor-pointer ${
                          i % 3 === 0 ? 'bg-blue-400/60 hover:bg-blue-400/80' : 
                          i % 4 === 0 ? 'bg-green-400/60 hover:bg-green-400/80' : 
                          i % 5 === 0 ? 'bg-purple-400/60 hover:bg-purple-400/80' : 
                          i % 7 === 0 ? 'bg-orange-400/60 hover:bg-orange-400/80' : 'bg-gray-600/40 hover:bg-gray-600/60'
                        } group-hover/minimap:shadow-sm`}
                        style={{ width: `${Math.random() * 10 + 6}px` }}
                        title={`Line ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-primary/60 rounded-sm border border-primary/80 group-hover/minimap:h-8 transition-all duration-300" title="Current viewport"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* About Me Preview */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="About Me" 
            subtitle="Passionate AI/ML student creating intelligent solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">                <p className="text-sm sm:text-base text-justify leading-relaxed mb-4">
                  I'm a final year B.Tech student specializing in Artificial Intelligence & Machine Learning with a passion for 
                  developing intelligent systems and creating full-stack applications. Combining technical expertise in AI/ML 
                  with strong full-stack development skills, I love building applications that leverage cutting-edge technology 
                  to solve real-world problems and deliver exceptional user experiences.
                </p>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base text-justify leading-relaxed">
                  My journey into technology began during my early university years when I discovered the fascinating intersection of data, 
                  algorithms, and web development. I've gained hands-on experience with various AI/ML frameworks, modern web technologies,
                  and cloud platforms, working on projects ranging from computer vision applications to full-stack web solutions.
                </p>
              </div>
              
              {/* Key Highlights with Glass Effects */}
              <div className="grid grid-cols-2 gap-4 mb-6">                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-lg p-4 text-center hover:bg-white/30 dark:hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Full-Stack Projects</div>
                </div>
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-lg p-4 text-center hover:bg-white/30 dark:hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="text-2xl font-bold text-secondary">B.Tech</div>
                  <div className="text-sm text-muted-foreground">AI & ML Final Year</div>
                </div>
              </div>
              
              {/* Skills Section with Glass Effects */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-light/30 to-primary/30 dark:from-pink-deep/20 dark:to-primary/20 backdrop-blur-md border border-pink-light/40 dark:border-pink-deep/30 rounded-full text-xs sm:text-sm font-medium text-pink-deep dark:text-pink hover:from-pink-light/40 hover:to-primary/40 dark:hover:from-pink-deep/30 dark:hover:to-primary/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    +{skills.length - 8} more
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="group border-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300">
                  <Link to="/about">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">More About Me</span>
                  </Link>
                </Button>
                <Button asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300">
                  <a href="/Resume/jayanthan.pdf" download>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Download Resume</span>
                  </a>
                </Button>
              </div>
            </div>            <div className="order-1 md:order-2">
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                {/* Enhanced outer glow effect */}
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-pink-light/30 via-primary/30 to-secondary/30 dark:from-pink-deep/20 dark:via-primary/20 dark:to-secondary/20 blur-xl animate-pulse"></div>
                
                {/* Image container with enhanced effects */}
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-pink-light dark:border-pink-deep/30 group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-pink-deep/20">
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  
                  <img 
                    src="images/jayanthan.jpg" 
                    alt="Jayanthan Senthilkumar - AI/ML Student" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                {/* Professional Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-navy-light shadow-lg rounded-full px-4 py-2 border border-primary/20">
                  <p className="text-xs font-semibold text-primary">AI/ML Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div className="mt-12 lg:mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/resume">
                View All Projects{' '}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="My Skills & Interests"
            subtitle="Areas I'm passionate about and actively learning"
            align="center"
            className="mx-auto max-w-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Skill 1 */}
            <div className="bg-white dark:bg-navy-light p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-navy text-center hover:shadow-xl transition-all">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-primary/20 rounded-lg mb-4 sm:mb-6">
                <Code size={24} className="text-primary sm:w-7 sm:h-7" />
              </div>              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Full Stack Development
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Building end-to-end web applications using modern technologies like React, Node.js, Python, and cloud services to create scalable and intelligent user experiences.
              </p>
            </div>

            {/* Skill 2 */}            <div className="bg-white dark:bg-navy-light p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-navy text-center hover:shadow-xl transition-all">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-primary/20 rounded-lg mb-4 sm:mb-6">
                <Brain size={24} className="text-primary sm:w-7 sm:h-7" />
              </div><h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                AI/ML Engineering
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Developing intelligent systems using machine learning frameworks like TensorFlow, PyTorch, and scikit-learn to build predictive models and data-driven solutions.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="bg-white dark:bg-navy-light p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-navy text-center hover:shadow-xl transition-all">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-primary/20 rounded-lg mb-4 sm:mb-6">
                <MessageSquare size={24} className="text-primary sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                DevOps & Cloud
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Learning deployment strategies, CI/CD pipelines, and cloud technologies to streamline development workflows and ensure reliable software delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-tr from-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="From My Blog" 
            subtitle="Recent articles and thoughts"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(images/aitools.webp)` }}></div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">June 15, 2025</div>
                <h2 className="text-lg sm:text-xl font-bold mb-3 text-navy-dark dark:text-white">Essential AI Tools for Machine Learning Practitioners</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
                  Explore the most powerful AI and ML frameworks, libraries, and tools that every machine learning engineer should master in 2025 to build more efficient and accurate models.
                </p>
                <Button variant="ghost" className="group text-pink-deep hover:text-pink hover:bg-pink-light/10 p-0 transform hover:scale-105 transition-all duration-300">
                  <a href="https://medium.com/@jayanthansenthilkumar/essential-ai-tools-for-machine-learning-practitioners-8773b00cd4c1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(images/blog3.png)` }}></div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">March 1, 2025</div>
                <h2 className="text-lg sm:text-xl font-bold mb-3 text-navy-dark dark:text-white">Self-Confidence</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
                  Discover how building self-confidence impacts your learning journey and professional growth in the tech field, with practical strategies to overcome imposter syndrome.
                </p>
                <Button variant="ghost" className="group text-pink-deep hover:text-pink hover:bg-pink-light/10 p-0 transform hover:scale-105 transition-all duration-300">
                  <a href="https://medium.com/@jayanthansenthilkumar/self-confidence-the-strength-that-fuels-my-journey-d8d66fd63a3a" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(images/blog1.png)` }}></div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">October 25, 2024</div>
                <h2 className="text-lg sm:text-xl font-bold mb-3 text-navy-dark dark:text-white">I Won't Give Up</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
                  My journey through the challenges of complex machine learning algorithms and how persistence led to breakthroughs when facing seemingly impossible neural network optimization problems.
                </p>
                <Button variant="ghost" className="group text-pink-deep hover:text-pink hover:bg-pink-light/10 p-0 transform hover:scale-105 transition-all duration-300">
                  <a href="https://medium.com/@jayanthansenthilkumar/i-wont-give-up-17b4ade8fc3e" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300">
              <a href="https://medium.com/@jayanthansenthilkumar" target="_blank" rel="noopener noreferrer">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Read All Articles</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lg mb-4 sm:mb-6">Let's connect and grow together!</h2>
          <p className="text-lg sm:text-xl text-lg/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            As a final year student passionate about technology, I'm eager to learn, contribute, and start my career journey. Looking for internship and entry-level opportunities.
          </p>
          <Button asChild size="lg" className="group bg-purple-deep hover:bg-navy text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <Link to="/contact">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Get In Touch</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
