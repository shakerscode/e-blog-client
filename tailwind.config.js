/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html }",
  ],
  module: {
     
  },  
  theme: {
    colors: {
      primary: '#14b8a6',
      secondary: '#f97316', 
      red: '#f87171',
      deepRed: 'rgb(255, 50, 50)',
      blue: 'rgb(10, 132, 255)',
      black: '#222222',
      gray: '#8B929E',
      white: '#ffffff',
      light: '#f1f5f9',
      bgLight: 'rgba(174, 173, 173, 0.763)',
      bgLightBlack: 'rgba(41, 40, 40, 0.445)',
    },
    extend: {},
  },
  plugins: [],
}
