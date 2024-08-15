import { APIURL } from "~/constants/apiUrl";

export interface DB_carrusel {
  id:number
}

export const useCarruselStore = defineStore('CarruselStore', {
    state: () => ({
      DB_carrusel:[] as DB_carrusel[],
      toasts:{
        succes:0,
        info:0,
        error:0
      },
      count_reload:0
    }),
    getters: {
    },
    actions: {
      async optenerCarruselImages(){
        const { user, loggedIn, token } = await useJwtAuth();
        const response: any = await $fetch(`${APIURL}/images/carrusel`,{
          method:'GET',
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          }
        })
        this.DB_carrusel = response
      },

      async actualizarImagenesCarrusel({dataToSend}:{dataToSend:Object}){

        const { user, loggedIn, token } = await useJwtAuth();
        console.log(dataToSend)
        try {
          const response: any = await $fetch(`${APIURL}/images/carrusel`,{
            method:'PATCH',
            headers: {
              Authorization: `Bearer ${token.value}`,
              "Content-Type": "application/json",
            },
            body:JSON.stringify(dataToSend)
          })
          this.toasts.succes++
          this.count_reload++
        } catch (error) {
          console.error(error)
        }
      },

      async obtenerImagenes(id:string|number){
        const data =  await (await fetch(`${APIURL}/post/files/${id}`)).json()
        return data
      },


    },
  });

  