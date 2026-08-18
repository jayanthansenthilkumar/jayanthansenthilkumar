import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, User, BookOpen, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Jayanthan Senthilkumar | Portal</title>
        <meta name="description" content="Welcome to the portal of Jayanthan Senthilkumar. Choose between Portfolio and Blog." />
      </Helmet>
      
      <section className="relative pt-4 md:pt-24 pb-0 overflow-hidden bg-transparent">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-4 md:mb-16">
          <h1 className="text-3xl md:text-[4.5rem] lg:text-[5rem] text-blue-600 mb-2 md:mb-6 leading-tight tracking-tight font-serif italic">
            Jayanthan Senthilkumar
          </h1>
          
          <p className="text-xs md:text-lg text-gray-600 mb-4 md:mb-10 max-w-2xl mx-auto font-mono">
            Welcome to my central portal. Choose an option below to continue.
          </p>
        </div>

        {/* 2 Column Feature Grid (Bordered) for the Links */}
        <div className="grid grid-cols-2 border-t border-b border-gray-200 bg-transparent text-left relative z-10 max-w-4xl mx-auto mb-2 md:mb-20">
          
          {/* Portfolio Link */}
          <a href="https://hilo.jayanthan.fyi" className="group block p-4 md:p-12 border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 mb-2 md:mb-0">
                <User className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-2xl font-bold font-serif">Portfolio</h3>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all self-end md:self-auto" />
            </div>
            <p className="text-xs md:text-sm text-gray-600 font-mono leading-relaxed mb-2 md:mb-6">
              Explore my projects, skills, and experience.
            </p>
          </a>

          {/* Blogs Link */}
          <a href="https://blogs.jayanthan.fyi" className="group block p-4 md:p-12 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 mb-2 md:mb-0">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-2xl font-bold font-serif">Blogs</h3>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all self-end md:self-auto" />
            </div>
            <p className="text-xs md:text-sm text-gray-600 font-mono leading-relaxed mb-2 md:mb-6">
              Read my articles, tutorials, and thoughts on software engineering.
            </p>
          </a>

          {/* Events Link */}
          <Link to="/events" className="group block col-span-2 p-6 md:p-10 border-t border-gray-200 hover:bg-gray-50 transition-colors text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 mb-2">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-2xl font-bold font-serif">Events</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 font-mono leading-relaxed mb-4 max-w-md mx-auto">
                Explore AustralAI events, verify certification credentials, and access admin portals.
              </p>
              <div className="flex items-center gap-1.5 text-blue-600 font-mono text-xs md:text-sm font-semibold">
                <span>Open Events Hub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div className="py-2 md:py-12"></div>
    </div>
  );
}
