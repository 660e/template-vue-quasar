export default {
  path: '/extensions',
  name: 'extensions',
  meta: {
    title: 'extensions'
  },
  children: [
    {
      path: 'cascader',
      name: 'extensions-cascader',
      meta: {
        title: 'cascader'
      },
      component: () => import('@/pages/extensions/cascader.vue')
    }
  ]
};
