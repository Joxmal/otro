import { APIURL } from "~/constants/apiUrl";

export const useAdminCooperadorStore = defineStore('AdminCooperadorStore', {
    state: () => ({
      count_reload:0

      
    }),
    getters: {},
    actions: {
        async crearCooperador({ dataToSend }: { dataToSend: Object }){
            const { user, loggedIn, token } = await useJwtAuth();
            try {
                const response:any = await $fetch(`${APIURL}/cooperador`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${token.value}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                  });

                  this.count_reload++;
                  return response;   

            } catch (error) {
                console.error(error)
            }
        }
    },
  });