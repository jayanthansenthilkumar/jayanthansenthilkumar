
import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import { motion } from 'framer-motion';

const Loader = () => {
  const { progress, updateProgress, isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      // Simple, smoother progress increment
      const timer = setInterval(() => {
        updateProgress((prevProgress: number) => {
          // Slow down progress as it approaches 100%
          const increment = prevProgress < 70 ? 2 : prevProgress < 90 ? 1 : 0.5;
          
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return Math.min(prevProgress + increment, 100);
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isLoading, updateProgress]);
    if (!isLoading) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Simple solid background */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-center px-6 py-8 max-w-xs bg-background/50 backdrop-blur-md rounded-xl border border-primary/10 shadow-lg">
        {/* Simple logo animation */}
        <motion.div
          className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-2xl font-bold text-white">J</span>
        </motion.div>
        
        {/* Clean Progress Bar */}
        <div className="mb-4 bg-muted/30 rounded-full h-1.5 overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Simple Loading Text */}
        <div className="text-sm font-medium text-foreground">
          {progress < 100 ? 'Hakuna Matata...' : 'Ready!'}
        </div>
        
        {/* Simple loading dots */}
        <div className="mt-2 flex justify-center space-x-1.5">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full" 
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full" 
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full" 
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
