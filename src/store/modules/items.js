import Request from "./Request";
const ItemsModule = {
  namespaced: true,
  state: () => ({
    items: [],
  }),

  getters: {
    all(state) {
      return state.items;
    },
  },

  mutations: {
    SET_ITEMS(state, data) {
      state.items = data;
    },
  },
  actions: {
    fetchAll({ commit }) {
      return new Promise((resolve, reject) => {
        Request()
          .get("items")
          .then((response) => {
            commit("SET_ITEMS", response.data.data);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    postItem({ commit }, payload) {
      return new Promise((resolve, reject) => {
        Request()
          .post("items", payload)
          .then((response) => {
            console.log(response.data.data);
            commit("ADD_ITEM", response.data.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default ItemsModule;
