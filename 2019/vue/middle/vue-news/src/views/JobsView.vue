<template>
  <div>
    <ul class="news-list">
      <li  class="post" v-for="item in jobs" :key="item.id">
      <div class="points">
        {{ item.points || 0}}
      </div>
      <div>
        <p class="news-title">
          <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by 
          <a v-bind:href="item.url" target="_blank" class="link-text"> {{ item.domain }} </a>  	
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

    ...mapState(['jobs']),

  },

  created(){
    this.$store.dispatch('FETCH_JOBS');
  },
  
};

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
