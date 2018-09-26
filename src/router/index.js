import Form from '../components/Form.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'

const routes = [
  {path: '/form', component: Form, name: 'form'},
  {path: '/signup', component: SignUp, name: 'signup'},
  {path: '/home', component: Home, name: 'home', meta: {requiresAuth: true}},
  {path: '*', redirect: '/form'},
  {path: '/', redirect: '/form'}
]

export default routes
