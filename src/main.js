import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import translations from '@/i18n/translations'

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ru',
  messages: translations
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
