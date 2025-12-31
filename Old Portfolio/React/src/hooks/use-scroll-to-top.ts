import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that handles the scroll behavior during route changes.
 * Instead of immediately scrolling to top, it preserves the position during
 * transition animation and then resets it.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save the current position
    const scrollPosition = window.scrollY;
    
    // Use requestAnimationFrame to wait for the next frame
    // This ensures our scroll happens after the animation starts
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto', // Use auto instead of smooth to avoid competing animations
      });
    }, 50); // Small delay to let the page transition start first
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
}
