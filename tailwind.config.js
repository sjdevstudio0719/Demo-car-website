/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        // Next Ride Brand Colors
        brand: {
          dark: '#1A1A1A',
          text: '#333333',
          accent: '#8B7D6B',
          cream: '#F4F2EC',
        },

        // Keep these aliases so existing components
        // don't immediately break while we redesign them.
        navy: {
          bg: '#F4F2EC',
          DEFAULT: '#F4F2EC',
          surface: '#F4F2EC',
        },

        accent: {
          blue: '#1A1A1A',
          light: '#8B7D6B',
        },

        ink: {
          primary: '#1A1A1A',
          secondary: '#333333',
        },
      },

      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },

      boxShadow: {
        card: '0 10px 30px rgba(26, 26, 26, 0.08)',
        soft: '0 4px 20px rgba(26, 26, 26, 0.06)',
      },

      backgroundImage: {
        'radial-fade':
          'radial-gradient(circle at top, rgba(139,125,107,0.10), transparent 60%)',
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },

  plugins: [],
}