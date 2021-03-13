module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    fontFamily: {
      'serif': ['Mermaid', 'ui-serif'],
      'sans': ['Montserrat', 'ui-sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}
