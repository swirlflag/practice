import { 
     fetchUserInfo, 
     fetchItemInfo , 
     fetchList , 
     fetchNewsList, 
     fetchAskList, 
    //  fetchAskList , 
    //  fetchJobsList , 
} from '../api/index.js';

const actions = {

    FETCH_USER({ commit }, username) {
        return fetchUserInfo(username)
            .then(({data}) => {
                commit('SET_USER' , data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    },
    FETCH_ITEM({ commit } , id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM' , data);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    },

    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    async FETCH_ASK(context){
        const response = await fetchAskList();
        context.commit('SET_ASK' , response.data);
        return response;
    },
    
    async FETCH_LIST(context , pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;    
    },

};

export default actions;