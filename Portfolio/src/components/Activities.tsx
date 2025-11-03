
import { Users, Calendar, Award, Globe, Lightbulb, Code } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Co-curricular Activities</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6 animate-on-scroll">
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-teal/20 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-portfolio-teal" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Google Developer Student Club</h3>
                    <span className="text-sm text-portfolio-teal">2023-2024</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Active member of the Google Developer Student Club, focusing on building developer skills and fostering innovation within the campus community.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Key Contributions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Organized the technical debate "Speak Up!" for the Karur Local Chapter, enhancing technical communication skills among students</li>
                      <li>Collaborated with peers to host events.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-purple animate-on-scroll animate-delay-2">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-purple/20 p-3 rounded-full">
                    <Code className="h-6 w-6 text-portfolio-purple" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Coding & Hackathon Participation</h3>
                    <span className="text-sm text-portfolio-purple">2022–Present</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Active participant in competitive programming contests and national-level hackathons to develop real-world solutions and sharpen problem-solving skills.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Participated in <strong>Smart India Hackathon 2023 & 2024</strong>, selected during internal rounds with innovative IoT-based solutions</li>
                      <li>Qualified for <strong>TCS CodeVita</strong> Seasons 11 & 12 (2023 & 2024 editions)</li>
                      <li>Regularly solve problems on <strong>LeetCode</strong> and <strong>HackerRank</strong> to improve algorithmic thinking</li>
                      <li>Built cross-functional team experience during intensive national hackathons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-orange animate-on-scroll">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-orange/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-portfolio-orange" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Nebula Nest Hackathon</h3>
                    <span className="text-sm text-portfolio-orange">March 2024</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Volunteered in marketing and social media engagement for promotions of the inter-college hackathon Nebula Nest, supporting event organization and execution.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Created and executed social media strategy, resulting in 200+ registrations from 15+ colleges</li>
                      <li>Designed promotional materials and digital content for event marketing</li>
                      <li>Coordinated with participants to ensure smooth event execution, timely communication, and active engagement throughout the sessions.</li>
                      <li>Assisted in event logistics and provided technical support during the hackathon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal animate-on-scroll animate-delay-3">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-teal/20 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-teal" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Virtual Reality Health Assistant</h3>
                    <span className="text-sm text-portfolio-teal">Nov 14, 2024</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Presented a technical paper on "Virtual Reality Health Assistant for Symptom and Query Analysis" at the International Conference on Engineering Solutions and Technologies.
                    The paper explored the integration of VR and LLMs to create an avatar-based assistant for immersive healthcare interaction.
                    <br />
                    <a
                      href="https://ijirt.org/publishedpaper/IJIRT170028_PAPER.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-teal hover:underline mt-1 inline-block"
                    >
                      View Published Paper →
                    </a>
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Research Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Proposed a VR-based avatar for real-time health interaction and symptom resolution</li>
                      <li>Used large language models (LLMs) to power intelligent responses</li>
                      <li>Enhanced user engagement over traditional text-based chatbot interfaces</li>
                      <li>Explored the potential of immersive tech in improving healthcare accessibility</li>
                      <li>Published in international conference proceedings with peer recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-portfolio-navy to-portfolio-purple p-8 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-3">Looking for collaboration opportunities!</h3>
            <p className="max-w-2xl mx-auto mb-6">
              I'm always interested in participating in hackathons, open-source projects, and technical communities.
              If you're organizing an event or looking for contributors, let's connect!
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-portfolio-navy font-medium rounded-md hover:bg-portfolio-teal hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="mr-2">Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
