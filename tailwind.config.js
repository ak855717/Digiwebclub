/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-slide-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
        'scroll-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(calc(-100% - 2rem))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-slide-in': 'fade-slide-in 0.5s ease-out forwards',
        'scroll': 'scroll 60s linear infinite',
        'scroll-slow': 'scroll 100s linear infinite',
        'scroll-reverse': 'scroll 60s linear infinite reverse',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
    },
    
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.mask-marquee': {
          '-webkit-mask-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))',
          'mask-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}