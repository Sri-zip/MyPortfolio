/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'delius': ['Delius', 'cursive'],
        'oregano': ['Oregano', 'cursive'],
      },
      colors: {
        primary: {
          900: '#0A192F',
          800: '#112240',
          700: '#1E3851',
        },
        accent: {
          500: '#64FFDA',
          400: '#88FFEA',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(10, 25, 47, 0.7)',
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
        'neon': '0 0 5px theme(colors.accent.500), 0 0 20px theme(colors.accent.500)',
      },
    },
  },
  plugins: [],
};
