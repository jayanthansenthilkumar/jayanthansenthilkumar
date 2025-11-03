
import { School, Calendar, Award, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-portfolio-subtle">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-portfolio-teal/30"></div>
          
          <div className="space-y-16">
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:justify-center">
                <div className="order-2 md:order-1 md:w-1/2 md:pr-16 md:text-left animate-on-scroll">
                  <div>
                    <div className="flex flex-row-reverse md:justify-end items-center mb-2">
                      <Calendar size={16} className="ml-2 md:mr-2 md:ml-0 text-portfolio-teal" />
                      <span className="text-portfolio-teal font-medium">June 2022 - June 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-navy">B.Tech Artificial Intelligence and Machine Learning</h3>
                    <p className="text-gray-600 mt-1">Current CGPA: 8.0</p>
                  </div>
                  <div className="mt-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-portfolio-teal md:border-l-0 md:border-r-4">
                    <h4 className="font-medium text-portfolio-navy mb-2">Key Coursework:</h4>
                    <ul className="space-y-1 text-gray-600 list-disc list-inside">
                      <li>Object-Oriented Programming</li>
                      <li>Data Structures & Algorithms</li>
                      <li>Database Management Systems</li>
                      <li>Internet Programming</li>
                      <li>MERN Stack Development</li>
                      <li>Computer Networks</li>
                      <li>Machine Learning Fundamentals</li>
                    </ul>
                    <div className="mt-3">
                      <p className="text-gray-600">Developed practical skills in web development through course projects and self-directed learning. Participated in coding competitions and hackathons to enhance problem-solving abilities.</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 z-10 mb-4 md:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-portfolio-teal shadow-lg">
                    <GraduationCap size={32} className="text-portfolio-teal" />
                  </div>
                </div>
                
                <div className="order-3 md:w-1/2 md:pl-16 mt-4 md:mt-0">
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal animate-on-scroll">
                    <h3 className="text-xl font-bold text-portfolio-navy">M.Kumarasamy College of Engineering</h3>
                    <p className="text-gray-600">Karur, Tamil Nadu</p>
                    <div className="mt-3">
                      <h4 className="font-medium text-portfolio-navy mb-2">Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-portfolio-teal mr-2 mt-0.5" />
                          <span className="text-gray-600">Member of the College Coding Club – Technology Innovation Hub</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-portfolio-teal mr-2 mt-0.5" />
                          <span className="text-gray-600">Volunteered in organizing events as a member of the Google Developer Student Club</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-portfolio-teal mr-2 mt-0.5" />
                          <span className="text-gray-600">Completed multiple certified courses in web development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:justify-center">
                <div className="order-2 md:order-1 md:w-1/2 md:pr-16 md:text-left animate-on-scroll animate-delay-2">
                  <div>
                    <div className="flex flex-row-reverse md:justify-end items-center mb-2">
                      <Calendar size={16} className="ml-2 md:mr-2 md:ml-0 text-portfolio-teal" />
                      <span className="text-portfolio-teal font-medium">Completed June 2022</span>
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-navy">Higher Secondary Education</h3>
                    <p className="text-gray-600 mt-1">Percentage: 75.6%</p>
                  </div>
                  <div className="mt-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-portfolio-teal md:border-l-0 md:border-r-4">
                    <h4 className="font-medium text-portfolio-navy mb-2">Focus Areas:</h4>
                    <ul className="space-y-1 text-gray-600 list-disc list-inside">
                      <li>Mathematics</li>
                      <li>Physics</li>
                      <li>Chemistry</li>
                    </ul>
                    <div className="mt-3">
                      <p className="text-gray-600">Developed strong foundations in scientific and mathematical principles. Started exploring programming and computer science concepts.</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 z-10 mb-4 md:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-portfolio-teal shadow-lg">
                    <School size={32} className="text-portfolio-teal" />
                  </div>
                </div>
                
                <div className="order-3 md:w-1/2 md:pl-16 mt-4 md:mt-0">
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal animate-on-scroll animate-delay-2">
                    <h3 className="text-xl font-bold text-portfolio-navy">R.K.V Senior Secondary School</h3>
                    <p className="text-gray-600">Tamil Nadu</p>
                    <div className="mt-3">
                      <h4 className="font-medium text-portfolio-navy mb-2">Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-portfolio-teal mr-2 mt-0.5" />
                          <span className="text-gray-600">Participated in Science Exhibitions</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-portfolio-teal mr-2 mt-0.5" />
                          <span className="text-gray-600">President of the Toastmaster's Club</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional certifications */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold text-portfolio-navy mb-8 text-center">Professional Certifications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-portfolio-teal hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-portfolio-teal/10 rounded-lg text-portfolio-teal">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-navy mb-1">Data Analytics Essentials</h4>
                  <p className="text-sm text-portfolio-teal mb-2">Cisco | 2025</p>
                  <p className="text-gray-600 text-sm">Gained foundational knowledge of data analytics, including data cleaning, visualization, and basic statistical analysis using industry tools.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-portfolio-teal hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-portfolio-teal/10 rounded-lg text-portfolio-teal">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-navy mb-1">Machine Learning and Deep Learning</h4>
                  <p className="text-sm text-portfolio-teal mb-2">NPTEL | 2024</p>
                  <p className="text-gray-600 text-sm">Covered supervised and unsupervised learning, neural networks, deep learning models, and real-world applications using Python and frameworks like TensorFlow.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-portfolio-teal hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-portfolio-teal/10 rounded-lg text-portfolio-teal">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-navy mb-1">SQL & Relational Databases</h4>
                  <p className="text-sm text-portfolio-teal mb-2">IBM | 2025</p>
                  <p className="text-gray-600 text-sm">Studied relational database concepts, schema design, normalization, and advanced SQL for data retrieval, aggregation, and performance tuning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
