import { createStore } from 'vuex';

const itemsModule = {
    state: () => ({
        items: [],
    }),
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        removeItem(state, index) {
            state.items.splice(index, 1);
        },
        updateItem(state, { index, newItem }) {
            state.items[index] = newItem;
        },
    },
    actions: {
        async fetchItems({ commit }) {
            try {
                const response = await fetch('https://api.example.com/items');
                const data = await response.json();
                data.forEach(item => commit('addItem', item));
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        },
        addItem({ commit }, item) {
            commit('addItem', item);
        },
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        getItemByIndex: (state) => (index) => {
            return state.items[index];
        },
    },
};

const store = createStore({
    modules: {
        items: itemsModule,
    },
});

export default store;
