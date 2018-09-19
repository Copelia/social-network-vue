import Vue from 'vue'
import App from './App'
import Form from './components/Form'
// import router from './router'

Vue.config.productionTip = false

Vue.component('log-form', Form)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
