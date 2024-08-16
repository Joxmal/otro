import { APIURL } from "~/constants/apiUrl";

export const useAdminPostStore = defineStore("AdminPostStore", {
  state: () => ({
    count_reload: 0,
    actualizacion_exitosa:0
  }),
  getters: {},
  actions: {
    async CreatePost({ dataToSend }: { dataToSend: Object }) {
      const { user, loggedIn, token } = await useJwtAuth();

      const response: any = await $fetch(`${APIURL}/post`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(dataToSend),
      });

      this.count_reload++;
      return response;
    },

    async GetPost({ dataToSend='' }: { dataToSend?: string }) {
      const {token} = await useJwtAuth();
      const response: any = await $fetch(`${APIURL}/post${`/?token=${token.value}`}`, {
        method: "GET",
        query:{
          categoria: dataToSend
        }
      });

      console.log(response)
      return response;
    },

    async ActualizarPost({ dataToSend,id }: { dataToSend: Object, id:number }) {
      console.log('dataToSend',dataToSend)
      try {
        const { user, loggedIn, token } = await useJwtAuth();
        

        const response: any = await $fetch(`${APIURL}/post/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
          body: dataToSend,
        });
  
        this.count_reload++;
        this.actualizacion_exitosa++
        console.log(response)
        return response;
        
      } catch (error) {
        console.error(error)
      }
    },

    async cambiarEstadoPost({id,estadoActual}:{id:number,estadoActual:boolean}){
      const {token} = await useJwtAuth();
      try {
        const response: any = await $fetch(`${APIURL}/post/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          },
          body:{
            published: estadoActual
          }
        });
        this.count_reload++
        console.log(response)
        return response
      } catch (error) {
        console.error(error)
        
      }
    },

    async eliminarPost({id}:{id:number}){
      const confirmDelete = confirm('desea Eliminar este post')
      if(!confirmDelete) return

      const {token} = await useJwtAuth();
      try {
        const response: any = await $fetch(`${APIURL}/post/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          },
        });
        this.count_reload++
        console.log(response)
        return response
      } catch (error) {
        console.error(error)
        
      }
    }

  },
});
