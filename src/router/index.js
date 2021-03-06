import { createRouter, createWebHistory } from "vue-router"
import Message from '../components/Message.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Message
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
