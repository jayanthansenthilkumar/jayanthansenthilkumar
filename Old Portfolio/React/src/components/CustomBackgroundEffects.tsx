
import { useTheme } from "next-themes";

const CustomBackgroundEffects = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple/20 to-teal/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-teal/20 to-orange/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-orange/20 to-purple/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple/30 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal/30 rounded-full animate-float delay-500"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-orange/30 rotate-12 animate-float delay-1000"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-purple/30 rounded-full animate-float delay-1500"></div>
      <div className="absolute top-60 left-1/3 w-4 h-4 bg-teal/30 rotate-45 animate-float delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Subtle moving rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple/20 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-teal/20 to-transparent transform rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-36 bg-gradient-to-b from-transparent via-orange/20 to-transparent transform -rotate-6 animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default CustomBackgroundEffects;
