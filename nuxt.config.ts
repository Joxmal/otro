// https://nuxt.com/docs/api/configuration/nuxt-config

const imageLocation:any= "/images/tube-spinner.svg"

export default defineNuxtConfig({
  routeRules:{
    '/admin/**': { ssr: false },
  },

  runtimeConfig:{
    public:{
      NUXT_API_URL:'http://localhost:3009/api'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    'nuxt-jwt-auth', //<------
    'nuxt-lazy-load',
    '@morev/vue-transitions/nuxt',
    'nuxt-icon-tw',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    ['@pinia/nuxt',{
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
    ["@nuxtjs/tailwindcss",  {
      cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
      configPath: 'tailwind.config.js',
      exposeConfig: {
        level: 2
      },
      config: {},
      viewer: true,
    }],

  ],
swiper: {
  // Swiper options
  //----------------------
  // prefix: 'Swiper',
  // styleLang: 'css',
  // modules: ['navigation', 'pagination'], // all modules are imported by default
},
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,
    

    defaultImage: imageLocation,
  
    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
  nuxtJwtAuth: {
    baseUrl: 'http://localhost:3009/api', // URL of your backend
    endpoints: {
      login: '/auth', // Where to request login (POST)
      logout: '/logout', // Where to request logout (POST)
      user: '/user', // Where to request user data (GET)
      signup: '/signup' // Where to request signup (POST)
    },
    redirects: {
      home: '/admin/dasboard', // Where to redirect after successfull login and logout
      login: '/admin/login', // Where to redirect if user is not logged in and accesses a logged-only route
      logout: '/logout' // Where to redirect if user is logged in and accesses a guest-only route 
    }
  },
})