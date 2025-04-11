import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'
import CreateStudent from './components/CreateStudent.vue'
import UpdateStudent from './components/UpdateStudent.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/create', component: CreateStudent },
  { path: '/update', component: UpdateStudent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;