import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Fonts need to be called in js for webpack to see and copy over
import styles from './styles/main.scss'; // eslint-disable-line no-unused-vars

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

var eventHub = new Vue();


new Vue({
  data: {
    TRANSITION_DURATION: .35,
    TRANSITION_EASE: "power2.inOut",
    COLORS: ['#F48907', '#D95D39', '#575366', '#0E1428'],
    COLORS_GRAY: ['#888', '#666', '#444', '#222'],
    eventHub: eventHub,
  },
  router,
  render: h => h(App)
}).$mount('#app')