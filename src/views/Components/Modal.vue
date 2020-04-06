<template>
  <div ref="modal" class="modal" v-bind:class="name">
      <svg class="icon icon-close" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
        <defs>
          <clipPath id="icon-close-clip-path" transform="translate(-0.5 -0.5)">
            <path class="cls-1" d="M415.4,495.42,256,336,96.59,495.42a56.58,56.58,0,0,1-80-80L176,256,16.57,96.59a56.58,56.58,0,0,1,80-80L256,176,415.4,16.57a56.58,56.58,0,0,1,80,80L336,256,495.42,415.4a56.58,56.58,0,0,1-80,80Z"/>
          </clipPath>
        </defs>
        <title>icon-close</title>
        <g class="cls-2">
          <rect class="cls-3" width="512" height="143.52"/>
          <rect class="cls-4" y="128" width="512" height="156.92"/>
          <rect class="cls-5" y="256" width="512" height="143.93"/>
          <rect class="cls-6" y="384" width="512" height="128"/>
        </g>
      </svg>
    <div class="modal-content-wrapper">
      <div ref="content" class="modal-content max-height-auto">
        <slot name="modal-body">Modal Body</slot>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Modal",
  props: {
    name: String
  },
  computed: {
    tl: function() {
      let that = this;
      let ROOT = this.$root;
      return gsap.timeline({
        defaults: {
          ease: ROOT.TRANSITION_EASE,
          duration: ROOT.TRANSITION_DURATION,
        },
        onReverseComplete: function() {
          that.$emit("close");
        }
      });
    }
  },
  mounted() {
    const { modal, content } = this.$refs;

    let modalDim = this.getDimensions(modal);


    gsap.set(content, { maxHeight: 0 });
    this.tl.to(content, { maxHeight: modalDim.height }, 0);
    this.tl.to(modal, { paddingTop: modalDim.padding[0], paddingBottom: modalDim.padding[2], opacity: 1 }, 0);

    this.tl.play();
  },
  methods: {
    close() {
      this.tl.reverse();
    },
    getDimensions(obj) {
      let data = {};
      let compStyles = window.getComputedStyle(obj);

      let elPadding = [];
      elPadding[0] = compStyles.getPropertyValue("padding-top");
      elPadding[1] = compStyles.getPropertyValue("padding-right");
      elPadding[2] = compStyles.getPropertyValue("padding-bottom");
      elPadding[3] = compStyles.getPropertyValue("padding-left");
      data.padding = elPadding;

      data.height = obj.offsetHeight;

      return data;
    }
  }
};
</script>