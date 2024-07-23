// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      NUXT_API_URL:'http://[::1]:3009/api'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    'nuxt-icon-tw',
    '@vueuse/nuxt',
    'nuxt-swiper',
    "@nuxtjs/tailwindcss", '@nuxtjs/color-mode', ['@pinia/nuxt',{
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    }
  ]
],
swiper: {
  // Swiper options
  //----------------------
  // prefix: 'Swiper',
  // styleLang: 'css',
  // modules: ['navigation', 'pagination'], // all modules are imported by default
},

  tailwindcss:{
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})