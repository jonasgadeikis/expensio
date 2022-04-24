import { createRouter, createWebHistory } from 'vue-router';
import Entries from '../views/Entries.vue';
import Categories from '../views/Categories.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/categories',
        component: Categories,
    },
    {
        path: '/entries',
        component: Entries,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
