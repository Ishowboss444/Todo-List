import { createRouter, createWebHistory } from 'vue-router';


export const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/myTasks',
            name:'MyTasksView',
            component: ()=> import('./MyTasksView.vue'),
        },
        {
            path: '/SettingView',
            name: 'SettingView',
            component: ()=> import('./SettingView.vue'),
        },
    ],
})
