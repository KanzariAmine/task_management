/** @type {import('tailwindcss').Config} */
const tailwindColors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...tailwindColors, main: '#f3f4f6', error: '#f64949fe' },
    },
  },
  plugins: [],
};
