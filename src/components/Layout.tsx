import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import StarField from './StarField';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Background Stars */}
      <StarField />
      
      {/* Desktop Navigation Menu */}
      <nav className="hidden md:block fixed top-4 lg:top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-glass-dark backdrop-blur-xl border border-white/10 shadow-glass-sm hover:shadow-glass transition-all duration-500">
          <ul className="flex justify-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative text-white/90 hover:text-accent-500 transition-colors duration-300 text-base lg:text-lg font-oregano group ${
                    location.pathname === item.path ? 'text-accent-500' : ''
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {location.pathname === item.path && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent-500"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-glass-dark backdrop-blur-xl border border-white/10 shadow-glass-sm"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed top-20 right-4 left-4 z-50 bg-glass-dark backdrop-blur-xl rounded-2xl border border-white/10 shadow-glass p-6"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`block px-4 py-3 rounded-lg text-white/90 hover:text-accent-500 transition-all duration-300 font-oregano text-lg ${
                          location.pathname === item.path 
                            ? 'text-accent-500 bg-accent-500/10 border border-accent-500/20' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
