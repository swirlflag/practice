import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {

  fetch(){
    const arr = [];
    if(localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        } 
      }
    }
    return arr;
  },// ~ fetch

};

export const store = new Vuex.Store({
  
  state : {
    todoItems : storage.fetch(),
    showModal : false,
    // modalText : {header : '', text : '',},
  }, // ~ state
  
  getters : {
    storedTodoItems(state) {
      return state.todoItems;
    },
    storedShowModal(state) {
      return state.showModal;
    },
    
  },

  mutations : {

    addOneItem(state, newItem) {
      const obj = {completed: false,item: newItem};
      localStorage.setItem(newItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },

    removeOneItem(state, payload){
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },

    toggleOneItem(state, payload){
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },

    removeAllItem(state){
      state.todoItems = [];
      localStorage.clear();
    },

  },// ~mutations

});