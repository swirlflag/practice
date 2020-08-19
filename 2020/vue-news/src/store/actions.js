import { 
     fetchUserInfo, fetchItemInfo , fetchList
} from '../api/index.js';

const actions = {

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
    },
    FETCH_LIST({commit} , pageName) {
        fetchList(pageName)
            .then((response) => {
                commit("SET_LIST" , response.data) 
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    }
};

export default actions;