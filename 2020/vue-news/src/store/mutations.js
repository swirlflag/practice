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
};

export default mutations;