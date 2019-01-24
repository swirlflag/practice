<template>
  <div>
    <ul class="news-list">
      <li  class="post" v-for="item in ask" :key="item.id">
      <div class="points">
        {{ item.points }}
      </div>
      <div>
        <p class="news-title">
          <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link>  	
        </small>
      </div>
      </li>
    </ul>
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
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>
