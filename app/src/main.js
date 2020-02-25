import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Fonts need to be called in js for webpack to see and copy over
import NunitoBlack from './assets/fonts/NunitoSans-Black.ttf';
import NunitoXLight from './assets/fonts/NunitoSans-ExtraLight.ttf';

console.log(NunitoBlack, NunitoXLight);

Vue.config.productionTip = false

new Vue({
  data: {
    TRANSITION_DURATION: .35,
    TRANSITION_EASE: "power2.inOut"
  },
  router,
  render: h => h(App)
}).$mount('#app')
