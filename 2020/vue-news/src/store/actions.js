import { 
    fetchNewsItems, fetchJobsItems, fetchAskItems, fetchUserInfo, fetchItemInfo
} from '../api/index.js';

const actions = {
    FETCH_NEWS({ commit }) {
        fetchNewsItems()
            .then(({ data }) => {
                commit('SET_NEWS', data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    },
    FETCH_JOBS({ commit }) {
        fetchJobsItems()
            .then(({ data }) => {
                commit('SET_JOBS' , data)
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    },
    FETCH_ASK({ commit }) {
        fetchAskItems()
            .then(({data}) => {
                commit('SET_ASK' , data);
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(({data}) => {
                commit('SET_USER' , data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    },
    FETCH_ITEM({ commit } , id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM' , data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    }
};

export default actions;