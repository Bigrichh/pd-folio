import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(AOS.init()).use(router).mount('#app')








