import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginUserId: ''
    },
    mutations: {
        user(state, id) {
            state.loginUserId = id;
        }
    },
    actions: {
        login(context, args) {
            context.commit("user", args)
        }
    }
})
