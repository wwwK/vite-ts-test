import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/views/home.vue');
const Vuex = () => import('@/views/vuex.vue');
const Axios = () => import('@/views/axios.vue');
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex
    },
    {
        path: '/axios',
        name: 'Axios',
        component: Axios
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
