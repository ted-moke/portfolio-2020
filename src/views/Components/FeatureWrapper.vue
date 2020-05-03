<template>
  <div class="feature-wrapper">
    <transition name="fade">
      <div v-show="content.video" class="feature-container">
        <iframe
          class="feature-iframe"
          :src="content.video + '?autoplay=1&loop=1&muted=1&controls=0&autopause=0'"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!content.video && content.screenshot" class="feature-container">
        <img :src="content.screenshot" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    open: Boolean
  }
};
</script>