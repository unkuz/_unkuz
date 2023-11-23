// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "nuxt-lodash",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  tailwindcss: {
    cssPath: "~/scss/tw.scss",
  },
  css: ["~/scss/main.scss"],
  app: {
    head: {
      meta: [{ name: "theme-color", content: "#000" }],
    },
    pageTransition: { name: "page", mode: "default" },
    layoutTransition: { name: "layout", mode: "default" },
  },
  image: {
    format: ["webp"],
  },
});
