/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "over": ["Overpass"],
        "ubu": ["Ubuntu"],
      },
      colors: {
        'red-header': 'hsl(356, 100%, 66%)',
        'red-background': 'hsl(355, 100%, 74%)',
        'red-button': '#f98585',
        'text-blue': 'hsl(237, 17%, 21%)',
        'purple-state': 'hsl(237, 23%, 42%)',
        'footer': 'hsl(240, 10%, 16%)',
        'footer-text': 'hsl(240, 2%, 79%)'
      },
    },
  },
  plugins: [],
}

