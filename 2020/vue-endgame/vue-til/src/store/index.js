import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {

    state : {
        username : '',
    },

    getters : {
        isLogin (state) {
            return state.username !== '';
        }
    },

    mutations : {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
    },

};

export default new Vuex.Store(store);