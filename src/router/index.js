import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/LoginPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Авторизация',
      layout: 'Empty'
    }
  },
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Главная страница',
      layout: 'Main'
    }
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/TeachersPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Страница преподавателей',
      layout: 'Main'
    }
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../views/PracticalPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Практическая работа',
      layout: 'Main'
    }
  },
  {
    path: '/video-lesson',
    name: 'video-lesson',
    component: () => import('../views/VideoPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Видео уроки',
      layout: 'Main'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Тестирование',
      layout: 'Main'
    }
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
