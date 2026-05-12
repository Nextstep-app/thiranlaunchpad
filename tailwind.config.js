/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: {
          DEFAULT: '#FF1E1E',
          dark: '#8B0000',
          neon: '#FF3131',
        },
        surface: {
          DEFAULT: '#121212',
          lighter: '#1A1A1A',
        },
        accent: '#FFD700', // Small gold/neon accent if needed, but sticking to red
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 30, 30, 0.2), 0 0 10px rgba(255, 30, 30, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 30, 30, 0.6), 0 0 40px rgba(255, 30, 30, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
