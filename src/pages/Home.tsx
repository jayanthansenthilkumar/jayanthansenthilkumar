import { Helmet } from "react-helmet-async";
import { ArrowRight, User, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Jayanthan Senthilkumar | Portal</title>
        <meta name="description" content="Welcome to the portal of Jayanthan Senthilkumar. Choose between Portfolio and Blog." />
      </Helmet>
      
      <section className="relative pt-32 pb-0 overflow-hidden bg-transparent">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
          <h1 className="text-5xl md:text-[4.5rem] lg:text-[5rem] text-blue-600 mb-6 leading-tight tracking-tight font-serif italic">
            Jayanthan Senthilkumar
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-mono">
            Welcome to my central portal. Choose an option below to continue.
          </p>
        </div>

        {/* 2 Column Feature Grid (Bordered) for the Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-200 bg-transparent text-left relative z-10 max-w-4xl mx-auto mb-20">
          
          {/* Portfolio Link */}
          <a href="https://hilo.jayanthan.fyi" className="group block p-12 border-b md:border-b-0 border-r-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-gray-900">
                <User className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold font-serif">Portfolio</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-sm text-gray-600 font-mono leading-relaxed mb-6">
              Explore my projects, skills, and experience.
            </p>
          </a>

          {/* Blogs Link */}
          <a href="https://blogs.jayanthan.fyi" className="group block p-12 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-gray-900">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold font-serif">Blogs</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-sm text-gray-600 font-mono leading-relaxed mb-6">
              Read my articles, tutorials, and thoughts on software engineering.
            </p>
          </a>
          
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
