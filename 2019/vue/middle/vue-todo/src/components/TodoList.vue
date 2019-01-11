<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:key="index">

        <span class="checkbtn" v-bind:class="{'checkbtn-completed' : todoItem.completed}" v-on:click="toggleComplete(index)">
          <i class="fas fa-check"></i>
        </span>

        <span class="" v-bind:class="{'text-completed' : todoItem.completed}">
          {{todoItem.item}}
        </span>

        <span class="removebtn" v-on:click="removeTodo(index)">
          <i class="fas fa-trash-alt"></i>
        </span>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  props : ['propsdata'],

  methods : {
    removeTodo : function(index){
      this.$emit('removeItem', index);
    },
    toggleComplete : function(index){
      this.$emit('toggleItem', index);
    },
  },
  
  created : function(){
    console.log(this.propsdata)
  },

}
</script>

<style scoped>

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
    cursor:pointer;
}
.checkbtn-completed{
  color : #b3adad;
}
.text-completed{
  text-decoration: line-through;
  color : #b3adad;
}
.removebtn{
  cursor: pointer;
  margin-left: auto;
  color: #de4343;
}

</style>
