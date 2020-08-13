import Vue from 'vue'
import { router } from './router/index.js';
import { store } from './store/index.js';
import App from './App.vue'

Vue.config.productionTip = false;

const vueApp = new Vue({
    render: h => h(App),
    router,
    store,
});

vueApp.$mount('#app');
