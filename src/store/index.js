import { createStore } from 'vuex'
import InvoicesModule from './modules/invoices';
import ItemsModule from './modules/items';
import AuthModule from './modules/auth'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    invoices: InvoicesModule,
    items: ItemsModule,
    auth: AuthModule
  }
})
