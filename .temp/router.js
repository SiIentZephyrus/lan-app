import Vue from 'vue'
/* global Vue */
import Router from 'vue-router';
import Home from '@/pages/home/index';

Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    }
  ]
});

