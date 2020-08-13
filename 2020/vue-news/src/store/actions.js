import { 
    fetchNewsItems, fetchJobsItems, fetchAskItems,
} from '../api/index.js';

const actions = {
    FETCH_NEWS({commit}) {
        fetchNewsItems()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    },
    FETCH_JOBS({commit}) {
        fetchJobsItems()
            .then(({data}) => {
                commit('SET_JOBS' , data)
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    },
    FETCH_ASK({commit}) {
        fetchAskItems()
            .then(({data}) => {
                commit('SET_ASK' , data)
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    }
};

export default actions;