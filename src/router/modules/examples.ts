export default {
  path: 'examples',
  name: 'examples',
  meta: {
    icon: 'widgets',
    title: 'Examples'
  },
  children: [
    {
      path: 'acl',
      name: 'examples-acl',
      meta: {
        title: 'Acl'
      },
      component: () => import('@/pages/examples/acl.vue')
    },
    {
      path: 'axios',
      name: 'examples-axios',
      meta: {
        title: 'Axios'
      },
      component: () => import('@/pages/examples/axios.vue')
    },
    {
      path: 'g2',
      name: 'examples-g2',
      meta: {
        title: 'G2'
      },
      component: () => import('@/pages/examples/g2.vue')
    },
    {
      path: 'hooks',
      name: 'examples-hooks',
      meta: {
        title: 'Hooks'
      },
      component: () => import('@/pages/examples/hooks.vue')
    },
    {
      path: 'i18n',
      name: 'examples-i18n',
      meta: {
        title: 'I18n'
      },
      component: () => import('@/pages/examples/i18n.vue')
    },
    {
      path: 'keep-alive',
      name: 'examples-keep-alive',
      meta: {
        keepAlive: true,
        title: 'keepAlive'
      },
      component: () => import('@/pages/examples/keep-alive.vue')
    },
    {
      path: 'reactive',
      name: 'examples-reactive',
      meta: {
        title: 'Reactive'
      },
      component: () => import('@/pages/examples/reactive.vue')
    },
    {
      path: 'ref',
      name: 'examples-ref',
      meta: {
        title: 'Ref'
      },
      component: () => import('@/pages/examples/ref.vue')
    },
    {
      path: 'tailwindcss',
      name: 'examples-tailwindcss',
      meta: {
        title: 'Tailwindcss'
      },
      component: () => import('@/pages/examples/tailwindcss.vue')
    },
    {
      path: 'transition',
      name: 'examples-transition',
      meta: {
        title: 'Transition'
      },
      component: () => import('@/pages/examples/transition.vue')
    },
    {
      path: 'vuelidate',
      name: 'examples-vuelidate',
      meta: {
        title: 'Vuelidate'
      },
      component: () => import('@/pages/examples/vuelidate.vue')
    }
  ]
};
