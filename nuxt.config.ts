// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-lodash',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  components: {
    dirs: ['~/components', '~/composables', '~/ctx', '~/utils'],
  },
  tailwindcss: {
    cssPath: '~/scss/tw.scss',
  },
  css: ['~/scss/main.scss'],
  pwa: {
    /* your pwa options */
  },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#000' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
        {
          name: 'description',
          content: 'Unkuz - Web developer, Music Producer based in Vietnam',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'default' },
    layoutTransition: { name: 'layout', mode: 'default' },
  },
  image: {
    format: ['webp'],
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  plugins:[
    { src: '~/plugins/scrollbar', mode: 'client' }
  ]
});
