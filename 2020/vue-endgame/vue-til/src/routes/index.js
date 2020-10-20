import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerInfo = {
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/login',
        },
        {
            path : '/login',
            component : () => import('@/views/LoginPage.vue'),
        },
        {
            path : '/signup',
            component : () => import('@/views/SignupPage.vue'),
        },
        {
            path : '/main',
            component : () => import('@/views/MainPage.vue'),
        },
        {
            path : '*',
            component : () => import('@/views/NotFoundPage.vue'),
        },
    ],
}

const router = new VueRouter(routerInfo);

export default router;

export {
    routerInfo
}






