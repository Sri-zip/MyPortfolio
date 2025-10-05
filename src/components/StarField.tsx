import { useEffect, useState, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
  floatDelay: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const generateStars = useCallback(() => {
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000); // Original density
    const newStars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 2 + 1, // 1-3px
        twinkleDelay: Math.random() * 3, // 0-3s
        floatDelay: Math.random() * 6, // 0-6s
      });
    }
    
    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();

    // Debounced resize handler for better performance
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generateStars, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [generateStars]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white mix-blend-screen"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.6,
            '--twinkle-duration': `${2 + Math.random() * 2}s`,
            '--float-duration': `${4 + Math.random() * 4}s`,
            animationDelay: `-${star.twinkleDelay}s`,
            // GPU acceleration
            transform: 'translateZ(0)',
            willChange: 'opacity, transform',
          } as React.CSSProperties}
        >
          <div
            className="absolute inset-0 rounded-full bg-white/50 animate-twinkle"
            style={{
              animationDelay: `-${star.twinkleDelay}s`,
            }}
          />
          <div
            className="absolute inset-0 rounded-full bg-accent-500/30 animate-float-star blur-[1px]"
            style={{
              animationDelay: `-${star.floatDelay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StarField;
