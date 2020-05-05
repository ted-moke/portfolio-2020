<template>
  <div class="feature-wrapper">
    <transition name="fade">
      <div v-show="content.video" class="feature-container">
        <iframe
          ref="iframe"
          class="feature-iframe"
          :src="content.video + '?loop=1&muted=1&controls=0&autopause=0'"
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
import Vimeo from "@vimeo/player";

export default {
  props: {
    content: Object,
    open: Boolean,
    shown: Boolean
  },
  mounted: function() {
    this.player = new Vimeo(this.$refs.iframe);

    if (this.shown === true) {
      this.player.play();
    } else {
      this.player.pause();
    }
  },
  watch: {
    shown: function(newVal) {
      if (newVal === true) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  }
};
</script>