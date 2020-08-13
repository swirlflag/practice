import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewNews from '../views/ViewNews.vue';
import ViewAsk from '../views/ViewAsk.vue';
import ViewJobs from '../views/ViewJobs.vue';
import ViewItem from '../views/ViewItem.vue';
import ViewUser from '../views/ViewUser.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/news',
        },
        {
            path : '/news',
            component : ViewNews,
        },
        {
            path : '/ask',
            component : ViewAsk,
        },
        {
            path : '/jobs',
            component : ViewJobs,
        },
        {
            path : '/item',
            component : ViewItem,
        },
        {
            path : '/user',
            component : ViewUser,
        },


    ]
})

export {
    router,
}