<template>
  <div>
    <p v-for="item in ask" :key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.user }}</small>
    </p>
  </div>  
</template>

<script>

import { mapState , mapGetters} from 'vuex';

export default {

  computed : {
    
    ...mapState(['ask']),

    // ...mapGetters({
    //   askItems : 'fetchedAsk'
    // }),
    
  },

  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  
}
</script>

<style>

</style>
