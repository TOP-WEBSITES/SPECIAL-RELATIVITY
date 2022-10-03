import { createRouter, createWebHashHistory } from 'vue-router';

import WelcomeView from './views/WelcomeView.vue';
import ArticleView from './views/ArticleView.vue';
import QuizView from './views/QuizView.vue';

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/article', component: ArticleView },
  { path: '/quiz', component: QuizView },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
