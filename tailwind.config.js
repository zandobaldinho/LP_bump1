/** @type {import('tailwindcss').Config} */
// Espelha a config que antes ficava inline no index.html (cores/fontes da marca).
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#D4FF1A',
          dark: '#0d0b08',
          gray: '#1a1612',
        },
      },
    },
  },
  plugins: [],
};
