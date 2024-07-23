// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    'nuxt-icon-tw',
    '@vueuse/nuxt',
    
    "@nuxtjs/tailwindcss", '@nuxtjs/color-mode', ['@pinia/nuxt',{
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    }
  ]
],

  tailwindcss:{
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})