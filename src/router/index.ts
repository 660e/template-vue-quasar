import { route } from 'quasar/wrappers';
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

import examples from './modules/examples';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export const routes: RouteRecordRaw[] = [examples];

export default route(function (/* { store, ssrContext } */) {
  let createHistory;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  return createRouter({
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: [
      {
        path: '/',
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
});
