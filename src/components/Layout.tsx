import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from './StarField';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Background Stars */}
      <StarField />
      
      {/* Navigation Menu */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="px-8 py-4 rounded-full bg-glass-dark backdrop-blur-xl border border-white/10 shadow-glass-sm hover:shadow-glass transition-all duration-500">
          <ul className="flex space-x-10">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Skills', path: '/skills' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative text-white/90 hover:text-accent-500 transition-colors duration-300 text-lg font-oregano group ${
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
