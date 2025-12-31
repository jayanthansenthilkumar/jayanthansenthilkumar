import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

/**
 * Component that controls the initial loading state when the app first mounts
 */
const InitialLoader = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    // Show loader on initial load
    setLoading(true);

    // Images, fonts, and other assets should be preloaded here
    const preloadAssets = async () => {
      // Simulate asset loading with a timeout
      // In a real application, you would load actual assets here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Hide loader when assets are loaded
      setLoading(false);
    };

    preloadAssets();
    
    // Handle window load event as a fallback
    const handleLoad = () => {
      setLoading(false);
    };
    
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [setLoading]);

  return null; // This component doesn't render anything
};

export default InitialLoader;
