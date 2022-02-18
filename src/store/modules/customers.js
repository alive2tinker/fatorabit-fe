import Request from './Request';

const CustomersModule = {
    namespaced: true,
    state: () => ({
        customers:[]
    }),

    mutations: {
        SET_CUSTOMERS(state, data) {
            state.customers = data;
        }
    },
    actions: {
        fetchAll({ commit }) {
            return new Promise((resolve, reject) => {
                Request().get('customers').then((response) => {
                    commit('SET_CUSTOMERS', response.data);
                    resolve()
                }).catch((error) => {
                    reject(error);
                })
            })
        }
    },
    getters: {
        all(state) {
            return state.customers
        }
    }
}

export default CustomersModule