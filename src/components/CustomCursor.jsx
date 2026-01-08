import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.onclick ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a, button, [role="button"], input, textarea, select');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <div className="custom-cursor-container">
      {/* Main Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
          scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isClicking ? 0.5 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
        }}
      />
    </div>
  );
};

export default CustomCursor;
