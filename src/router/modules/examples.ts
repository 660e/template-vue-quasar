export default {
  path: '/examples',
  name: 'examples',
  meta: {
    icon: 'widgets',
    title: 'examples'
  },
  children: [
    {
      path: 'acl',
      name: 'examples-acl',
      meta: {
        title: 'acl'
      },
      component: () => import('@/pages/examples/acl.vue')
    },
    {
      path: 'axios',
      name: 'examples-axios',
      meta: {
        title: 'axios'
      },
      component: () => import('@/pages/examples/axios.vue')
    },
    {
      path: 'dialog',
      name: 'examples-dialog',
      meta: {
        title: 'dialog'
      },
      component: () => import('@/pages/examples/dialog.vue')
    },
    {
      path: 'g2',
      name: 'examples-g2',
      meta: {
        title: 'g2'
      },
      component: () => import('@/pages/examples/g2.vue')
    },
    {
      path: 'hooks',
      name: 'examples-hooks',
      meta: {
        title: 'hooks'
      },
      component: () => import('@/pages/examples/hooks.vue')
    },
    {
      path: 'i18n',
      name: 'examples-i18n',
      meta: {
        title: 'i18n'
      },
      component: () => import('@/pages/examples/i18n.vue')
    },
    {
      path: 'keep-alive',
      name: 'examples-keep-alive',
      meta: {
        keepAlive: true,
        title: 'keep-alive'
      },
      component: () => import('@/pages/examples/keep-alive.vue')
    }
  ]
};
