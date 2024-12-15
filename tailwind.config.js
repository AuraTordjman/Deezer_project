/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        violet: '#A238FF', // Couleur violette personnalisée
        noir: '#000000',   // Couleur noire
      },
    },
  },
  plugins: [],
};
