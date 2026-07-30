import { Briefcase, GraduationCap, Award } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="experience" className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif italic">
              Experience & <span className="text-blue-600">Background</span>
            </h2>
            <p className="text-sm font-mono text-gray-600 mb-12">
              A blend of academic foundation and practical industry experience building scalable systems.
            </p>
            
            <div className="flex flex-col gap-8">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-sm">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-serif">RSUN Technologies</h3>
                    <p className="text-xs font-mono text-gray-500">Madurai | June 2026</p>
                  </div>
                </div>
                <ul className="list-disc text-sm font-mono text-gray-600 leading-relaxed pl-12 space-y-2">
                  <li>Built scalable distributed backend with PHP & SQL, reducing latency by 30% and throughput.</li>
                  <li>Developed RESTful APIs to improve communication and system reliability by 40%.</li>
                  <li>Optimized queries and indexing, cutting processing time by 35% and enhancing performance.</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-serif">M. Kumarasamy College of Engineering</h3>
                    <p className="text-xs font-mono text-gray-500">2024 - 2028</p>
                  </div>
                </div>
                <p className="text-sm font-mono text-gray-600 leading-relaxed pl-12">
                  B. Tech - Information Technology <br />
                  CGPA – 7.900 as of 3rd semester
                </p>
              </div>
            </div>
          </div>
          
          {/* Terminal / Certifications Box */}
          <div className="rounded-md border border-gray-200 bg-white shadow-sm font-mono text-xs h-full min-h-[400px] flex flex-col overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-gray-500 flex justify-between">
              <span>certifications.json</span>
              <span>100%</span>
            </div>
            <div className="p-6 text-gray-700 space-y-4 overflow-auto flex-grow bg-white">
              <div className="text-blue-600 font-semibold">$ cat certifications.json</div>
              <pre className="text-gray-600 font-mono text-xs whitespace-pre-wrap">
{`{
  "certifications": [
    {
      "name": "GitHub Foundations",
      "status": "Completed",
      "verified": true
    },
    {
      "name": "SRMIST Hackathon",
      "award": "Finalist",
      "category": "Innovation"
    }
  ],
  "learning_path": {
    "current_focus": "Advanced Distributed Systems",
    "next_goal": "Cloud Architect Certification"
  }
}`}
              </pre>
              <div className="mt-4 flex items-center">
                <span className="text-blue-600 font-bold mr-2">$</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
