// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL
    }
  },
  nitro: {
    devProxy: {
        '/api': {
            target: process.env.API_URL,
            changeOrigin: true
        }
    }
},
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ]
})
