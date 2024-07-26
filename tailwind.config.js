/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': '95%',
      },
      colors: {
        primary: 'rgb(46, 49, 146)',
        secondary: 'rgb(164,167,203)',
        third: 'rgb(97,100,166)',
        offwhite: '#FFFFE4',
      },
      fontFamily: {
        halyard: ['"halyard-text"', "sans-serif"],
        scandia: ['"scandia-web"', 'sans-serif'],
        oswald:['"Oswald"','sans-serif']
      },
      scale: {
        '120': '1.2',
        '150': '1.5',
      },
      fontSize:{
        'logo' :'18rem'
      },
      // backgroundImage: {
      //   'noise': 'repeating-radial-gradient(circle, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 100px)',
      // },
    },
  },
  plugins: [],
}
