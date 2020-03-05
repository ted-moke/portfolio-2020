<template>
  <div class="feature-wrapper">
    <img v-bind:src="content.video" class="screencap" />
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>