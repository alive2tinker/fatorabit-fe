import Request from "./Request";

const NotesModule = {
  namespaced: true,
  state: () => ({
    notes: [],
  }),

  getters: {
    all(state) {
      return state.notes;
    },
  },
  mutations: {
    SET_NOTES(state, data) {
      state.notes = data;
    },
  },
  actions: {
    fetchAll({ commit }) {
      return new Promise((resolve, reject) => {
        Request()
          .get("notes")
          .then((response) => {
            commit("SET_NOTES", response.data);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default NotesModule;
