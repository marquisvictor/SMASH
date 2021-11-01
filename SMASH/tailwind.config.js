module.exports = {
  purge: {
    options: {
      purge: {
      }
    },
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Chillax-Regular']
      // },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'),],
}
