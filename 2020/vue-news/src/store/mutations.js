const mutations = {

    SET_USER(state, user) {
        state.userItems = user;
    },
    SET_ITEM(state, item) {
        state.itemInfo = item;
    },
    SET_LIST(state, list) {
        state.list = list
    }
};

export default mutations;