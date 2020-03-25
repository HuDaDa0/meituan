import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        cart: [],
        editingAddress: {}
    },
    mutations: {
        setCart (state, goodsList) {
            state.cart = goodsList
        },
        clearCart (state) {
            state.cart = []
        },
        editAddress (state, address) {
            state.editingAddress = address
        },
        clearAddress (state) {
            state.editingAddress = {}
        }
    
    }
})

export default store











