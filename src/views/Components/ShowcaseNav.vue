<template>
  <div class="project-nav">
    <Chapter 
      v-for="(piece, i) in projectData.list"
      v-bind:key="piece.id"
      v-bind:chapterContent="piece"
      >{{i}}</Chapter>
  </div>
</template>

<script>
import Chapter from '@/views/Components/Chapter';
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
  // methods: {
  //   EMIT_ROUTE: function(route) {
  //     this.$emit(route);
  //   }
  // },
  components: {
    Chapter
  }
}
</script>