import vueRouter from 'vue-router';
import Vue from 'vue';

import Index from './views/Index';
import Blog from './views/Blog';

Vue.use(vueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/blog', component: Blog }
  ];

export default new vueRouter({
    mode: 'history',
    routes: routes
})  

