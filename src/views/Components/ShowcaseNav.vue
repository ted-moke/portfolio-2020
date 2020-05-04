<template>
  <div class="showcase-nav-container">
    <div class="showcase-nav">
      <h3 class="showcase-nav-label">Projects</h3>
      <div ref="featureWrapper">
        <Feature
          v-for="(piece, i) in projectData.list"
          v-bind:ref="`chip-${i}`"
          v-bind:key="piece.id"
          v-bind:featurePreviewContent="piece"
          v-bind:class="[$root.store.routingToShowcase === piece.id ? 'active' : '']"
        >{{i}}</Feature>
      </div>
      <FeatureControl v-show="$root.store.clientInfo.isDesktop"></FeatureControl>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

import Feature from "@/views/Components/Feature";
import PROJECT_DATA from "@/js/projects.js";

import FeatureControl from "./FeatureControl";

export default {
  props: {
    content: Object
  },
  data: function() {
    return {
      Features: []
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      let fWrapper = this.$refs.featureWrapper;
      let features = fWrapper.children;

      this.tl = gsap.timeline({ defaults: { duration: 0.25, stagger: 0.1 } });
      this.tl.pause();

      this.tl.to(features, { scale: 1.3, ease: "power2.inOut" });
      this.tl.to(
        features,
        { scale: 1, ease: "bounce.out", duration: 0.5 },
        "-=.25"
      );
    });
    this.$root.eventHub.$on("showcase-in", this.highlight);
  },
  computed: {
    projectData: function() {
      return PROJECT_DATA;
    }
  },
  methods: {
    highlight: function() {
      this.tl.play();
    }
  },
  components: {
    Feature,
    FeatureControl
  }
};
</script>