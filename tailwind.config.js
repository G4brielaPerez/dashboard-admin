/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F9F9F9',
        'blue': '#3C91E6',
        'light-blue': '#CFE8FF',
        'grey': '#EEE',
        'dark-grey': '#AAAAAA',
        'dark': '#342E37',
        'red': '#DB504A',
        'yellow': '#FFCE26',
        'light-yellow': '#FFF2C6',
        'orange': '#FD7238',
        'light-orange': '#FFE0D3',
      }
    },
  },
  plugins: [],
}

