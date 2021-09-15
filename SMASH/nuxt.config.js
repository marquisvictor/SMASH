export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SMASH',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purge-icons-module',
    '@nuxtjs/device',
    '@nuxt/image',
    '@aceforth/nuxt-netlify',
    '@luxdamore/nuxt-humans-txt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/markdownit', '@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
  },
  markdownit: {
    runtime: true, // Support `$md()`
  },
  purgeIcons: {},
  image: {},
  netlify: {
    mergeSecurityHeaders: true,
    headers: {
      '/favicon.ico': ['Cache-Control: public, max-age=86400']
    },
    redirects: [
      {
        from: '/about',
        to: '/',
        status: 302,
        force: true,
      },
    ],
  },
  humansTxt: {
    enabled: true,
    hideGenericMessagesInConsole: false,
    hideErrorsInConsole: false,
    keepDevelopersInformations: false,
    thanksTo: [
      {
        key: 'Matthew Tralka',
        value: 'Designer & Developer',
      },
      {
        key: 'Undergraduate',
        value: 'University of Maryland College Park',
      },
      'www.tralka.xyz',
      false,
    ],
    site: [
      'SITE',
      {
        key: 'Last update',
        value: new Date().toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        }),
      },
    ],
  },
}
