<template>
  <div>
    <p v-for="item in jobs" :key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>

import { mapState , mapGetters} from 'vuex';

export default {

  computed : {

    ...mapState(['jobs']),

  },

  created(){
    this.$store.dispatch('FETCH_JOBS');
  },
  
};

</script>

<style>

</style>
