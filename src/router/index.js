import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404/404'
import local from '@/utils/local'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      component: Welcome
    }]
  },
  { path: '*', component: NotFound }
  ]
})

// 添加路由 导航守卫(其实就是看你有没有token,没有就无法跳转到主页)
// beforeEach-当每次跳转路由前触发
router.beforeEach((to, from, next) => {
  // to 跳转到目标 路由对象
  // from 从哪里跳转过来  路由对象
  // next 下一步方法  next()放行  next(‘/login’) 拦截
  const user = local.getUser()
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
