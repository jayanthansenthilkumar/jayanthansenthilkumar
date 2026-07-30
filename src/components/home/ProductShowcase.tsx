import { ArrowRight, Sparkles, User, Link2, BarChart3, Bot, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI-Powered Identity",
    description: "Transform your portfolio, GitHub, LinkedIn, resume, blogs, and achievements into one intelligent AI identity that updates itself automatically.",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Identity Agent",
    description: "An AI chatbot that lives on your profile. Visitors can ask questions about your work, skills, and experience — and get instant, intelligent answers.",
    icon: <Bot className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Connected Accounts",
    description: "Link your GitHub, LeetCode, LinkedIn, and other platforms. Aventrea syncs your activity and presents a unified, always-current digital presence.",
    icon: <Link2 className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Identity Score & Analytics",
    description: "Get an AI-generated Identity Score, track profile views, monitor engagement, and understand how your digital presence is performing.",
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Personalized URL",
    description: "Claim your unique aventrea.me/username link. One beautiful, living page that replaces scattered portfolios, link trees, and static resumes.",
    icon: <User className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Open Source",
    description: "Built in the open. Aventrea.me is fully open-source, community-driven, and transparent. Contribute, customize, or self-host.",
    icon: <Code2 className="w-5 h-5 text-blue-600" />
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Aventrea.me</h2>
            <p className="text-gray-600 text-sm font-mono max-w-2xl">
              The Living Digital Identity Platform. One intelligent page that replaces your portfolio, resume, and link tree — powered by AI.
            </p>
          </div>
          <a href="https://aventrea.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hidden md:inline-flex rounded-sm font-mono text-xs border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm">
              Visit Aventrea.me <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="p-1.5 bg-blue-50 border border-blue-100 rounded-sm">
                  {feature.icon}
                </div>
                <span className="text-sm font-bold text-gray-900 font-serif">{feature.title}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-6 flex-grow font-mono leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a href="https://aventrea.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full rounded-sm font-mono text-xs border-gray-300 bg-white shadow-sm">
              Visit Aventrea.me <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
