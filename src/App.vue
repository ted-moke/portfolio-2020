<template>
  <div ref="app" id="app" @click="handleClick" v-scroll="handleScroll">
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
// import Vue from "vue";
// var eventHub = new Vue();

import Globals from "@/views/Pages/Globals.vue";
import Jumbotron from "@/views/Components/Jumbotron.vue";
import PageWrapper from "@/views/Pages/PageWrapper.vue";
import Utils from "@/js/utils.js";

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
    var eventHub = this.$root.eventHub;
    console.log(this);
    this.$router.beforeEach((to, from, next) => {
      this.isRouting = true;
      
      eventHub.$on("transitionComplete", () => {
        console.log(this);
        this.isRouting = false;
        next();
        return;
      });

      if (to.path === "/") {
        eventHub.$emit("routing", true);
        return;
      } else {
        console.log(this);
        this.isRouting = false;
        next();
        return;
      }
    });

  },
  methods: {
    handleClick() {
      console.log("handling click");
    },
    handleScroll() {
      if (this.isRouting) {
        console.log("already routing");
        return;
      }

      if (window.scrollY > this.windowHeight / 2 && this.$route.path === "/") {
        this.$router.push("/work");
      } else if (
        window.scrollY < this.windowHeight / 2 &&
        this.$route.path === "/work"
      ) {
        this.$router.push("/");
      }
    },
    navClick(item = "some item") {
      console.log("Nav click: ", item);
    },
    utils(func, ...val) {
      return Utils[func](...val);
    }
  },
  watch: {
    $route(to) {
      console.log("Routing", to);
    }
  },
  components: {
    Globals,
    Jumbotron,
    PageWrapper
  }
};
</script>