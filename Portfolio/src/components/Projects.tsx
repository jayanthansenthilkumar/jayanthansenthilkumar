
import { Code, ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-portfolio-subtle">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>

        <div className="grid gap-10 mt-12">
          {/* Project 1 */}
          <div className="group bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll hover:shadow-lg transition-all">
            <div className="md:grid md:grid-cols-5 md:min-h-[18rem]">
              <div className="md:col-span-2 bg-portfolio-navy p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-navy to-portfolio-teal opacity-80 z-0"></div>
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-portfolio-teal/30 blur-2xl"></div>
                <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-portfolio-purple/20 blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">Bus Tracking Website</h3>
                  <p className="text-white/80 mb-6">Real-time bus location tracking system with user-friendly interface for students and staff.</p>

                  <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>Feb 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      <span>Web Application</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a href="https://github.com/helix342/Bus-Tracking-System" className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all" title="View Code">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">PHP</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Google Maps API</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-portfolio-navy">Project Overview</h4>
                  <p className="text-gray-600">
                    A comprehensive real-time bus tracking solution that allows students and faculty to monitor campus shuttle locations, improving transportation planning efficiency and reducing wait times.
                  </p>

                  <h4 className="font-medium text-portfolio-navy">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Real-time GPS tracking integration with Google Maps API for accurate bus location monitoring</li>
                    <li>Responsive user interface optimized for both desktop and mobile devices</li>
                    <li>Estimated arrival times based on current traffic conditions and historical data</li>
                    <li>Route visualization with stop information and scheduling details</li>
                    <li>Admin dashboard for managing routes, drivers, and generating analytics reports</li>
                  </ul>

                  <h4 className="font-medium text-portfolio-navy">Technical Challenges</h4>
                  <p className="text-gray-600">
                    Implementing real-time updates with minimal server load while ensuring data accuracy across multiple devices presented a significant challenge. This was addressed using a combination of WebSockets for live updates and an optimized database structure for efficient queries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll animate-delay-2 hover:shadow-lg transition-all">
            <div className="md:grid md:grid-cols-5 md:min-h-[18rem]">
              <div className="md:col-span-2 bg-portfolio-purple p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple to-portfolio-navy opacity-80 z-0"></div>
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-portfolio-teal/20 blur-2xl"></div>
                <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-portfolio-orange/20 blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">Complaint Management System</h3>
                  <p className="text-white/80 mb-6">Streamlined solution for submitting, tracking, and resolving user complaints efficiently.</p>

                  <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>August 2024 - Feb 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      <span>Web Application</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a href="https://github.com/helix342/MIC_CMS" className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all" title="View Code">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">PHP</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Bootstrap</span>
                  <span className="badge">Ajax</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-portfolio-navy">Project Overview</h4>
                  <p className="text-gray-600">
                    A comprehensive complaint management system designed to streamline the process of submitting, tracking, and resolving user complaints across various departments within an organization.
                  </p>

                  <h4 className="font-medium text-portfolio-navy">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Multi-level user authentication with role-based access control (admin, staff, users)</li>
                    <li>Intuitive dashboard for real-time complaint status tracking and analytics</li>
                    <li>Automated complaint routing based on categories and department assignments</li>
                    <li>Email notifications for status updates and resolution confirmations</li>
                    <li>Comprehensive reporting system with exportable data in multiple formats</li>
                  </ul>

                  <h4 className="font-medium text-portfolio-navy">Implementation Details</h4>
                  <p className="text-gray-600">
                    Built using PHP backend with a MySQL database for data persistence. The frontend utilizes Bootstrap for responsive design and Ajax for seamless user interactions without page reloads. The system employs a modular architecture for easy maintenance and future enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll animate-delay-3 hover:shadow-lg transition-all">
            <div className="md:grid md:grid-cols-5 md:min-h-[18rem]">
              <div className="md:col-span-2 bg-portfolio-accent p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent to-portfolio-teal opacity-80 z-0"></div>
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-portfolio-navy/20 blur-2xl"></div>
                <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-portfolio-teal/20 blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">Pradan NGO Platform</h3>
                  <p className="text-white/80 mb-6">Collaborative web development project for Pradan, an NGO focused on rural development and community upliftment.</p>

                  <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>Apr 2025 - May 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      <span>Internship Project</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a href="https://github.com/helix342/Pradan" target="_blank" className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all" title="View Code">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="badge">Laravel</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">PHP</span>
                  <span className="badge">AWS EC2</span>
                  <span className="badge">UI/UX</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-portfolio-navy">Project Overview</h4>
                  <p className="text-gray-600">
                    As a developer intern at Pradan, I collaborated on a web platform designed to support the NGO's mission of social impact and rural empowerment. The platform was built using Laravel and deployed on AWS.
                  </p>

                  <h4 className="font-medium text-portfolio-navy">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Developed core website features using Laravel and PHP</li>
                    <li>Designed responsive UI/UX components to improve usability and accessibility</li>
                    <li>Integrated MySQL databases and contributed to schema planning and optimization</li>
                    <li>Collaborated with a cross-functional team to deploy the platform using AWS EC2 and RDS</li>
                    <li>Handled testing, staging, and production rollout</li>
                  </ul>

                  <h4 className="font-medium text-portfolio-navy">Mission Alignment</h4>
                  <p className="text-gray-600">
                    This project aligned with Pradan’s goal of leveraging technology to drive social change. The platform supports initiatives in education, fundraising, and outreach by enhancing digital access for rural communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* More Projects Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-portfolio-navy mb-8">More Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Additional Project 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border-t-2 border-portfolio-teal">
              <h4 className="font-bold text-portfolio-navy mb-2">Expense Tracker</h4>
              <p className="text-gray-600 text-sm mb-4">Analytics dashboard for online store management with inventory tracking and sales reporting.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs px-2 py-0.5 bg-portfolio-teal/10 text-portfolio-teal rounded-full">React</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-teal/10 text-portfolio-teal rounded-full">Redux</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-teal/10 text-portfolio-teal rounded-full">Chart.js</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">April 2025</span>
                <a href="https://github.com/helix342/Expense-Tracker-API" className="text-portfolio-teal hover:text-portfolio-navy text-sm font-medium transition-colors">View Details</a>
              </div>
            </div>

            {/* Additional Project 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border-t-2 border-portfolio-purple">
              <h4 className="font-bold text-portfolio-navy mb-2">AI Trip Planner</h4>
              <p className="text-gray-600 text-sm mb-4">
                A smart travel planning application that helps users build personalized itineraries and book hotels, transportation, attractions, and food options. Includes an AI chatbot powered by Gemini API to dynamically modify the itinerary.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs px-2 py-0.5 bg-portfolio-purple/10 text-portfolio-purple rounded-full">React</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-purple/10 text-portfolio-purple rounded-full">MongoDB Atlas</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-purple/10 text-portfolio-purple rounded-full">Google Maps API</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-purple/10 text-portfolio-purple rounded-full">Gemini API</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">May 2025</span>
                <a href="https://github.com/helix342/AI-Trip-Planner" className="text-portfolio-purple hover:text-portfolio-navy text-sm font-medium transition-colors">View Details</a>
              </div>
            </div>

            {/* Additional Project 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border-t-2 border-portfolio-accent">
              <h4 className="font-bold text-portfolio-navy mb-2">Online Portfolio Builder</h4>
              <p className="text-gray-600 text-sm mb-4">An intuitive web app that allows users to create, customize, and share professional portfolios using dynamic templates.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs px-2 py-0.5 bg-portfolio-accent/10 text-portfolio-accent rounded-full">React</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-accent/10 text-portfolio-accent rounded-full">Express</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-accent/10 text-portfolio-accent rounded-full">Node.js</span>
                <span className="text-xs px-2 py-0.5 bg-portfolio-accent/10 text-portfolio-accent rounded-full">MongoDB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">March 2025</span>
                <a href="https://github.com/helix342/Online-Portfolio-Builder" className="text-portfolio-accent hover:text-portfolio-navy text-sm font-medium transition-colors">View Details</a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/helix342"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center"
            >
              <Github size={18} className="mr-2" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
