export default defineNuxtPlugin( async(nuxtApp) => {
    const { token, loggedIn } = await useJwtAuth();
    const APIURL = useRuntimeConfig().public.NUXT_API_URL

    const url = `${APIURL}/post${token.value ? `/?token=${token.value}` : ''}`
  
    const api = $fetch.create({
      baseURL: url,
      async onResponseError({ response }) {
        if (response.status === 401) {
        //   await nuxtApp.runWithContext(() => navigateTo('/login'))
        console.log(response)
        }
      }
    })
  
    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
  