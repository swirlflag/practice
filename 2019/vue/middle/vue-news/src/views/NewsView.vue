<template>
  <div>
    <ul class="news-list">
      <li  class="post" v-for="item in news" :key="item.id">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link>  	
      </small>
      </li>
    </ul>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {

  computed : {
    
    ...mapState(['news']),

  },

  created(){
    this.$store.dispatch('FETCH_NEWS');
  },

};

</script>

<style scoped>
.news-list{
  padding: 0;
  margin: 0;
}
.post{
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
