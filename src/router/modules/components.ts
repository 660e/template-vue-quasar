export default {
  path: 'components',
  name: 'components',
  meta: {
    icon: 'subtitles',
    title: 'components'
  },
  children: [
    {
      path: 'dialog',
      name: 'components-dialog',
      meta: {
        title: 'dialog'
      },
      component: () => import('@/pages/components/dialog.vue')
    },
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
