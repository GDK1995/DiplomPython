import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex)

const apiUrl = process.env.VUE_APP_API_URL
const tokenType = 'Bearer'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    preloader: false
  },
  getters: {
    uthStatus: state => state.status,
    isLoggedIn: state => !!state.token,
    preloaderState: state => state.preloader
  },
  mutations: {
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    },
    preloaderState (state) {
      state.prelodaer = !state.prelodaer
    }
  },
  actions: {
    // function to login
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: apiUrl + '/api/v1/app/user/login/',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const decoded = jwtDecode(resp.data.access)
            const token = resp.data.access
            localStorage.setItem('rle', decoded.role)
            localStorage.setItem('token', tokenType + ' ' + token)
            localStorage.setItem('nav', 'lesson')
            axios.defaults.headers.common.Authorization = tokenType + ' ' + token
            commit('auth_success', token)
            resolve(decoded)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.clear()
            reject(err)
          })
      })
    },
    // function to logout
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.clear()
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    },
    registrate ({ commit }, user) {
      console.log(user)
      return new Promise((resolve, reject) => {
        commit('preloaderState')
        axios({
          url: apiUrl + '/api/v1/app/user/create/',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserList () {
      return new Promise((resolve, reject) => {
        axios({
          url: apiUrl + '/api/v1/app/user/list/',
          method: 'GET'
        })
          .then(resp => {
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
