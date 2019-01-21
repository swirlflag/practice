<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>

import { fetchNewsList } from '../api/index.js';

export default {

  data(){
    return {
      users : []
    }
  },

  created(){
    fetchNewsList()
      .then(response => this.users = response.data)
      .catch(error => console.log(error));
  },

};

</script>

<style>

</style>
