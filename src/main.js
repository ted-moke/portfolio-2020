import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Fonts need to be called in js for webpack to see and copy over
// import styles from './styles/main.scss';

// // eslint-disable-next-line
import NunitoBlack from './assets/fonts/NunitoSans-Black.ttf'; // eslint-disable-line no-unused-vars
import NunitoXLight from './assets/fonts/NunitoSans-ExtraLight.ttf'; // eslint-disable-line no-unused-vars

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
