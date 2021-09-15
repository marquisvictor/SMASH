export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
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
  css: [],
  plugins: [],
  components: false,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-purge-icons-module',
    '@nuxtjs/device',
    '@nuxt/image',
    '@aceforth/nuxt-netlify',
    '@luxdamore/nuxt-humans-txt',
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxt/image',
    [
      'nuxt-social-meta',
      {
        url: 'geosmash.net',
        title: 'SMASH',
        site_name: 'SMASH',
        description: 'Spatial Multiscale Analytical Research Hub',
        img: 'SMASHLogo.svg',
        img_size: { width: '400', height: '400' },
        locale: 'en_US',
        twitter: '@GEOSMASH',
        twitter_card: 'summary_large_image',
        theme_color: '#4f46e5',
      },
    ],
  ],
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
        key: 'Undergraduate at',
        value: 'University of Maryland College Park',
      },
      {
        key: 'Website',
        value: 'www.tralka.xyz',
      },
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
