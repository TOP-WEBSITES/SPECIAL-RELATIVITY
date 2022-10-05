import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLatex from 'vatex'

createApp(App).use(router).use(VueLatex).mount('#app');
