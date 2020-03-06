<template>
  <div class="feature-preview" @click="routeProject">
    <Cube chip>
      <img v-bind:src="featurePreviewContent.thumbnail" />
    </Cube>
  </div>
</template>

<script>

import Cube from '@/views/Components/Cube.vue';

export default {
  props: {
    featurePreviewContent: Object
  },
  methods: {
    routeProject: function() {
      this.$root.eventHub.$emit('route-showcase', this.featurePreviewContent.id)
    }
  },
  components: {
    Cube
  }
}

</script>