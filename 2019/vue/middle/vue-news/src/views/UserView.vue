<template>
  <div>
    {{ this.$store.state.user.id }}
    {{ this.$store.state.user.karma }}
    {{ this.$store.state.user.created }}
  </div>
</template>

<script>

import axios from 'axios';

export default {
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}

</script>

<style>

</style>
