const ItemsModule = {
    namespaced: true,
    state: () => ({
        items: []
    }),

    getters: {
        all(state) {
            return state.items
        }
    }
}

export default ItemsModule