import { useEffect, useCallback } from 'react';

export const useScrollOptimization = () => {
  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navigation height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    // Prevent scroll jank on touch devices
    let ticking = false;
    
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Minimal scroll handling to prevent jank
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive scroll listener for better performance
    document.addEventListener('scroll', optimizeScroll, { passive: true });
    document.addEventListener('touchmove', optimizeScroll, { passive: true });

    // CSS-based smooth scrolling fallback
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.removeEventListener('scroll', optimizeScroll);
      document.removeEventListener('touchmove', optimizeScroll);
    };
  }, []);

  return { scrollToSection };
};

export default useScrollOptimization;
