export default {
  path: '/components',
  name: 'components',
  meta: {
    icon: 'subtitles',
    title: 'components'
  },
  children: [
    {
      path: 'table',
      name: 'components-table',
      meta: {
        title: 'table'
      },
      component: () => import('@/pages/components/table.vue')
    }
  ]
};
