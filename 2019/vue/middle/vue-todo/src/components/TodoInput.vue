<template>

<div>

  <div class="inputbox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addcontainer" v-on:click="addTodo">
      <i class="fas fa-plus addbtn"></i>
    </span>
  </div>


  <!-- <modal v-if="isOnModal">
    <h3 slot="header">
    <span>{{ modalData.header }}</span>
      <i class="fas fa-times close-modalbtn" v-on:click="isOnModal = false"></i>
    </h3>
    <p slot="body">{{ modalData.text }}</p>
  </modal> -->

</div>

</template>

<script>

import { mapGetters,mapState,mapMutations,mapActions } from 'vuex';

export default {

  components : {

  },

  computed : {
    ...mapState([
      'todoItems', 
      'isOnModal', 
      'modalText'
    ]),
  },

  data(){
    return {
      newTodoItem : "",
    }
  },

  methods : {
    
    addTodo(){
      if(this.hasItemCheck()){
        this.showModal({
          header : '중복 리스트',
          text : '이미 해당 내용의 리스트가 있습니다.',
        });
      }else if(this.newTodoItem == ''){
        this.showModal({
          header : '빈 입력창',
          text : '텍스트를 입력해주세요.',
        });
      }else{
        this.addOneItem(this.newTodoItem);
        this.clearInput();
      };
    },

    clearInput(){
      this.newTodoItem = "";
    },

    hasItemCheck(){
      for(var key of this.$store.state.todoItems){
        if(key.item == this.newTodoItem){
          return true;
        };
      };
      return false;
    },
    
    // modalProcess(header,text){
    //   this.modalData = {header : header, text : text};
    //   this.showModal = !this.showModal;
    // },

    ...mapMutations({
      showModal : 'showModal',
      addOneItem : 'addOneItem',
    }),

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
