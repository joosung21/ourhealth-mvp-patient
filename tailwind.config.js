/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#DCDCDC',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: '2.5rem', fontWeight: '600', fontFamily: 'Roboto, sans-serif' },
        h2: {
          fontSize: '1.5rem',
          fontWeight: '600',
          fontFamily: 'Roboto, sans-serif',
          marginBottom: '1rem',
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: '600',
          fontFamily: 'Roboto, sans-serif',
          marginBottom: '.75rem',
        },
        h4: {
          fontSize: '1',
          fontWeight: '700',
          fontFamily: 'Roboto, sans-serif',
          marginBottom: '.5rem',
        },
        ol: { listStyleType: 'decimal' },
        ul: { listStyleType: 'disc' },
        li: { marginLeft: '1.5rem' },
      });
    }),
  ],
};
