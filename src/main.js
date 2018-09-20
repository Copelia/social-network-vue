import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
// import * as firebase from 'firebase'

// Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// Vue.component('log-form', Form)

new Vue({ // eslint-disable-line no-new
  router,
  el: '#app',
  render: h => h(App)
})
