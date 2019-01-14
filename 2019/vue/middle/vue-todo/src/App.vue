<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem" v-bind:propsdata="todoItems"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearItem="clearAllItem" v-bind:propsdata="todoItems"></todo-footer>
  </div>
</template>

<script>

import TodoHeader from './components/Todoheader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  components : {
    'todo-header' : TodoHeader,
    'todo-input' : TodoInput,
    'todo-list' : TodoList,
    'todo-footer' : TodoFooter,
  },

  data(){
    return {
      todoItems : []
    }
  },

  methods : {
    addOneItem(newItem){
      const obj = {completed : false, item : newItem};
      localStorage.setItem(newItem,JSON.stringify(obj))
      this.todoItems.push(obj);
    },
    removeOneItem(index){
      localStorage.removeItem(this.todoItems[index].item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(this.todoItems[index].item,JSON.stringify(this.todoItems[index]));    
    },
    clearAllItem(){
      this.todoItems = [];   
      localStorage.clear();
    },

  },

  created(){
    if(localStorage.length > 0 ){
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
      };
    };
  },

}

</script>

<style>

body{
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width : 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
.fas.fa-times{
  cursor: pointer;
}

</style>
