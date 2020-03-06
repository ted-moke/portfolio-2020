<template>
  <div class="showcase-nav">
    <Feature 
      v-for="(piece, i) in projectData.list"
      v-bind:key="piece.id"
      v-bind:featurePreviewContent="piece"
      v-bind:class="[$root.store.routingToShowcase === piece.id ? 'active' : '']"
      >{{i}}</Feature>
  </div>
</template>

<script>
import Feature from '@/views/Components/Feature';
import PROJECT_DATA from "@/js/projects.js";

export default {
  props: {
    content: Object
  },
  computed: {
    projectData: function() {
      return PROJECT_DATA;
    }
  },
  components: {
    Feature
  }
}
</script>