import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        userItems : {},
        itemInfo : {},
        list : {}
    },
    getters : {
        list : ({list}) => list,
        userItems : ({userItems}) => userItems,
        itemInfo : ({itemInfo}) => itemInfo,
    },
    mutations,
    actions,
});

export {
    store,
};