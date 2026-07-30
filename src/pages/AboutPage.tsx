import { Helmet } from "react-helmet-async";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>About Prithika Kannan | Background, Education & Skills</title>
        <meta name="description" content="Learn about Prithika Kannan's background as a Product-focused Software Engineer, her education at M. Kumarasamy College of Engineering, and her industrial experience at RSUN Technologies." />
        <meta name="keywords" content="About Prithika Kannan, Software Engineer Background, M. Kumarasamy College of Engineering, RSUN Technologies Madurai, Tech Certifications, GitHub Foundations" />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>prithika/about</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Bridging analytical focus with creative problem-solving.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed">
              I am a product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I build scalable, client-centric applications aligned with AI-driven transformation goals.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
