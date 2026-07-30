
import { useState } from "react";
import { MapPin, ArrowRight, X, UploadCloud, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
  { title: "Senior LLMOps Engineer", team: "ML Infrastructure", location: "San Francisco / Remote", type: "Full-time" },
  { title: "Lead MLOps Architect", team: "Platform", location: "London / Remote", type: "Full-time" },
  { title: "Cloud Infrastructure Engineer (AI)", team: "Cloud & DevOps", location: "San Francisco / Remote", type: "Full-time" },
  { title: "AI Systems Engineer", team: "Core Engineering", location: "New York / Remote", type: "Full-time" },
  { title: "Applied AI Researcher", team: "Research", location: "London / San Francisco", type: "Full-time" },
  { title: "Senior Data Engineer (ML)", team: "Data Platform", location: "Remote", type: "Full-time" }
];

export function JobBoard() {
  const [selectedJob, setSelectedJob] = useState<typeof openings[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
      }, 2500);
    }, 1500);
  };

  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Open Positions</h2>
          <p className="text-sm font-mono text-gray-600">
            {openings.length} positions open across our global offices.
          </p>
        </div>

        <div className="border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {openings.map((job, index) => (
            <button 
              key={index}
              onClick={() => setSelectedJob(job)}
              className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-base font-bold text-gray-900 font-serif group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">{job.team}</span>
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500">{job.type}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)}>
          <div 
            className="bg-white shadow-2xl rounded-sm w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10 shrink-0">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif">Apply for {selectedJob.title}</h2>
                <p className="text-xs font-mono text-gray-500 mt-1">{selectedJob.team} · {selectedJob.location}</p>
              </div>
              <button onClick={() => setSelectedJob(null)} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors shrink-0 ml-4">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-serif mb-2">Application Received</h3>
                  <p className="text-sm font-mono text-gray-600">Thank you for applying to Austral AI. Our recruiting team will review your application and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-mono">First Name *</label>
                      <input required type="text" className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Ada" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-mono">Last Name *</label>
                      <input required type="text" className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Lovelace" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 font-mono">Email Address *</label>
                    <input required type="email" className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="ada@example.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 font-mono">LinkedIn Profile</label>
                    <input type="url" className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="https://linkedin.com/in/..." />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 font-mono">Personal Website / GitHub</label>
                    <input type="url" className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="https://github.com/..." />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 font-mono">Resume / CV *</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-sm p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group relative">
                      <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-blue-500 mb-2 transition-colors" />
                      <span className="text-sm font-medium text-gray-900">Click to upload</span>
                      <span className="text-xs font-mono text-gray-500 mt-1">PDF, DOCX up to 5MB</span>
                      <input required type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 font-mono">Additional Information</label>
                    <textarea rows={3} className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Anything else we should know?" />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm h-10 shadow-sm flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
