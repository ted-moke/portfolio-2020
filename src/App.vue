<template>
  <div ref="app" id="app" @click="handleClick" @scroll="handleScroll">
    <Globals></Globals>
    <Jumbotron></Jumbotron>
    <PageWrapper>
      <router-view></router-view>
    </PageWrapper>
  </div>
</template>

<style lang="scss">
#app {
  /* DO NOT REMOVE || WILL BREAK APP */
}
</style>

<script>
// @ is an alias to /src
import Globals from "@/views/Pages/Globals.vue";
import Jumbotron from "@/views/Components/Jumbotron.vue";
import PageWrapper from "@/views/Pages/PageWrapper.vue";
import Utils from "@/js/utils.js";

export default {
  name: "app",
  methods: {
    handleClick() {
      console.log('handling click')
    },
    handleScroll() {
      console.log('scrolling')
    },
    navClick(item = 'some item') {
      console.log('Nav click: ', item)
    },
    utils(func, ...val) {
      return Utils[func](...val);
    }
  },
  watch: {
    $route(to) {
      console.log('Routing', to)
    }
  },
  components: {
    Globals,
    Jumbotron,
    PageWrapper
  }
};
</script>