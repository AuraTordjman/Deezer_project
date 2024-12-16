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
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        violet: '#A238FF', // Couleur Deezer 
        noir: '#000000',   
      },
    },
  },
  plugins: [],
};
