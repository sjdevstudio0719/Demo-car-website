/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          bg: '#08111F',
          DEFAULT: '#0A1628',
          surface: '#111F33',
        },
        accent: {
          blue: '#2F80ED',
          light: '#56CCF2',
        },
        ink: {
          primary: '#F7F9FC',
          secondary: '#AAB4C3',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(47,128,237,0.25)',
        card: '0 10px 30px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top, rgba(47,128,237,0.15), transparent 60%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
