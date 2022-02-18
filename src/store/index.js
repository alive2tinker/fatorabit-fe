import { createStore } from 'vuex'
import InvoicesModule from './modules/invoices';
import ItemsModule from './modules/items';
import AuthModule from './modules/auth'
import NotesModule from './modules/notes';
import CustomersModule from "./modules/customers";
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
    auth: AuthModule,
    notes: NotesModule,
    customers: CustomersModule
  }
})
