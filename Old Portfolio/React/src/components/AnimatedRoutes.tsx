import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from "./PageTransition";
import { useLoading } from "../contexts/LoadingContext";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { setLoading } = useLoading();
  const [isChangingRoute, setIsChangingRoute] = useState(false);
  
  // Show loader when changing routes
  useEffect(() => {
    setIsChangingRoute(true);
    setLoading(true);
    
    // Give some time for assets to load and animations to play
    const timer = setTimeout(() => {
      setIsChangingRoute(false);
      setLoading(false);
    }, 1000); // Adjust timing as needed
    
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
