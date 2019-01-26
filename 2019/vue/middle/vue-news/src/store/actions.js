import { 
  fetchNewsList , 
  fetchAskList , 
  fetchJobsList , 
  fetchUserInfo , 
  fetchItemInfo ,
  fetchList ,
} from '../api/index.js';

export default {
      
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  
  FETCH_ASK( context ){
    fetchAskList()
      .then((response) => {
        context.commit('SET_ASK', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },

  FETCH_JOBS(context ){
    fetchJobsList()
      .then((response) => {
        context.commit('SET_JOBS', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },

  FETCH_USER(context, name){
    fetchUserInfo(name)
      .then((response) => {
        context.commit('SET_USER', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },

  FETCH_ITEM(context, item){
    fetchItemInfo(item)
      .then((response) => {
        context.commit('SET_ITEM', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },

  FETCH_LIST(context, pageName){
    fetchList(pageName)
    .then((response)=> {
      context.commit('SET_LIST', response.data);
      // return response;
    })
    .catch(error => console.log(error));
  },

};