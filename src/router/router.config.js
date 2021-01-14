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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login'),
    meta: {
      title: '登录',
      keepAlive: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/user/register'),
    meta: {
      title: '注册',
      keepAlive: false
    }
  },
  {
    path: '/bookinfo/:id',
    name: 'Bookinfo',
    component: () => import('@/views/book/bookinfo'),
    meta: {
      title: '书籍详情',
      keepAlive: false
    }
  },
  {
    path: '/chapter/:id',
    name: 'Chapter',
    component: () => import('@/views/book/chapter'),
    meta: {
      title: '章节详情',
      keepAlive: false
    }
  },
  {
    path: '/book/catalog',
    name: 'Catalog',
    component: () => import('@/views/book/catalog'),
    meta: {
      title: '目录',
      keepAlive: false
    }
  }
]
