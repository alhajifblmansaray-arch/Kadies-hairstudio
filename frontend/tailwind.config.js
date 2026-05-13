/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'khs-gold': { DEFAULT: '#D4AF37', light: '#E5C76B', dark: '#B8962D' },
        'khs-green': { DEFAULT: '#2E4A33', light: '#3D6344', dark: '#1F3323' },
        'khs-black': { DEFAULT: '#121212', light: '#1a1a1a' },
        'khs-cream': { DEFAULT: '#F5F0E8', dark: '#E8E0D4' },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
