import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

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

        {/* Floating elements with inner glow - Responsive */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${10 + (i * 15)}%`,
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl animate-float-smooth opacity-10 bg-gradient-to-br from-accent-500/20 to-accent-400/20"></div>
              <div className="absolute inset-0 rounded-full animate-pulse-subtle" 
                   style={{
                     background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.1), transparent 70%)'
                   }}></div>
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
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 font-oregano leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 animate-gradient-nature relative">
                Tejal Srivastava
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-accent-500/30 via-accent-400/30 to-accent-500/30 animate-pulse-subtle"></span>
              </span>
            </h1>
            <div className="absolute -inset-1 bg-accent-500/10 blur-2xl rounded-full"></div>
          </motion.div>
          
          <motion.h2
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-oregano mb-8 sm:mb-12 relative px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative">Welcome to my creative space</span>
          </motion.h2>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/projects')} 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">View My Work</span>
              <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-glass-white backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">Get in Touch</span>
              <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
