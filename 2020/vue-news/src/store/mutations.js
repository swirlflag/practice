const mutations = {
    SET_NEWS (state,news){
        state.newsItems = news;
    },
    SET_JOBS(state,jobs) {
        state.jobsItems = jobs;
    },
    SET_ASK(state, ask) {
        state.askItems = ask;
    },
    SET_USER(state, user) {
        state.userItems = user;
    },
    SET_ITEM(state, item) {
        state.itemInfo = item;
    }
};

export default mutations;