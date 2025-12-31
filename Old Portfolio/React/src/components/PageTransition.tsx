import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 0, // Changed from 20 to 0 to prevent downward scroll
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 0, // Changed from -20 to 0 to prevent upward scroll during exit
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut" as const,
  duration: 0.4,
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
      onAnimationStart={() => {
        // Prevent scrolling during animation by temporarily disabling scroll
        document.body.style.overflow = 'hidden';
      }}
      onAnimationComplete={() => {
        // Re-enable scrolling after animation completes
        document.body.style.overflow = '';
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
