
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Download, MessageSquare, CheckCircle, Trophy, Heart, BookOpen, Music, Globe, Hammer, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from '@/components/SocialLinks';

const About = () => {

  return (
    <Layout>      {/* Hero Section */}
      <section className="bg-transparent py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 leading-relaxed text-justify mx-auto max-w-3xl">
              I'm a final year B.Tech student specializing in Artificial Intelligence & Machine Learning with a passion for 
              developing intelligent systems and creating data-driven solutions. Combining technical expertise in AI/ML 
              with strong frontend development skills, I love building applications that leverage cutting-edge technology 
              to solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base py-1.5 sm:py-2" asChild>
                <a href="/Resume/jayanthan.pdf" download>
                  <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base py-1.5 sm:py-2">
                <Link to="/contact" className="flex items-center">
                  <MessageSquare className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>      {/* My Story Section */}
      <section className="py-12 sm:py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                {/* Enhanced gradient glow effect */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-xl bg-gradient-to-br from-pink-light/30 via-primary/25 to-secondary/30 dark:from-pink-deep/20 dark:via-primary/15 dark:to-secondary/20 blur-xl animate-pulse"></div>
                
                {/* Main image container with enhanced effects */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-pink-light dark:border-pink-deep/30 group hover:shadow-xl hover:shadow-pink-deep/20 transition-all duration-500">
                  {/* Animated shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Image with zoom effect */}
                  <img 
                    src="images/jayanthan.jpg" 
                    alt="Jayanthan Senthilkumar" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                  {/* Social links card with enhanced effects - repositioned for better usability */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 p-3 sm:p-4 bg-white/80 dark:bg-navy-light/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105 z-20">
                  <SocialLinks iconSize={18} animate={true} className="gap-3 sm:gap-5" />
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading title="My Story" />
                <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-justify leading-relaxed mb-6">
                  Hello! I'm Jayanthan, a final year B.Tech student specializing in Artificial Intelligence & Machine Learning. My journey into the world of AI began during my early university years when I discovered the fascinating intersection of data, algorithms, and problem-solving that can create intelligent systems capable of transforming industries.
                </p>
                <p className="text-justify leading-relaxed mb-6">
                  Throughout my academic journey, I've gained hands-on experience with various AI/ML frameworks and technologies, working on projects ranging from computer vision applications to natural language processing systems. I've also developed strong frontend development skills, allowing me to create intuitive interfaces for complex AI-powered applications.
                </p>
                <p className="text-justify leading-relaxed mb-6">
                  I believe in the power of AI to solve real-world challenges, and I'm particularly interested in how machine learning can be applied to healthcare, education, and sustainability. My approach combines theoretical knowledge with practical implementation, ensuring that my solutions are not only technically sound but also address genuine user needs.
                </p>
                <p className="text-justify leading-relaxed">
                  When I'm not training models or coding, you can find me exploring the latest research papers, attending AI conferences, or contributing to open-source machine learning projects. I'm passionate about the ethical implications of AI and committed to developing responsible technologies that benefit society while respecting privacy and fairness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* Personal Interests */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Personal Interests" 
            subtitle="Beyond coding, exploring the passions that fuel my creativity and drive"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/30 dark:bg-navy-light/30 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-navy-dark dark:text-white">
                Music & Podcasts
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify leading-relaxed">
                I'm an avid listener of music and podcasts. They keep me inspired and motivated, 
                and I love discovering new artists and thinkers who challenge my perspectives and broaden my understanding of the world.
              </p>
              <Music className="w-8 h-8 sm:w-10 sm:h-10 text-pink-deep" />
            </div>
              <div className="bg-white/30 dark:bg-navy-light/30 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-navy-dark dark:text-white">
                Travel & Adventure
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify leading-relaxed">
                Exploring new places and cultures is one of my greatest passions. I have a special love for train journeys - 
                there's something magical about watching landscapes unfold through the window while traveling by rail. These experiences 
                broaden my horizons and inspire my creative approach to problem-solving.
              </p>
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-pink-deep" />
            </div>
            
            <div className="bg-white/30 dark:bg-navy-light/30 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-navy-dark dark:text-white">
                Playing Cricket
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify leading-relaxed">
                Cricket isn't just a sport for me; it's a passion that teaches teamwork, strategy, and perseverance. 
                I enjoy both playing and watching cricket matches, appreciating the perfect balance of individual skill and team coordination.
              </p>
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-pink-deep" />
            </div>
              <div className="bg-white/30 dark:bg-navy-light/30 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-navy-dark dark:text-white">
                Building AI Projects
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify leading-relaxed">
                Even in my free time, I enjoy experimenting with AI models and building machine learning applications. 
                It's both intellectually stimulating and a way to continuously improve my skills while creating solutions 
                that can have meaningful impact on real-world problems.
              </p>
              <Code className="w-8 h-8 sm:w-10 sm:h-10 text-pink-deep" />
            </div>
          </div>
        </div>
      </section>
        {/* Connect Section */}      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lg">
            Let's Connect and Build Intelligent Solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-justify leading-relaxed">
            I'm always open to discussing AI research, collaborative projects, or opportunities for internships and roles in the AI/ML field. 
            Let's connect and explore how artificial intelligence can solve challenging problems together.
          </p>
          <Button asChild size="lg" className="bg-purple-deep hover:bg-navy text-white">
            <Link to="/contact">
              Let's Connect <MessageSquare className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
