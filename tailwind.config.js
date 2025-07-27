/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        flotar: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'}
        }
      },
      animation: {
        flotar: 'flotar 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

