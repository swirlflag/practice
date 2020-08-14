import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        newsItems : [],
        jobsItems : [],
        askItems : [],
        userItems : {},
        itemList : {},
    },
    getters : {
        askItems : ({askItems}) => askItems,
        newsItems : ({newsItems}) => newsItems,
        jobsItems : ({jobsItems}) => jobsItems,
        userItems : ({userItems}) => userItems,
        itemList : ({itemList}) => itemList,
    },
    mutations,
    actions,
});

export {
    store,
};