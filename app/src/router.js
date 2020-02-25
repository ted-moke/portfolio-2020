import Vue from 'vue'
import Router from 'vue-router'

/* General view imports */

/* Specific page imports */
import Home from './views/Pages/Home.vue';
import Work from './views/Pages/Work.vue';
import Demos from './views/Pages/Demos.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      // meta: {
      //   title: 'Ted Moke - Web Development',
      //   metaTags: [
      //     {
      //       name: 'description',
      //       content: 'The home page of our example app.'
      //     },
      //     {
      //       property: 'og:description',
      //       content: 'The home page of our example app.'
      //     }
      //   ]
      // }
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/demos',
      name: 'demos',
      component: Demos
    }
  ]
})

export default router;