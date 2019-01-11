<template>
  <div class="clear-all-container shadow" v-on:click="clearTodo">
    <span class="clear-all-btn">Claer All</span>
  </div>
</template>

<script>

export default {
  methods : {
    clearTodo : function(){
      this.$emit('clearItem');
    }
  }
}

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
