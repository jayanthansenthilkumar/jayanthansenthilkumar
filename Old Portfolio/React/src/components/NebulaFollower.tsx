import { useEffect, useState, useRef } from 'react';
import './nebulaFollower.css';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  hue: number;
  life: number;
  maxLife: number;
}

const NebulaFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef<number | null>(null);  const lastBubbleTimeRef = useRef<number>(0);
  const bubbleIntervalRef = useRef<number>(100); // increased interval for fewer bubbles

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create bubbles with throttling
      const now = Date.now();
      if (now - lastBubbleTimeRef.current > bubbleIntervalRef.current) {
        lastBubbleTimeRef.current = now;
          // Create 1-2 bubbles per spray (reduced from 2-3)
        const bubbleCount = Math.floor(Math.random() * 2) + 1;
        
        for (let i = 0; i < bubbleCount; i++) {          const newBubble: Bubble = {
            id: Date.now() + i,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 1.5, // Reduced bubble size
            speedX: (Math.random() - 0.5) * 3,
            speedY: (Math.random() - 0.5) * 3 - 1, // Slightly upward bias
            hue: Math.random() * 60 + 180, // Blues/purples
            life: 0,
            maxLife: Math.random() * 100 + 50
          };
          
          setBubbles(prev => [...prev, newBubble]);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Add class to body to hide cursor
    document.body.classList.add('has-nebula-follower');

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update follower position if ref exists
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }
      
      // Update and render bubbles
      setBubbles(prevBubbles => 
        prevBubbles
          .map(bubble => ({
            ...bubble,
            x: bubble.x + bubble.speedX,
            y: bubble.y + bubble.speedY,
            life: bubble.life + 1,
            // Gradually slow down
            speedX: bubble.speedX * 0.98,
            speedY: bubble.speedY * 0.98
          }))
          .filter(bubble => bubble.life < bubble.maxLife)
      );

      // Render bubbles
      bubbles.forEach(bubble => {
        const opacity = 1 - (bubble.life / bubble.maxLife);
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${bubble.hue}, 100%, 70%, ${opacity})`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = `hsla(${bubble.hue}, 100%, 70%, ${opacity * 0.5})`;
        ctx.shadowBlur = 10;
      });
      
      requestIdRef.current = requestAnimationFrame(animate);
    };
    
    requestIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      // Remove the class when component unmounts
      document.body.classList.remove('has-nebula-follower');
    };
  }, [bubbles, mousePosition]);

  return (
    <>      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
      /><div        ref={followerRef}
        className="fixed pointer-events-none z-10 w-6 h-6 -ml-3 -mt-3 nebula-follower"
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-md" />
      </div>
    </>
  );
};

export default NebulaFollower;
