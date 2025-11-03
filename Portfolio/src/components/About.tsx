
import { useEffect } from 'react';
import { Code, Server, Layout, Database, Cloud, Users } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="feature-card">
    <div className="flex items-start">
      <div className="mr-4 p-3 rounded-lg bg-portfolio-teal/10 text-portfolio-teal">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-portfolio-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-on-scroll">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a <span className="text-portfolio-navy font-medium">B.Tech student</span> specializing in Artificial Intelligence and Machine Learning at M.Kumarasamy College of Engineering, with a passion for web development and programming.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in technology began with curiosity and has evolved into expertise across multiple programming languages and frameworks. I specialize in building responsive web applications with modern JavaScript frameworks and have experience with both front-end and back-end technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I enjoy solving complex problems and building innovative applications that make a difference. My experience spans from full-stack development to AI systems, and I'm constantly exploring new technologies to enhance my skillset.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-portfolio-navy mb-4">What I Offer:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-portfolio-teal">✓</span>
                  <span>Custom web application development</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-portfolio-teal">✓</span>
                  <span>Responsive design implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-portfolio-teal">✓</span>
                  <span>Front-end and back-end development</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-portfolio-teal">✓</span>
                  <span>Database design and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll animate-delay-1">
            <div className="bg-portfolio-subtle p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-portfolio-navy">Skills & Expertise</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-portfolio-navy">Front-End Development</h4>
                    <span className="text-portfolio-teal font-medium">90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-portfolio-teal rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-portfolio-navy">Back-End Development</h4>
                    <span className="text-portfolio-teal font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-portfolio-teal rounded-full w-[75%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-portfolio-navy">Database Management</h4>
                    <span className="text-portfolio-teal font-medium">80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-portfolio-teal rounded-full w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-portfolio-navy">Hosting and Deployment</h4>
                    <span className="text-portfolio-teal font-medium">70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-portfolio-teal rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>

              <div className="section-divider my-8"></div>

              <h4 className="font-medium text-gray-700 mb-3">Languages & Technologies</h4>
              <div className="flex flex-wrap mb-6">
                <span className="badge">Python</span>
                <span className="badge">JavaScript</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Java</span>
                <span className="badge">PHP</span>
                <span className="badge">HTML/CSS</span>
                <span className="badge">SQL</span>
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">Laravel</span>
                <span className="badge">MongoDB</span>
                <span className="badge">MySQL</span>
                <span className="badge">Git</span>
                <span className="badge">BootStrap</span>
              </div>

              <div className="text-center mt-8">
                <a href="#contact" className="button-primary inline-flex">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>

        {/* My Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-portfolio-navy mb-8 text-center">My Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<Layout size={24} />}
              title="Front-End Development"
              description="Creating responsive, interactive user interfaces using modern frameworks like React and styling with BootStrap ."
            />

            <SkillCard
              icon={<Server size={24} />}
              title="Back-End Development"
              description="Building robust server-side applications with Node.js, Express, and PHP/Laravel to power your web applications."
            />

            <SkillCard
              icon={<Database size={24} />}
              title="Database Design"
              description="Designing efficient database schemas and implementing data management solutions using MySQL and MongoDB."
            />

            <SkillCard
              icon={<Code size={24} />}
              title="Full-Stack Solutions"
              description="End-to-end web application development with seamless integration between front-end and back-end components."
            />

            <SkillCard
              icon={<Cloud size={24} />}
              title="Hosting and Deployment"
              description="Deploying web applications to cloud platforms with CI/CD pipelines, domain setup, and performance optimization for reliable user access."
            />

            <SkillCard
              icon={<Users size={24} />}
              title="Collaborative Development"
              description="Working with teams to deliver high-quality software solutions that meet business requirements and user needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
