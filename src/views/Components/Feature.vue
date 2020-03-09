<template>
  <div class="feature-preview" @click="routeProject">
    <Chip chip v-bind:id="featurePreviewContent.id">
      <img v-bind:src="featurePreviewContent.thumbnail" />
    </Chip>
  </div>
</template>

<script>
import Chip from '@/views/Components/Chip.vue';

export default {
  props: {
    featurePreviewContent: Object
  },
  methods: {
    routeProject: function() {
      this.$root.eventHub.$emit('route-showcase', this.featurePreviewContent.id);
    }
  },
  components: {
    Chip
  }
}

</script>