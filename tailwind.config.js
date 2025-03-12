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
      screens: {
        'xls': '360px',
        'lg15.6': '1536px',
        'lg14': '1280px'
      },
    },
  },
  variants:{
    transitionProperty: ['responsive', 'hover', 'focus', 'motion-safe', 'motion-reduce', 'none'],
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}