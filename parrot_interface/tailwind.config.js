/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#C5BBFF',  
        customBlue: '#8F7AFA',
        customDarkBlue: '#180B41',
        customBlack: '#1E1E1E',
        customGray: '#323232'
      },
      fontFamily: {
        'chakra': ['"Chakra Petch"', 'sans-serif'],
      },
    },
   
  },
  plugins: [],
}
