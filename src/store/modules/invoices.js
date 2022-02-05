const InvoicesModule = {
    namespaced: true,
    state: () => ({
        invoices: []
    }),

    getters: {
        all(state){
            return state.invoices;
        }
    },
    mutations: {},
    actions: {}
}

export default InvoicesModule