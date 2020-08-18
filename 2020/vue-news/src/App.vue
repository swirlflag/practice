<template>
  <div id="app">
      <Toolbar></Toolbar>
      <transition name="page">
          <router-view></router-view>
      </transition>
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

<style>
body {
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
    color: #34495e;
}
a:hover {
    color: #42b883;
    text-decoration: underline;
}
a.router-link-exact-active {
    text-decoration: underline;
}
.page-enter-active , .page-leave-active {
    transition: opacity 0.5s ease;
}
.page-enter , .page-leave-to {
    opacity: 0;
}
</style>