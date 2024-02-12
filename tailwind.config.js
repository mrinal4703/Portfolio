/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'none': 'none',
      },
      colors: {
        customBlack: '#000001',
      },
    },
  },
  variants:{
    transitionProperty: ['responsive', 'hover', 'focus', 'motion-safe', 'motion-reduce', 'none'],
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}