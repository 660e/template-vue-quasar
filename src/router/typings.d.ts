// https://router.vuejs.org/zh/guide/advanced/meta.html

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string;
    keepAlive?: boolean;
    title: string;
  }
}
