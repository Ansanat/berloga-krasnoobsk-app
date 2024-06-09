import { createApp } from 'vue'
import App from './App.vue'
// Pages
import Vacancies from '@/pages/v-vacancies-page'
import Main from '@/pages/v-main-page'
import Male from '@/pages/v-male-page'
import Female from '@/pages/v-female-page'
import Kitchen from '@/pages/v-kitchen-page'
import Accessories from '@/pages/v-accessories-page'
import Additional from '@/pages/v-additional-page'
import Contacts from '@/pages/v-contacts-page'
import Rules from '@/pages/v-rules-page'
// Swiper
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter ({
  scrollBehavior (to){
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    },
    {
      path: '/male',
      component: Male,
      name: 'Male'
    },
    {
      path: '/female',
      component: Female,
      name: 'Female'
    },
    {
      path: '/kitchen',
      component: Kitchen,
      name: 'Kitchen'
    },
    {
      path: '/accessories',
      component: Accessories,
      name: 'Accessories'
    },
    {
      path: '/additional',
      component: Additional,
      name: 'Additional'
    },
    {
      path: '/contacts',
      component: Contacts,
      name: 'Contacts'
    },
    {
      path: '/vacancies',
      component: Vacancies,
      name: 'Vacancies'
    },
    {
      path: '/rules',
      component: Rules,
      name: 'Rules'
    },
  ],
  history: createWebHistory()
})

const app = createApp(App)

app
  .use(router)
  .mount('#app')
