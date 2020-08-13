<style>
body {
    padding: 0;
    margin: 0;
}
</style>
<template>
  <div id="app">
      <Toolbar></Toolbar>
      <router-view></router-view>
  </div>
</template>

<script>

import Toolbar from './components/Toolbar.vue';

export default {
    components : {
        Toolbar
    }
}
</script>