import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import useScrollOptimization from './hooks/useScrollOptimization';

function App() {
  useScrollOptimization();

  useEffect(() => {
    // Optimize rendering performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload critical resources during idle time
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = '/src/assets/profile.png';
        document.head.appendChild(link);
      });
    }

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
