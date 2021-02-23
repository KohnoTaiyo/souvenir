module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#afbab6',
        },
      },
      margin: {
        hn: '40vh',
        hj: '30vh',
      },
      padding: {
        pm: '56.25%',
      },
      height: {
        ha: '60vh',
      },
      inset: {
        lg: '10vw',
        xl: '25vw',
      },
      backgroundSize: {
        110: '110%',
        130: '130%',
        150: '150%',
        180: '180%',
        200: '200%',
        220: '220%',
        250: '250%',
        260: '260%',
      },
      animation: {
        shake: 'shake 2s infinite',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(2px, 0px)' },
          '5%': { transform: 'translate(-2px, 0px)' },
          '10%': { transform: 'translate(2px, 0px)' },
          '15%': { transform: 'translate(-2px, 0px)' },
          '20%': { transform: 'translate(2px, 0px)' },
          '25%': { transform: 'translate(-2px, 0px)' },
          '30%': { transform: 'translate(0px, 0px)' },
        },
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/hero02.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      animation: ['hover'],
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
          textShadow: '0px 0px 20px rgba(0,0,0,1)',
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
