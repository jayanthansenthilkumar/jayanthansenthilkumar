import { useEffect } from 'react';
import './pageTransition.css';

export const PageTransitionEffect = () => {
  useEffect(() => {
    const cursorBlobs = document.querySelectorAll('.cursor-blob');
    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      cursorBlobs.forEach((blob, index) => {
        const blobElement = blob as HTMLElement;
        // Add slight delay based on blob index for trailing effect
        const delay = index * 100;
        
        setTimeout(() => {
          blobElement.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        }, delay);
      });
    };    // Show blobs during page transition
    const showBlobs = () => {
      cursorBlobs.forEach((blob, index) => {
        const blobElement = blob as HTMLElement;
        blobElement.style.display = 'block';
        blobElement.style.opacity = '1';
        
        // Hide blobs after a short transition period
        timeout = setTimeout(() => {
          blobElement.style.opacity = '0';
          setTimeout(() => {
            blobElement.style.display = 'none';
          }, 300);
        }, 600);
      });
      
      // Add listener for trail effect
      window.addEventListener('mousemove', handleMouseMove);
    };

    // Show blobs on mount
    showBlobs();

    return () => {
      // Remove listener and clear timeout on unmount
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="page-transition-effect">
      <div className="cursor-blob blob-1"></div>
      <div className="cursor-blob blob-2"></div>
      <div className="cursor-blob blob-3"></div>
      <div className="cursor-blob blob-4"></div>
      <div className="cursor-blob blob-5"></div>
    </div>
  );
};

export default PageTransitionEffect;
