import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Fonts need to be called in js for webpack to see and copy over
import styles from './styles/main.scss'; // eslint-disable-line no-unused-vars
import PROJECT_DATA from '@/js/projects.js';
// import Utils from "@/js/Utils.js";
import { throttle } from 'lodash';

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };

    window.addEventListener('scroll', throttle(f, 16, { trailing: true, leading: true }));
  },
});

var eventHub = new Vue();


new Vue({
  data: {
    TRANSITION_DURATION: .35, // s
    SHUTTER_PAUSE: 250, // ms
    SHUTTER_STAGGER: 250, // ms
    TRANSITION_EASE: "power2.inOut",
    COLORS: ['#F48907', '#D95D39', '#575366', '#0E1428'],
    COLORS_GRAY: ['#888', '#666', '#444', '#222'],
    eventHub: eventHub,
    store: {
      currentShowcaseId: PROJECT_DATA.order[0],
      routingToShowcase: null
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')