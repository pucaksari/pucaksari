module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: []
  },
  theme: {
    fontFamily: {
      'serif': ['Mermaid', 'ui-serif'],
      'sans': ['Montserrat', 'ui-sans-serif']
    },
    colors: {
      black: '#1F1E1A',
      white: '#FFFFFF',
      red: '#E05038',
      green: '#377B70',
      gray: '#C4C4C4',
      brown: '#B37B6A'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            th: {
              color: '#ededed'
            },
            color: '#ededed',
            h1: {
              color: '#ededed'
            },
            h2: {
              color: '#ededed'
            },
            h3: {
              color: '#ededed'
            },
            h4: {
              color: '#ededed'
            },
            h5: {
              color: '#ededed'
            },
            h6: {
              color: '#ededed'
            },

          }
        }
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
