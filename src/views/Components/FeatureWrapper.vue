<template>
  <div class="feature-wrapper">
    <transition name="slide-down">
      <img v-show="open" v-bind:src="content.video" class="screencap" />
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    content: Object,
    open: Boolean
  },
};
</script>