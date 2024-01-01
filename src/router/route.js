export const route = [
  {
    path: '/',
    component: () => import('@/views/index/index'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { auth: false, keepAlive: false, name: ['首页'] }
      }
    ]
  }
]
4
