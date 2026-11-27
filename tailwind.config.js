/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // warm paper / ink neutrals
        slate: { 50:'#f5f7fc',100:'#eceff8',200:'#dce2ef',300:'#c0c9dd',400:'#8e9ab4',500:'#626f8a',600:'#485470',700:'#363f58',800:'#222a3f',900:'#151a2b',950:'#0c1020' },
        // one accent: cobalt blue
        violet: { 50:'#eef3ff',100:'#dde7ff',200:'#bfd0ff',300:'#92aeff',400:'#6182ff',500:'#3d5cfa',600:'#2a43e8',700:'#2433c2',800:'#22319a',900:'#212f7a',950:'#141b48' },
        fuchsia: { 50:'#eef3ff',100:'#dde7ff',200:'#bfd0ff',300:'#92aeff',400:'#6182ff',500:'#3d5cfa',600:'#2a43e8',700:'#2433c2',800:'#22319a',900:'#212f7a',950:'#141b48' },
      },
    },
  },
  plugins: [],
};
