<template>
  <div ref="app" id="app" v-scroll="ON_SCROLL" v-resize="ON_RESIZE">
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
// import VueScrollTo from 'vue-scrollto';

import Globals from "@/views/Pages/Globals.vue";
import Jumbotron from "@/views/Components/Jumbotron.vue";
import PageWrapper from "@/views/Pages/PageWrapper.vue";
import Utils from "@/js/Utils.js";

import PROJECT_DATA from "@/js/projects.js";

export default {
  name: "app",
  data: function() {
    return {
      isRouting: false
    };
  },
  computed: {
    el: function() {
      return this.$refs.app;
    },
    windowHeight: function() {
      return window.innerHeight;
    }
  },
  mounted: function() {
    console.log("Application Build: ", new Date().toLocaleString());

    if (this.$route.params.project) {
      this.$root.store.currentShowcaseId = this.$route.params.project;
      this.$root.store.routingToShowcase = this.$route.params.project;
    } else {
      this.$root.store.currentShowcaseId = PROJECT_DATA.order[0];
      this.$root.store.routingToShowcase = PROJECT_DATA.order[0];
    }

    this.checkClientInfo();

    this.$router.afterEach(() => {
      this.isRouting = false;
    })
  },
  methods: {
    ON_SCROLL() {
      if (this.isRouting) return;
      
      if (window.scrollY > this.windowHeight / 2 && this.$route.path === "/") {
        this.isRouting = true;
        this.$router.push("/work/" + this.$root.store.routingToShowcase);
      } else if (
        window.scrollY < this.windowHeight / 2 &&
        this.$route.path != "/"
      ) {
        this.isRouting = true;
        this.$router.push("/");
      }
    },
    ON_RESIZE() {
      this.checkClientInfo();
    },
    checkClientInfo() {
      let box = this.$refs.app.getBoundingClientRect();
      
      if (box.width > 992 && this.$root.store.clientInfo.isDesktop != true) {
        this.$root.store.clientInfo.isDesktop = true;
        console.log('mob');
        this.$root.eventHub.$emit("client-change");
      } else if (box.width <= 992 && this.$root.store.clientInfo.isDesktop != false) {
        this.$root.store.clientInfo.isDesktop = false;
        console.log('desk');
        this.$root.eventHub.$emit("client-change");
      }
    },
    utils(func, ...val) {
      return Utils[func](...val);
    }
  },
  components: {
    Globals,
    Jumbotron,
    PageWrapper
  }
};
</script>