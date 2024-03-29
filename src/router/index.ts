import { route } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

import components from './modules/components';
import examples from './modules/examples';
import extensions from './modules/extensions';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export const routes: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'home',
    meta: {
      icon: 'home',
      title: 'Home'
    },
    component: () => import('@/pages/home.vue')
  },
  components,
  examples,
  extensions
];

export default route(function (/* { store, ssrContext } */) {
  let createHistory;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  const Router = createRouter({
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/login/index.vue')
      },
      {
        path: '/',
        redirect: 'login',
        component: () => import('@/layouts/index.vue'),
        children: routes
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/404.vue')
      }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 })
  });

  Router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
  });

  Router.afterEach(() => {
    LoadingBar.stop();
  });

  return Router;
});
