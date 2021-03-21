module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    minHeight: {
      live: '530px',
      video: '90vh',
      about: '60vh',
    },
    maxHeight: {
      img: '500px',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      screens: {
        '3xl': '1600px',
      },
      colors: {
        gray: {
          350: '#afbab6',
        },
      },
      width: {
        wj: '30rem',
      },
      margin: {
        hn: '42vh',
        hj: '31vh',
      },
      padding: {
        18: '4.5rem',
        pm: '56.25%',
      },
      height: {
        ha: '60vh',
        hb: '80vh',
        fu: '100%',
      },
      inset: {
        lg: '10vw',
        xl: '25vw',
        ot: '62px',
        ol: '67px',
        uvt: '51px',
        uvl: '90px',
        et: '49px',
        el: '135px',
        nt: '45px',
        nl: '159px',
        it: '40px',
        il: '188px',
        itt: '26px',
        itl: '190px',
        rt: '35px',
        rl: '195px',
      },
      backgroundSize: {
        110: '110%',
        130: '130%',
        140: '140%',
        150: '150%',
        180: '180%',
        200: '200%',
        220: '220%',
        250: '250%',
        260: '260%',
        300: '300%',
      },
      animation: {
        fadeH: 'fadeH .5s',
        fadeL: 'fadeL .5s',
        fadeR: 'fadeR 1s',
      },
      keyframes: {
        fadeH: {
          '0%': { height: '100%' },
          '50%': { height: 0 },
          '100%': { height: '100%' },
        },
        fadeL: {
          '0%': { transform: 'translateX(-120vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeR: {
          '0%': { opacity: 0 },
          '35%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: (theme) => ({
        'hero-pattern-sp': "url('/hero02_sp.jpg')",
        'hero-pattern-xl': "url('/hero02_xl.jpg')",
        'hero-pattern': "url('/hero02.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      height: ['responsive', 'hover', 'focus'],
      scale: ['hover'],
      animation: ['hover'],
      boxShadow: ['responsive'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.wrap-big': {
          width: '1200px',
          padding: '5rem 5rem 7rem',
          margin: '0 auto',
        },
        '.wrap': {
          width: '100%',
          padding: '5rem 5rem 7rem',
        },
        '.wrap-sp': {
          width: '100%',
          padding: '3rem 1.5rem 4rem',
        },
        '.text-shadow': {
          textShadow: '0px 0px 20px rgba(0,0,0,1)',
        },
        '.box-shadow': {
          boxShadow: '0px 0px 7px rgba(0,0,0,.2)',
        },
        '.title': {
          fontSize: '2.5rem',
          fontWeight: '200',
          letterSpacing: '0.025rem',
          lineHeight: '1',
          marginBottom: '3rem',
          textAlign: 'center',
        },
        '.andmore-position': {
          position: 'absolute',
          left: '8.5rem',
          right: '0',
          bottom: '1.20rem',
          height: '1px',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
