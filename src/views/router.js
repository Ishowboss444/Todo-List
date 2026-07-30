import { createRouter, createWebHistory } from 'vue-router';

import MyTasksView from './MyTasksView.vue';
import SettingView from '@/views/SettingView.vue';
import {createPinia} from 'pinia';


export const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/myTasks' ,name:'MyTasksView',component: MyTasksView,},
        {path: '/SettingView',name: 'SettingView',component: SettingView,},
    ],
})
