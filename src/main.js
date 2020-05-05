import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

// Fonts need to be called in js for webpack to see and copy over
import styles from './styles/main.scss'; // eslint-disable-line no-unused-vars
import { throttle } from 'lodash';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

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

Vue.directive('resize', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', f);
      }
    };

    window.addEventListener('resize', throttle(f, 16, { trailing: false, leading: true }));
  },
});

var eventHub = new Vue();

new Vue({
  data: {
    TRANSITION_DURATION: .35, // s
    SHUTTER_PAUSE: 250, // ms
    SHUTTER_STAGGER: 250, // ms
    ANGLE_TOLERANCE: 40,
    TRANSITION_EASE: "power2.inOut",
    COLORS: ['#F48907', '#D95D39', '#575366', '#0E1428'],
    COLORS_GRAY: ['#888', '#666', '#444', '#222'],
    eventHub: eventHub,
    store: {
      currentShowcaseId: null,
      routingToShowcase: null,
      clientInfo: {
        isDesktop: null,
        short: null
      },
      overlayControlsHidden: false
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')