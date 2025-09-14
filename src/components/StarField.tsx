import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const generateStars = () => {
      const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000); // Adjust density here
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
    };

    generateStars();

    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

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
