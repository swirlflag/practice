<template>
  <div class="inputbox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo" class="addbtn">add</button> -->
    <span class="addcontainer" v-on:click="addTodo">
      <i class="fas fa-plus addbtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem : ""
    }
  },
  methods : {
    addTodo : function(){
      localStorage.setItem(this.newTodoItem,this.newTodoItem);
      console.log(this.newTodoItem);

      this.newTodoItem = "";
    },
  },
}
</script>

<style scoped>

input:focus{
  outline:none;
}

.inputbox{
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputbox input{
  border-style : none;
  font-size: 1rem;
  height: 90%;
  font-size: 24px;
  line-height: 50px;
  width: 80%;
}
.addcontainer{
  float: right;
  background : linear-gradient(to right, #6478FB, #8763FB);
  display : block;
  width :3rem;
  border-radius: 0 5px 5px 0;  
  cursor: pointer;
}
.addbtn{
  color : #fff;
  vertical-align : middle;
}

</style>
