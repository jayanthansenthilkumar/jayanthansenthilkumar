import { useEffect, useState } from 'react';

const useVimNavigation = (onNavigate) => {
  const [buffer, setBuffer] = useState('');
  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      // Ignore if modifier keys are pressed (except Shift)
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const key = e.key.toLowerCase();

      if (buffer === 'g') {
        // Second key in sequence
        switch (key) {
          case 'h':
            onNavigate('home');
            triggerToast('Go Home');
            break;
          case 'a':
            onNavigate('about');
            triggerToast('Go to About');
            break;
          case 'e':
            onNavigate('experience');
            triggerToast('Go to Experience');
            break;
          case 'p':
            onNavigate('projects');
            triggerToast('Go to Projects');
            break;
          case 'j':
            onNavigate('journey');
            triggerToast('Go to Journey');
            break;
          case 'c':
            onNavigate('contact');
            triggerToast('Go to Contact');
            break;
          default:
            // Invalid sequence
            break;
        }
        setBuffer(''); // Reset buffer
      } else if (key === 'g') {
        // Start sequence
        setBuffer('g');
        // Timeout to clear buffer if no second key pressed
        setTimeout(() => setBuffer(''), 1000);
      } else {
        // Reset if any other key
        setBuffer('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buffer, onNavigate]);

  const triggerToast = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 2000);
  };

  return { showToast };
};

export default useVimNavigation;
