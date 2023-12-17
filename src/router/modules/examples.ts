export default {
  path: '/examples',
  name: 'examples',
  meta: {
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
    }
  ]
};
