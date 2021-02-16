module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      margin: {
        hn: '34vh',
      },
      lineHeight: {
        hn: '3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
