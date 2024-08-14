import { APIURL } from "~/constants/apiUrl";

export interface DB_carrusel {
  id:number
}

export const useCarruselStore = defineStore('CarruselStore', {
    state: () => ({
      DB_carrusel:[] as DB_carrusel[]
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

      async obtenerImagenes(id:string|number){
        const data =  await (await fetch(`${APIURL}/post/files/${id}`)).json()
        return data
      },


    },
  });

  