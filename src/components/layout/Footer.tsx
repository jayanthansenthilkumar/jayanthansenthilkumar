import { Code2, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <div
        className="w-full relative overflow-hidden bg-white flex items-center justify-center py-2 md:py-4 select-none border-t border-gray-100"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 8px)'
        }}
      >
        <div
          className="font-serif italic font-bold text-transparent text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] tracking-tighter leading-none whitespace-nowrap"
          style={{ WebkitTextStroke: '2px rgba(0,0,0,0.25)' }}
        >
          Jayanthan Senthilkumar
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 pt-4 md:pt-16 pb-4 md:pb-8">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-4 md:mb-12 text-center">
            {/* <div className="flex items-center text-gray-900 mb-2 md:mb-4">
              <span className="text-base md:text-lg font-bold font-serif italic">Jayanthan Senthilkumar</span>
            </div> */}
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-md font-mono">
              Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="mailto:kpprithika75@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/jayanthan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Code2 className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/jayanthan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Briefcase className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="pt-4 md:pt-8 border-t border-gray-200 flex flex-col items-center justify-center font-mono text-[10px] md:text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Jayanthan Senthilkumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
