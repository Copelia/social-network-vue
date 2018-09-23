import Form from '../components/Form.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
// import firebase from 'firebase'

const routes = [
  {path: '/form', component: Form, name: 'form'},
  {path: '/signup', component: SignUp, name: 'signup'},
  {path: '/home', component: Home, name: 'home', meta: {requiresAuth: true}},
  {path: '*', redirect: '/form'},
  {path: '/', redirect: '/form'}
]

// routes.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('form')
//   else if (!requiresAuth && currentUser) next('home')
//   else next()
// })

export default routes
