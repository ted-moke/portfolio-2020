<template>
  <div class="chapter" @click="routeProject">
    <img v-bind:src="chapterContent.thumbnail" />
  </div>
</template>

<script>

export default {
  props: {
    chapterContent: Object
  },
  methods: {
    routeProject: function() {
      this.$root.eventHub.$emit('route-showcase', this.chapterContent.id)
    }
  }
}

</script>