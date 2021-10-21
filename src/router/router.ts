import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { sessions } from '@/utils/utils'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',
    redirect: '/home'
  },
  { 
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home.vue'),
    meta: {
      showFooter: true,
      requireAuth: false,
    }
  },
  { 
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about/about.vue'),
    meta: {
      showFooter: true,
      requireAuth: false,
    }
  },
  { 
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/pages/user/user.vue'),
    meta: {
      requireAuth: true,
    }
  },
  { 
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/login.vue'),
    meta: {
      requireAuth: false,
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !sessions.get('token')) {
    next({ path: '/login', query: {redirect:to.fullPath}});
  } else { 
    next()
  }
})

export default router;
