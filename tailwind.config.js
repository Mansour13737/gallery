// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          'grow-shrink': {
            '0%': { height: '5rem' },         // h-20
            '50%': { height: '100vh' },       // full height
            '100%': { height: '5rem' },       // back to h-20
          },
        },
        animation: {
          'grow-shrink': 'grow-shrink 10s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  }

