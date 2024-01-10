export default {
  path: 'extensions',
  name: 'extensions',
  meta: {
    icon: 'extension',
    title: 'Extensions'
  },
  children: [
    {
      path: 'cascader',
      name: 'extensions-cascader',
      meta: {
        title: 'Cascader'
      },
      component: () => import('@/pages/extensions/cascader.vue')
    }
  ]
};
