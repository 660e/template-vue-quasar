export default {
  path: 'components',
  name: 'components',
  meta: {
    icon: 'subtitles',
    title: 'Components'
  },
  children: [
    {
      path: 'dialog',
      name: 'components-dialog',
      meta: {
        title: 'Dialog'
      },
      component: () => import('@/pages/components/dialog.vue')
    },
    {
      path: 'table',
      name: 'components-table',
      meta: {
        title: 'Table'
      },
      component: () => import('@/pages/components/table.vue')
    }
  ]
};
