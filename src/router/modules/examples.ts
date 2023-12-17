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
    }
  ]
};
