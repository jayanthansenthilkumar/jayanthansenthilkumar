
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Professional Experience</h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-portfolio-teal/30 hidden md:block"></div>

          {/* Experience Item 1 */}
          <div className="mb-16 md:mb-24 relative">
            <div className="hidden md:block absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 top-10 z-10">
              <div className="w-8 h-8 rounded-full bg-portfolio-teal border-4 border-white"></div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 md:mb-0 md:ml-12 lg:ml-0 animate-on-scroll border-l-4 border-portfolio-teal lg:mr-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Technology Innovation Hub</h3>
                  <span className="px-3 py-1 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Current</span>
                </div>

                <p className="text-lg text-portfolio-purple font-medium mb-3">Developer - Member</p>

                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">Apr 2024 - Present</span>
                  <MapPin size={16} className="mr-2" />
                  <span>Karur, Tamil Nadu</span>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">Leading development initiatives for campus projects and client solutions using modern web technologies and frameworks.</p>

                  <h4 className="font-semibold text-portfolio-navy">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Developing internal projects to address campus needs and requirements, integrating the MERN stack, Laravel framework and PHP with MySQL.</li>
                    <li>Leading a team, conducting client requirement meetings, performing testing, and deploying dynamic web applications and websites.</li>
                    <li>Ensuring responsive design and functionality across multiple websites for both internal use and client projects.</li>
                    <li>Implementing CI/CD pipelines to streamline development workflows and improve code quality.</li>
                    <li>Providing technical mentorship to junior team members and conducting code reviews.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="badge">React</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Express</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">Laravel</span>
                    <span className="badge">PHP</span>
                    <span className="badge">MySQL</span>
                    <span className="badge">Git</span>
                  </div>
                </div>
              </div>

              <div className="flex md:justify-end items-center">
                <Card className="w-full max-w-md bg-portfolio-subtle border-none shadow-md p-6 animate-on-scroll animate-delay-2">
                  <h4 className="font-semibold text-portfolio-navy mb-4">Project Highlights</h4>

                  <div className="space-y-4">
                    {/* Complaint Management System */}
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Complaint Management System</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        A centralized platform enabling students and faculty to raise, track, and resolve complaints efficiently across departments.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">PHP</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">MySQL</span>
                      </div>
                    </div>

                    {/* Faculty ERP */}
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Faculty ERP</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        An internal ERP system for managing faculty records, academic workloads, event coordination, and institutional documentation.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">PHP</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">MySQL</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Bootstrap</span>
                      </div>
                    </div>

                    {/* Expense Tracker */}
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Expense Tracker</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        A personal finance web app for tracking daily expenses, categorizing spending, and generating insights via visual analytics.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">React</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Express</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </Card>

              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative">
            <div className="hidden md:block absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 top-10 z-10">
              <div className="w-8 h-8 rounded-full bg-portfolio-teal border-4 border-white"></div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
              {/* Internship Details */}
              <div className="order-2 md:order-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 md:mb-0 md:ml-12 lg:ml-0 animate-on-scroll border-l-4 border-portfolio-teal lg:mr-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Pradan</h3>
                  <span className="px-3 py-1 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Current</span>
                </div>

                <p className="text-lg text-portfolio-purple font-medium mb-3">Developer Intern</p>

                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">Apr 2025 – May 2025</span>
                  <MapPin size={16} className="mr-2" />
                  <span>Tamil Nadu</span>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Remote internship at Pradan, an NGO focused on rural development and empowerment. Worked with the tech team to build and deploy tools that support operational and outreach initiatives.
                  </p>

                  <h4 className="font-semibold text-portfolio-navy">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Developed and maintained the organization's website using Laravel and PHP.</li>
                    <li>Designed intuitive UI/UX layouts and structured the database schema using MySQL.</li>
                    <li>Collaborated with a team of developers to integrate mobile and web platforms for seamless access.</li>
                    <li>Handled testing, deployment, and transition to production environments.</li>
                    <li>Utilized AWS services like EC2 for deployment and hosted a cloud-based MySQL database.</li>
                  </ul>

                  <div className="flex items-center mt-6">
                    <a href="https://www.pradan.net/" target="_blank" rel="noopener noreferrer" className="flex items-center text-portfolio-teal hover:text-portfolio-navy transition-all">
                      <span className="mr-2">Visit Pradan Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="badge">Laravel</span>
                    <span className="badge">AWS EC2</span>
                    <span className="badge">UI/UX Design</span>
                    <span className="badge">Remote Internship</span>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="order-1 md:order-2 flex md:justify-start items-center">
                <Card className="w-full max-w-md bg-portfolio-subtle border-none shadow-md p-6 animate-on-scroll animate-delay-2">
                  <h4 className="font-semibold text-portfolio-navy mb-4">Tech Contributions</h4>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Website Pages Built</h5>
                        <span className="text-xl font-bold text-portfolio-purple">10+</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Developed scalable and responsive web pages aligned with Pradan’s mission.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Collaborations</h5>
                        <span className="text-xl font-bold text-portfolio-purple">5+</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Worked with cross-functional teams including content creators, designers, and backend engineers.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Cloud Deployments</h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Successfully deployed applications using AWS EC2 and configured MySQL cloud databases.</p>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500 italic">
                        "Supporting rural empowerment through impactful technology solutions at scale."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
