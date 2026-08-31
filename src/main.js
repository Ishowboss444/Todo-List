import './assets/style.scss';
import './assets/main.css'
import '../node_modules/vue-sonner/lib/index.css'
import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/views/router.js';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');


