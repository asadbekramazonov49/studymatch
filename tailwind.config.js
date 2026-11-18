/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        // warm paper / ink neutrals
        slate: { 50:'#f7f4ee',100:'#efebe3',200:'#e2ddd2',300:'#cbc4b5',400:'#a39b8a',500:'#7a7365',600:'#5c5649',700:'#443f35',800:'#2c2923',900:'#1d1b17',950:'#12110e' },
        // one accent: clay
        violet: { 50:'#fdf3ef',100:'#fbe3d9',200:'#f6c5b1',300:'#ee9f80',400:'#e27650',500:'#d4552d',600:'#b9441f',700:'#98371a',800:'#7c2f1a',900:'#662a19',950:'#38130a' },
        fuchsia: { 50:'#fdf3ef',100:'#fbe3d9',200:'#f6c5b1',300:'#ee9f80',400:'#e27650',500:'#d4552d',600:'#b9441f',700:'#98371a',800:'#7c2f1a',900:'#662a19',950:'#38130a' },
      },
    },
  },
  plugins: [],
};
