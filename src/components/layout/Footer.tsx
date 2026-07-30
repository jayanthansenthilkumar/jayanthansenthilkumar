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
          className="font-serif italic font-bold text-transparent text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] tracking-tighter leading-none whitespace-nowrap"
          style={{ WebkitTextStroke: '2px rgba(0,0,0,0.25)' }}
        >
          Prithika Kannan
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="flex items-center text-gray-900 mb-4">
              <span className="text-lg font-bold font-serif italic">Prithika Kannan</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md font-mono">
              Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
            </p>
            <div className="flex gap-6">
              <a href="mailto:kpprithika75@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Code2 className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Briefcase className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col items-center justify-center font-mono text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
