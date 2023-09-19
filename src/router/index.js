import { createRouter, createWebHashHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import HostelHouse from '../views/HostelHouse.vue'
import LibraVue from '../views/LibraVue.vue'
import TechEats from '../views/TechEats.vue'
import StudyHouse from '../views/StudyHouse.vue'
import Pitw from '../views/Pitw.vue'
import NDAauth from '../views/NDAauth.vue'
import NDAdoc from '../views/NDAdoc.vue'

const routes = [
  {
    path: '/',
    name: 'projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/hostelhouse',
    name: 'hostelHouse',
    component: HostelHouse
  },
  {
    path: '/libravue',
    name: 'libraVue',
    component: LibraVue
  },
  {
    path: '/techeats', 
    name: 'techEats',
    component: TechEats,
  },
  {
    path: '/studyhouse',
    name: 'studyHouse',
    component: StudyHouse
  },
  {
    path: '/projectsintheworks',
    name: 'pitw',
    component: Pitw
  },
  {
    path: '/ndaauth/techeats',
    name: 'ndaauthtechEats',
    component: NDAauth,
    meta:{
      redirect:'techEats'
    }
  },
  {
    path: '/ndaauth/hostelhouse',
    name: 'ndaauthhostelHouse',
    component: NDAauth,
    meta:{
      redirect:'hostelHouse'
    }
  },
  {
    path: '/ndaauth/ndadoc',
    name: 'ndaauthndadoc',
    component: NDAdoc
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If a savedPosition is available (e.g., user pressed back button)
      return savedPosition;
    } else {
      // Scroll to the top of the page
      return { top: 0 };
    }
  },
}
)

export default router
