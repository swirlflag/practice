import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes : [
    {
      path : '/news',
      component: NewsView,
    },

    {
      path: '/ask',
      component: AskView,
    },
    
    {
      path: '/jobs',
      component: JobsView,
    },
  ],

});
