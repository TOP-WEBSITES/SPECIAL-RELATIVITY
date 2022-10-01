import { createRouter, createWebHashHistory } from 'vue-router';

import WelcomeView from './views/WelcomeView.vue';
import ArticleView from './views/ArticleView.vue';

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/article', component: ArticleView },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
