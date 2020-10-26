import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

const routerInfo = {
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '/main',
            component: () => import('@/views/MainPage.vue'),
            meta : { auth : true },
        },
        {
            path: '/add',
            component: () => import('@/views/PostAddPage.vue'),
            meta : { auth : true },
        },
        {
            path: '/post/:id',
            component: () => import('@/views/PostEditPage.vue'),
            meta : { auth : true },
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
}

const router = new VueRouter(routerInfo);

router.beforeEach((to,from,next) => {
    if(to.meta.auth && !store.getters.isLogin ){
        next('/login');
    }else {
        next();
    }
})

export default router;
