import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import appHomePage from '@/components/appHomePage'
import About from '@/components/appAboutPage'
import Contact  from '@/components/appContactPage'
import profilePage from  '@/components/appProfilePage'
import latihanPage from  '@/components/appLatihan'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHomePage',
      component: appHomePage
    },
    {
      path: '/about',
      name: 'appAboutPage',
      component: About
    },
    {
      path: '/contact',
      name: 'appContactPage',
      component: Contact
    },
    {
      path: '/profile',
      name: 'appProfilePage',
      component: profilePage
    },
    {
      path: '/latihan',
      name: 'appLatihan',
      component: latihanPage
    }
  ]
})
