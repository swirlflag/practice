import Vue from 'vue';
import VueRouter from 'vue-router';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

import ViewNews from '../views/ViewNews.vue';
import ViewAsk from '../views/ViewAsk.vue';
import ViewJobs from '../views/ViewJobs.vue';
import ViewItem from '../views/ViewItem.vue';
import ViewUser from '../views/ViewUser.vue';
// import CreateListView from '../views/CreateListView.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
        },
        // {
        //     path : '/news',
        //     name : 'news',
        //     component : CreateListView('ViewNews'),
        // },
        // {
        //     path : '/ask',
        //     name : 'ask',
        //     component : CreateListView('ViewAsk'),
        // },
        // {
        //     path : '/jobs',
        //     name : 'jobs',
        //     component : CreateListView('ViewJobs'),
        // },
        {
            path : '/news',
            name : 'news',
            component : ViewNews,
            beforeEnter : (to,from,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST' , to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                ;

            }
        },
        {
            path : '/ask',
            name : 'ask',
            component : ViewAsk,
            beforeEnter (to,from,next) {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST' , to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                ;
            }
        },
        {
            path : '/jobs',
            name : 'jobs',
            component : ViewJobs,
            beforeEnter(to,from,next) {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                ;
            }
        },
        {
            path : '/user/:id',
            component : ViewUser,
        },
        {
            path : '/item/:id',
            component : ViewItem,
        }

    ],
});

export {
    router,
}