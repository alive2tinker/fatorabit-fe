import Request from './Request';
const InvoicesModule = {
    namespaced: true,
    state: () => ({
        invoices: []
    }),

    getters: {
        all(state){
            return state.invoices;
        },
        invoicesTotal(state) {
            return state.invoices.reduce((a, b) => a + parseFloat(b.total), 0);
        }
    },
    mutations: {
        SET_INVOICES(state, data){
            state.invoices = data;
        },
        ADD_INVOICE(state, data) {
            state.invoices.push(data);
        }
    },
    actions: {
        fetchInvoices({commit}){
            return new Promise((resolve, reject) => {
                Request().get('invoices').then((response) => {
                    commit('SET_INVOICES', response.data.data);
                    resolve();
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        //eslint-disable-next-line
        fetchInvoice({state},invoiceID){
            return new Promise((resolve, reject) => {
                Request().get(`invoices/${invoiceID}`).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })
            });
        },
        postInvoice({ commit }, payload) {
            return new Promise((resolve, reject) => {
                Request().post('invoices', payload).then((response) => {
                    commit('ADD_INVOICE', response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })
            })
        }
    }
}

export default InvoicesModule