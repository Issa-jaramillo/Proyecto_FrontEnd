/** @type {import('tailwindcss').Config} */
//export default {
//  content: [],
// theme: {
//    extend: {},
//  },
//  plugins: [],
//}

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Esto incluye todos los archivos en la carpeta src
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
