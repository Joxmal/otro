import { APIURL } from "~/constants/apiUrl";

export interface Categorias {
  id:   number;
  name: string;
}

export const useCategoriaStore= defineStore("CrearCategoriaStore", {
  state: () => ({
    count_reaload:0


  }),
  getters: {},
  actions: {
    async crearCategoria({ dataToSend }: { dataToSend: Object }) {
      const { user, loggedIn, token } = await useJwtAuth();
      try {
        const response = await $fetch(`${APIURL}/categorias`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        
        const data = await response
        console.log(data)
        this.count_reaload++
        return response;
        
      } catch (error) {
        if (error) {
          console.error("Error al enviar datos:", error);
        }
      }
    },

    async obtenerCategoria({ dataSearch='' }: { dataSearch?: string }) {
      const { user, loggedIn, token } = await useJwtAuth();
      try {
        const response = await  $fetch<Categorias[]>(`${APIURL}/categorias/${dataSearch}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          }
        });
        return response;
      } catch (error) {
        if (error) {
          console.error("Error al enviar datos:", error);
        }
      }
    },

    async EliminarCategoria({ dataSearch='' }: { dataSearch?: string }) {

      if(dataSearch === '') return

      const { user, loggedIn, token } = await useJwtAuth();
      try {
        
        const response = await  $fetch<Categorias[]>(`${APIURL}/categorias/${dataSearch}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.value}`,
          }
        });

        this.count_reaload++
        return response;
      } catch (error) {
        if (error) {
          console.error("Error al enviar datos:", error);
        }
      }
    },
  },
});
