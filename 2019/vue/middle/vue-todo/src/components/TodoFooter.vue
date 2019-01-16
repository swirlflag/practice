<template>
<div>
  <div class="clear-all-container shadow" v-on:click="clearCheckTodo">
    <span class="clear-all-btn">Claer All</span>
  </div>
</div>

</template>

<script>

import { mapGetters,mapState,mapMutations,mapActions } from 'vuex';

export default {

  computed : {
    ...mapState(['todoItems', 'isOnModal', 'modalText']),
    ...mapGetters(['storedTodoItems']),
  },

  methods : {
    clearCheckTodo(){
      if(this.$store.state.todoItems.length){
        this.clearTodo();
      }else{
        this.showModal({
          header : '항목 없음',
          text : '삭제할 리스트가 없습니다.',
        });
      };
    },    

    ...mapMutations({
      clearTodo : 'removeAllItem',
      showModal : 'showModal',
    }),

  }, // ~metods

} //~ export

</script>

<style scoped>
.clear-all-container{
  width : 8.5rem;
  height:  50px;
  line-height: 50px;
  background : #fff;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.clear-all-btn{
  color: #e20303;
  display: block;
}
</style>
