<template>
  <ul class="news-list">
    <li  class="post" v-for="item in listItems" :key="item.id">
    <!-- 포인트 영역 -->
    <div class="points">
      {{ item.points || 0 }}
    </div>
    <div>
      <!-- 타이틀 입력 -->
      <p class="news-title">

        <template v-if="item.domain">
          <a v-bind:href="item.url" target="_blank">
            {{ item.title }}
          </a>
        </template>
        <template v-else>
          <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
          </router-link>
        </template>

      </p>

      <small class="link-text">
        {{ item.time_ago }} by 
        <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text"> 
          {{ item.user }} 
        </router-link>  	
        <a v-bind:href="item.url" v-else>
          {{ item.domain }}
        </a>
      </small>

    </div>
    </li>
  </ul>
</template>

<script>

export default {

  data(){
    return {
      name : '',
    }
  },

  computed : {
    listItems(){    
      return this.$store.list;

      if(this.name == 'news'){
        return this.$store.state.news;
      }else if(this.name == 'ask'){
        return this.$store.state.ask;
        
      }else if(this.name == 'jobs'){
        return this.$store.state.jobs
      };
    },
  },

  created(){    
    this.name = this.$route.name;
    let fetchName = '';
    if(this.name == 'news'){
      fetchName = 'FETCH_NEWS';
    }else if(this.name == 'ask'){
      fetchName = 'FETCH_ASK';
    }else if(this.name == 'jobs'){
      fetchName = 'FETCH_JOBS';
    }
    // this.$store.dispatch(fetchName);
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
