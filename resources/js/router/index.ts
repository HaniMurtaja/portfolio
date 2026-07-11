import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        // Any unknown client path falls back to the single-page experience.
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: HomeView,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth', top: 90 };
        }
        if (savedPosition) return savedPosition;
        return { top: 0, behavior: 'smooth' };
    },
});
