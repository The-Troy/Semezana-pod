/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#5C1414', // Deep Burgundy from "Semezana" text
          red: '#E02424',  // Bright Red from logo accent
          yellow: '#F59E0B', // Golden Yellow from logo accent
        }
      }
    },
  },
  plugins: [],
};
