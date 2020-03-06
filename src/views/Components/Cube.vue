<template>
  <div class="cube-container"
      @mousemove="ON_MOUSE_MOVE"
      @mouseleave="ON_MOUSE_LEAVE">
    <div
      class="cube"
      ref="cube"
      v-bind:class="[chip ? 'chip' : '']"
      
    >
      <div class="side back"></div>
      <div class="side left"></div>
      <div class="side right"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
      <div class="side front">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chip: Boolean
  },
  data: function() {
    return {
      animating: false,
      xStrength: null,
      yStrength: null
    };
  },
  methods: {
    ON_MOUSE_MOVE: function(e) {
      if (this.animating) return;
      let el = {
        box: e.target.getBoundingClientRect()
      };
      this.xStrength = (e.offsetX - el.box.width / 2) / (el.box.width / 2);
      this.yStrength = (el.box.width / 2 - e.offsetY) / (el.box.width / 2);
      let angle =
        ((Math.abs(this.xStrength) + Math.abs(this.yStrength)) / 2) *
          this.$root.ANGLE_TOLERANCE +
        "deg";

      this.$refs.cube.style.transform = `rotate3d(${this.yStrength}, ${this.xStrength}, 0, ${angle})`;
    },
    ON_MOUSE_LEAVE: function() {
      this.stabilize(this.$refs.cube);
    },
    stabilize: function(el) {
      el.style.transform = `rotate3d(0, 0, 0, 0)`;
    }
  }
};
</script>