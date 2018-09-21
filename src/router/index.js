import Form from '../components/Form.vue'
import Home from '../components/Home.vue'

const routes = [
  {path: '/form', component: Form, name: 'form'},
  {path: '/home', component: Home, name: 'Home', meta: {autentificado: true}},
  {path: '*', redirect: '/form'},
  {path: '/', redirect: '/form'}
]
export default routes
