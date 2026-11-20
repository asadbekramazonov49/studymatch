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
        slate: { 50:'#f6f6f2',100:'#ecece5',200:'#dcdcd2',300:'#c3c4b8',400:'#9a9c8f',500:'#6f7266',600:'#53564d',700:'#3d4039',800:'#272a25',900:'#1a1c19',950:'#111310' },
        // one accent: sage green
        violet: { 50:'#f0f6f2',100:'#dcebe1',200:'#bbd7c5',300:'#8fbba0',400:'#629a79',500:'#437e5d',600:'#356649',700:'#2c523c',800:'#254232',900:'#1f372a',950:'#0f1f17' },
        fuchsia: { 50:'#f0f6f2',100:'#dcebe1',200:'#bbd7c5',300:'#8fbba0',400:'#629a79',500:'#437e5d',600:'#356649',700:'#2c523c',800:'#254232',900:'#1f372a',950:'#0f1f17' },
      },
    },
  },
  plugins: [],
};
