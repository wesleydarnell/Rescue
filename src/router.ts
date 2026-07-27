import { createMemoryHistory, createRouter } from 'vue-router'

import StartScreen from './components/StartScreen.vue'
import TheExperience from './components/TheExperience.vue'

const routes = [
  { path: '/', component: StartScreen },
  { path: '/play', component: TheExperience },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})