<template>
  <div ref="modal" class="modal" v-bind:class="name">
    <div ref="content" class="modal-content max-height-auto">
      <slot name="modal-body">Modal Body</slot>
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
      let ROOT = this.$root;
      return gsap.timeline({
        defaults: {
          ease: ROOT.TRANSITION_EASE,
          duration: ROOT.TRANSITION_DURATION,
          onReverseComplete: () => {
            this.$emit("close");
          }
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