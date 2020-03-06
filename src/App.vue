<template>
  <div ref="app" id="app" v-scroll="ON_SCROLL">
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
    var eventHub = this.$root.eventHub;

    this.$router.beforeEach((to, from, next) => {
      eventHub.$on("transitionComplete", () => {
        this.isRouting = false;
        next();
        return;
      });

      if (to.path === "/") {
        eventHub.$emit("routing", true);
        return;
      } else {
        this.isRouting = false;
        next();
        return;
      }
    });
  },
  methods: {
    ON_SCROLL() {
      if (this.isRouting) {
        return;
      }

      if (window.scrollY > this.windowHeight / 2 && this.$route.path === "/") {
        this.isRouting = true;
        this.$router.push("/work/" + PROJECT_DATA.order[0]);
      } else if (
        window.scrollY < this.windowHeight / 2 &&
        this.$route.path != "/"
      ) {
        this.isRouting = true;
        this.$router.push("/");
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