<template>
  <div class="inputbox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addcontainer" v-on:click="addTodo">
      <i class="fas fa-plus addbtn"></i>
    </span>
    <modal v-if="showModal">
      <h3 slot="header">
        <span>경고</span>
        <i class="fas fa-times close-modalbtn" v-on:click="showModal = false"></i>
      </h3>
      <p slot="body">텍스트를 입력해주세요.</p>
    </modal>
  </div>
  
</template>

<script>
import Modal from './common/Modal.vue'

export default {

  components : {
    'modal' : Modal,
  },

  data : function(){
    return {
      newTodoItem : "",
      showModal : false,
    }
  },
  methods : {
    addTodo : function(){
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      };
    },
    clearInput : function(){
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
.close-modalbtn{
  color: #42b983;
}

button{
  cursor: pointer;
}

</style>

<style scoped>
i{
  cursor: pointer;
}
</style>