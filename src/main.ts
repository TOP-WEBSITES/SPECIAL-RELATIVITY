import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3Katex from '@hsorby/vue3-katex';

createApp(App).use(router).use(Vue3Katex).mount('#app');
