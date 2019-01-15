<template>
<div>

  <div class="clear-all-container shadow" v-on:click="clearTodo">
    <span class="clear-all-btn">Claer All</span>
  </div>

  <modal v-if="showModal">
    <h3 slot="header">
      <span>빈 리스트</span>
      <i class="fas fa-times close-modalbtn" v-on:click="showModal = false"></i>
    </h3>
    <p slot="body">삭제할 리스트가 없습니다.</p>
  </modal>

</div>

</template>

<script>

import { mapGetters,mapState,mapMutations,mapActions } from 'vuex';

import Modal from './common/Modal.vue'

export default {

  components : {
    'modal' : Modal
  },

  data(){
    return {
      showModal : false,
    }
  },

  methods : {
    clearTodo(){
      if(this.$store.state.todoItems.length){
        this.$store.commit('removeAllItem', this.showModal);
      }else{
        this.showModal = !this.showModal;
      }
    },    

    // 이거 map하려다가 중단
    // ...mapMutations({
    //   clearTodo : 'removeAllItem',
    // })

  },

  computed : {
    ...mapState(['todoItems']),
    ...mapGetters(['storedTodoItems']),
  },

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
