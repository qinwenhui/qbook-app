/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/bookself',
        name: 'Bookself',
        component: () => import('@/views/home/bookself'),
        meta: { title: '书架', keepAlive: false }
      },
      {
        path: '/rank',
        name: 'Rank',
        component: () => import('@/views/home/rank'),
        meta: { title: '排行', keepAlive: false }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/home/user'),
        meta: { title: '我的', keepAlive: false }
      }
    ]
  }
]
