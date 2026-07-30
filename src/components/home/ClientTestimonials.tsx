import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    quote: `"Austral AI's inference engine cut our model serving costs by 60% while improving latency. The migration from our in-house solution took less than a week."`,
    author: "Michael Torres",
    title: "VP of Engineering",
    company: "DataStream Analytics",
    featured: false
  },
  {
    id: 2,
    companyLogo: "MERIDIAN HEALTH",
    quote: `"We needed a HIPAA-compliant NLP pipeline that could process 50,000 physician notes daily. Austral AI delivered a system that exceeded our accuracy targets by 12% while maintaining full regulatory compliance. The team's deep understanding of healthcare AI constraints was invaluable."`,
    author: "Dr. Priya Sharma",
    title: "Chief Data Officer",
    company: "",
    featured: true
  },
  {
    id: 3,
    quote: `"The multi-agent architecture Austral AI built for our supply chain handles real-time optimization across 5,000 routes. It's the most sophisticated AI system we've deployed."`,
    author: "James Whitfield",
    title: "CTO",
    company: "LogiNext",
    featured: false
  },
  {
    id: 4,
    quote: `"Their on-premise deployment model was the deciding factor. In defense contracting, data sovereignty is non-negotiable. Austral AI understood that from day one."`,
    author: "Sarah Koenig",
    title: "Director of AI Programs",
    company: "Sentinel Systems",
    featured: false
  },
  {
    id: 5,
    quote: `"We evaluated six AI vendors. Austral AI was the only team that started by defining success metrics before writing a single line of code. That engineering discipline is rare."`,
    author: "Rajesh Patel",
    title: "Head of Innovation",
    company: "FinServe Global",
    featured: false
  }
];

export function ClientTestimonials() {
  return (
    <section className="py-0 bg-transparent border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Column 1 */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 p-8">
            <div className="mb-12">
              <p className="font-mono text-[13px] leading-relaxed text-gray-700 mb-6">
                {testimonials[0].quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700">MT</div>
                  <div>
                    <div className="text-xs font-bold font-sans text-gray-900">{testimonials[0].author}</div>
                    <div className="text-[10px] text-gray-500 font-sans">{testimonials[0].title}</div>
                  </div>
                </div>
                <div className="text-xs font-bold tracking-tighter text-gray-700">{testimonials[0].company}</div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-mono text-[13px] leading-relaxed text-gray-700 mb-6">
                {testimonials[3].quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-700">SK</div>
                  <div>
                    <div className="text-xs font-bold font-sans text-gray-900">{testimonials[3].author}</div>
                    <div className="text-[10px] text-gray-500 font-sans">{testimonials[3].title}</div>
                  </div>
                </div>
                <div className="text-xs font-bold tracking-tighter text-gray-700">{testimonials[3].company}</div>
              </div>
            </div>
          </div>
          
          {/* Column 2 (Featured) */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 p-4 sm:p-8">
            <div className="bg-blue-50/50 border border-blue-100 rounded-sm p-6 h-full flex flex-col justify-between" style={{
              backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
              backgroundSize: "8px 8px"
            }}>
              <div>
                <div className="text-sm font-bold tracking-widest text-gray-900 mb-6 font-sans">
                  {testimonials[1].companyLogo}
                </div>
                <p className="font-mono text-[13px] leading-relaxed text-gray-700">
                  {testimonials[1].quote.split("Austral AI").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-blue-600 bg-blue-100/50 px-1">Austral AI</span>}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-700">PS</div>
                <div>
                  <div className="text-xs font-bold font-sans text-gray-900">{testimonials[1].author}</div>
                  <div className="text-[10px] text-gray-500 font-sans">{testimonials[1].title}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col p-8">
            <div className="mb-12">
              <p className="font-mono text-[13px] leading-relaxed text-gray-700 mb-6">
                {testimonials[2].quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-700">JW</div>
                  <div>
                    <div className="text-xs font-bold font-sans text-gray-900">{testimonials[2].author}</div>
                    <div className="text-[10px] text-gray-500 font-sans">{testimonials[2].title}</div>
                  </div>
                </div>
                <div className="text-xs font-bold tracking-tighter text-gray-700">{testimonials[2].company}</div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-mono text-[13px] leading-relaxed text-gray-700 mb-6">
                {testimonials[4].quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center text-[10px] font-bold text-amber-700">RP</div>
                  <div>
                    <div className="text-xs font-bold font-sans text-gray-900">{testimonials[4].author}</div>
                    <div className="text-[10px] text-gray-500 font-sans">{testimonials[4].title}</div>
                  </div>
                </div>
                <div className="text-xs font-bold font-sans text-gray-700">{testimonials[4].company}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Austral AI Delivers Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-200">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Austral AI Delivers</h3>
            <p className="text-sm font-mono text-gray-600">
              From architecture review to production deployment. We ship reliable AI systems, on time, every time.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about">
              <Button variant="ghost" className="text-xs font-sans text-gray-600 hover:text-gray-900">
                Our Approach <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-xs font-sans border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded-sm h-8 px-4 shadow-sm">
                View Services <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
