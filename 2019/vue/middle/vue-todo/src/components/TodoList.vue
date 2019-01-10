<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem">
        {{todoItem}}
        <!-- <button></button>    -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      todoItems : []
    }
  },
  created : function(){
    if(localStorage.length > 0 ){
      for(var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(localStorage.key(i));
        };
      };
    };
  },
}
</script>

<style>

ul{
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;  
}
li{
  display: flex;
  min-height: 50px;
  height : 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.checkbtn{
  line-height: 45px;
  color: #62acde;
  margin-right :5px;
}

</style>
