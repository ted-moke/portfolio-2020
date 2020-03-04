<template>
  <div class="project-wrapper">
    <div class="shutter-wrapper">
      <Shutter gray bottomExpands label v-bind:open="shutterOpen" v-bind:content="projectContent.slats"></Shutter>
    </div>
    
    <div class="screencap-wrapper">
      <img v-bind:src="projectContent.videoUrl" class="screencap" />
    </div>
  </div>
</template>

<script>
import Shutter from '@/views/Components/Shutter.vue'


export default {
  props: {
    projectContent: Object
  },
  data: function() {
    return {
      shutterOpen: true
    };
  },
  components: {
    Shutter
  }
};
</script>