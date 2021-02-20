module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#afbaba',
        },
      },
      margin: {
        hn: '37.5vh',
      },
      padding: {
        pm: '56.25%',
      },
      height: {
        ha: '40vh',
      },
      backgroundSize: {
        500: '100%',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/hero02.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.wrap': {
          width: '100%',
          padding: '3rem 5rem 4.5rem',
        },
        '.text-shadow': {
          textShadow: '0px 0px 4px rgba(0,0,0,.3)',
        },
        '.title': {
          fontSize: '2.5rem',
          fontWeight: '200',
          letterSpacing: '0.025rem',
          lineHeight: '1',
          marginBottom: '1.5rem',
        },
        '.andmore-position': {
          position: 'absolute',
          left: '8.5rem',
          right: '0',
          bottom: '1.20rem',
          height: '1px',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
