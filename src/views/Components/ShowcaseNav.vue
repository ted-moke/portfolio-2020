<template>
  <div class="showcase-nav-wrapper">
    <div class="showcase-nav">
      <h3 class="showcase-nav-label">Projects</h3>
      <FeatureControl v-show="$root.store.clientInfo.isDesktop"></FeatureControl>
      <div ref="featureWrapper">
        <Feature
          v-for="(piece, i) in projectData.list"
          v-bind:ref="`chip-${i}`"
          v-bind:key="piece.id"
          v-bind:featurePreviewContent="piece"
          v-bind:class="[$root.store.routingToShowcase === piece.id ? 'active' : '']"
        >{{i}}</Feature>
      </div>
    </div>
  </div>
</template>

<script>
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
  computed: {
    projectData: function() {
      return PROJECT_DATA;
    }
  },
  components: {
    Feature,
    FeatureControl
  }
};
</script>