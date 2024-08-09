import { APIURL } from "~/constants/apiUrl";

export const useAdminPostStore = defineStore("AdminPostStore", {
  state: () => ({
    count_reload: 0,
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

    async GetPost({ dataToSend }: { dataToSend: Object }) {
      const { user, loggedIn, token } = await useJwtAuth();
      const response: any = await $fetch(`${APIURL}/post/${token}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(dataToSend),
      });

      this.count_reload++;
      return response;
    },

  },
});
