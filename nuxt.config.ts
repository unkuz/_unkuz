// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/device",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    // "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    // "nuxt-typed-router",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@nuxt/image",
    "nuxt-svgo",
  ],
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: ["~/scss/main.scss"],
  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#000" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        {
          name: "description",
          content: "Unkuz - Web developer based in Vietnam",
        },
      ],
    },
    pageTransition: { name: "page", mode: "default" },
    layoutTransition: { name: "layout", mode: "default" },
  },
  site: {
    name: "Unkuz",
  },
});
