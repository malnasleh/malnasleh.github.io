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
        warmBeige: '#FAF3EB'
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/Images/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
}

