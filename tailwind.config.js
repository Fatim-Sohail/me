/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  purge: [],
  theme: {
    extend: {
      colors: {
        'charcoal': '#333333',
        'silver': '#bbbbbb',
        'crisp-white': '#ffffff',
        'gold': '#FFD700',
        'subtle-accent': '#003366', 
        'navy-blue': '#001f3f',
        'orange': '#FFA500',
        'green': '#00FF00',
        'magenta': '#FF00FF',
        'sky': '#87CEEB',
        'burgundy': '#800020',
        'maroon': '#800000',
        'coral': '#FF6B6B',
        'light-maroon': '#600000',
        'dark-burgundy': '#8B0000',
      },
    },
  },
  variants: {},
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(charcoal|silver|crisp-white|gold|subtle-accent|navy-blue|orange|green|magenta|sky|burgundy|maroon|coral|light-maroon|dark-burgundy)/,
    },
  ],
}

