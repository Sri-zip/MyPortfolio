import { useEffect, useState, useMemo } from 'react';

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
  const [isVisible, setIsVisible] = useState(true);

  // Reduce stars for better performance
  const starCount = useMemo(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
    // Reduce density significantly
    return Math.min(Math.floor((width * height) / 20000), 50); // Max 50 stars
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5, // Smaller stars
          twinkleDelay: Math.random() * 3,
          floatDelay: Math.random() * 6,
        });
      }
      
      setStars(newStars);
    };

    generateStars();

    // Debounce resize
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generateStars, 300);
    };

    window.addEventListener('resize', handleResize);
    
    // Pause animations when tab is not visible
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(resizeTimeout);
    };
  }, [starCount]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white/40 transition-opacity duration-300 ${
            isVisible ? 'animate-twinkle' : 'opacity-20'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--twinkle-duration': `${3 + Math.random()}s`,
            animationDelay: `-${star.twinkleDelay}s`,
            willChange: isVisible ? 'opacity, transform' : 'auto',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarField;
