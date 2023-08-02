/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlack: '#000001',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}