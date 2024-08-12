import { APIURL } from "~/constants/apiUrl";

export interface DBCooperadores {
  id:         number;
  tipoCedula: string;
  cedula:     number;
  nombre:     string;
  ubicacion:  string;
  tipo:       string;
}

export const useAdminCooperadorStore = defineStore("AdminCooperadorStore", {
  state: () => ({
    count_reload: 0,
    DB_cooperadores:[] as DBCooperadores[]
  }),
  getters: {},
  actions: {
    async crearCooperador({ dataToSend }: { dataToSend: Object }) {
      const { user, loggedIn, token } = await useJwtAuth();

      const response: any = await $fetch(`${APIURL}/cooperador`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      this.count_reload++;
      return response;
    },

    async optenerCooperador(){
        const { user, loggedIn, token } = await useJwtAuth();
        const response: any = await $fetch(`${APIURL}/cooperador`,{
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          }
        })
        this.DB_cooperadores = response
    },

    async eliminarCooperador(id:number): Promise<void>{
      try {
        const { user, loggedIn, token } = await useJwtAuth();
        const response: any = await $fetch(`${APIURL}/cooperador${`/${id}`}`,{
          method:'DELETE',
          headers: {
            Authorization: `Bearer ${token.value}`,
          }
        })
        console.log(response)
      } catch (error) {
        console.error(error)
      }
  },
  },
});
