import { useRouter } from 'vue-router';

export default defineNuxtRouteMiddleware(async(to, from) => {
  const cookieName = 'nuxt-jwt-auth-token';
  const cookie:any = useCookie(cookieName);


  // Verificamos si la cookie existe
  if (cookie.value) {
    const token = cookie.value.token

    // Decodificamos el token JWT
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      console.error(tokenParts)
      console.error('Token JWT no válido');
      return;
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    const exp = payload.exp; // Tiempo de expiración en formato Unix
    
    // Comparamos el tiempo de expiración con el tiempo actual
    const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en formato Unix

    if (currentTime >= exp) {

      const { $jwtAuth } = useNuxtApp()
      await $jwtAuth.logout()
      await useRouter().push('/admin/login');   
      console.log('el token ha expirado.');
    }
  }
})
