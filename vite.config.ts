import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  base: '/',
  build: {
    // Optimize for modern browsers
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        },
        // Optimize chunk loading
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096,
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
    // Force optimization
    force: false
  },
  // Development server optimizations
  server: {
    hmr: {
      overlay: false
    },
    // Enable HTTP/2
    https: false
  },
  // CSS optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Optimize CSS processing
    }
  }
});
