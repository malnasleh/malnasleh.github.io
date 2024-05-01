/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        warmBeige: '#FAF3EB',
        // coral: '#FF5A5F',
        engineeringOrange: '#BC2C1A',
        lightSeaGreen: '#2EC4B6',
        africanViolet: '#B18FCF',
        lightCoral: '#FF5A5F',
        tyrianPurple: '#6A0136',
        lightTyrianPurple: '#C80466'
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/Images/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
}

