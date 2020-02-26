<template>
  <div id="app" @click="handleClick">
    <Globals></Globals>
    <h1>Test bold</h1>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  /* DO NOT REMOVE || WILL BREAK APP */
}
</style>

<script>
// @ is an alias to /src
import Globals from "@/views/Pages/Globals.vue"
import Utils from "@/js/utils.js";

// import router from "@/router";

// // import { TimelineLite, Power3 } from "gsap";

// router.beforeEach((to, from, next) => {

//   console.log(to, from, next)
// });

export default {
  name: "app",
  data: function() {
    return {
      navShown: false,
    };
  },
  computed: {
  },
  methods: {
    handleClick() {
      console.log('handling click')
    },
    navClick(item = 'some item') {
      console.log('Nav click: ', item)
    },
    utils(func, ...val) {
      return Utils[func](...val);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // this.$router.push({ path: '/home' })
    })
  },
  watch: {
    // $route(to) {
    //   console.log('Routing', to)
    // }
  },
  components: {
    Globals,
    // Nav
  }
};
</script>