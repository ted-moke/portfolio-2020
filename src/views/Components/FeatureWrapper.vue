<template>
  <div class="feature-wrapper">
    <div v-show="content.video" class="feature-container">
      <iframe
        v-if="initiated"
        ref="iframe"
        class="feature-iframe"
        :src="content.video + '?loop=1&muted=1&controls=0&autopause=0'"
        frameborder="0"
        allow="fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <div v-show="!content.video && content.screenshot" class="feature-container">
      <img :src="content.screenshot" />
    </div>
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
  data: function() {
    return {
      initiated: false
    }
  },
  mounted: function() {
    if (!this.player && this.shown) {
      this.buildPlayer(()=>{
        this.player.play();
      });
    }

    this.$root.eventHub.$on('intro-complete', ()=>{
      if (this.$root.store.clientInfo.isDesktop) {
        this.buildPlayer();
      } else {
        if (this.shown || this.$root.store.routingToShowcase === this.content.id) {
          this.buildPlayer();
        }
      }
    })
  },
  methods: {
    buildPlayer(cb) {
      this.initiated = true;
      this.$nextTick(()=>{

        this.player = new Vimeo(this.$refs.iframe);

        if (cb) {
          cb();
        }
      })
    },
    togglePlayerState(newVal) {
      if (newVal === true) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  },
  watch: {
    shown: function(newVal) {
      if (!this.player) {
        this.buildPlayer(()=>{
          this.togglePlayerState(newVal);
        });
        return
      }

      this.togglePlayerState(newVal);
    }
  }
};
</script>