import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const Home = () => {
  const navigate = useNavigate();

  // Memoize floating elements for better performance
  const floatingElements = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      id: i,
      top: `${10 + (i * 15)}%`,
      left: `${10 + (i * 15)}%`,
      delay: i * 0.3
    }))
  , []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
      {/* Enhanced Flowing Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-800/30 to-primary-900/50 animate-flow-y"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-accent-400/5 to-accent-500/10 animate-flow-x"></div>
        </div>

        {/* Shimmering overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-shimmer"></div>

        {/* Background floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 opacity-20 animate-float-slow" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
          <div className="absolute top-32 right-20 w-8 h-8 rounded-full bg-gradient-to-r from-accent-400 to-primary-400 opacity-20 animate-float" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
          <div className="absolute bottom-32 left-20 w-12 h-12 rounded-full bg-gradient-to-r from-secondary-400 to-accent-400 opacity-20 animate-float-slow" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
          <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-20 animate-float" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
          <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-gradient-to-r from-accent-400 to-secondary-400 opacity-20 animate-float-slow" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
          <div className="absolute top-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-r from-secondary-400 to-primary-400 opacity-20 animate-float" 
               style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
        </div>

        {/* Floating elements with inner glow - Responsive */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: element.delay }}
            style={{
              top: element.top,
              left: element.left,
              transform: 'translateZ(0)',
              willChange: 'transform, opacity',
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl animate-float-smooth opacity-5 bg-gradient-to-br from-accent-500/20 to-accent-400/20"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 md:mb-6 font-oregano leading-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 animate-gradient-nature relative"
                    style={{ transform: 'translateZ(0)', willChange: 'background-position' }}>
                Tejal Srivastava
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-accent-500/30 via-accent-400/30 to-accent-500/30 animate-pulse-subtle"></span>
              </span>
            </h1>
            <div className="absolute -inset-1 bg-accent-500/10 blur-2xl rounded-full"></div>
          </motion.div>
          
          <motion.h2
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-oregano mb-10 sm:mb-12 md:mb-8 relative px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative">Welcome to my creative space</span>
          </motion.h2>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6 px-4 max-w-lg sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/projects')} 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl sm:rounded-lg bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group relative overflow-hidden shadow-lg"
              style={{ transform: 'translateZ(0)' }}
            >
              <span className="relative z-10 font-medium text-base sm:text-base">View My Work</span>
              <span className="absolute inset-0 bg-accent-500/10 rounded-2xl sm:rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl sm:rounded-lg bg-glass-white backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden shadow-lg"
              style={{ transform: 'translateZ(0)' }}
            >
              <span className="relative z-10 font-medium text-base sm:text-base">Get in Touch</span>
              <span className="absolute inset-0 bg-white/5 rounded-2xl sm:rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
