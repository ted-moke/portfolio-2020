import Vue from 'vue'
import Router from 'vue-router'

/* General view imports */

/* Specific page imports */
// import Placeholder from './views/Pages/Placeholder.vue';
import Work from './views/Pages/Work.vue';
import Play from './views/Pages/Play.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '',
    //   name: 'home',
    //   // component: Placeholder,
    // },
    {
      path: '/work/:project',
      name: 'Work',
      component: Work,
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})

export default router;