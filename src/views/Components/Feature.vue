<template>
  <div class="feature-preview" @click="routeProject">
    <img v-bind:src="featurePreviewContent.thumbnail" />
  </div>
</template>

<script>

export default {
  props: {
    featurePreviewContent: Object
  },
  methods: {
    routeProject: function() {
      this.$root.eventHub.$emit('route-showcase', this.featurePreviewContent.id)
    }
  }
}

</script>