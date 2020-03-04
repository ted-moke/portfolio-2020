<template>
  <div class="project-nav">
    <Chapter 
      v-for="(piece, i) in content.list"
      v-bind:key="piece.id"
      v-bind:chapterContent="piece">{{i}}</Chapter>
  </div>
</template>

<script>
import Chapter from '@/views/Components/Chapter';

export default {
  props: {
    content: Object
  },
  components: {
    Chapter
  }
}
</script>