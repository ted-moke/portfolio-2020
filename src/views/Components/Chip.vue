<template>
  <div ref="chipWrapper" class="chip-wrapper" @mousemove="ON_MOUSE_MOVE" @mouseleave="ON_MOUSE_LEAVE" @mouseover="ON_MOUSE_OVER" @click="ON_CLICK">
    <h4 v-if="label" class="chip-wrapper-label">{{ label }}</h4>
    <div ref="chipContainer" class="chip-container">
      <div ref="chip" class="chip" v-bind:style="{'background': color}">
        <div v-bind:style="{'background-color': sideColor}" class="side back"></div>
        <div v-bind:style="{'background-color': sideColor}" class="side left"></div>
        <div v-bind:style="{'background-color': sideColor}" class="side right"></div>
        <div v-bind:style="{'background-color': sideColor}" class="side top"></div>
        <div v-bind:style="{'background-color': sideColor}" class="side bottom"></div>
        <div class="side front">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Color from 'color';

export default {
  props: {
    color: {
      type: Array,
      default: function(){return [this.$root.COLORS[1]]}
    },
    id: String,
    label: String
  },
  data: function() {
    return {
      ACCEL: 0.005,
      VEL_MAX: 2,
      ANGLE_MAX: 45,
      animating: false,
      hovered: false,
      ticks: 0,
      xStrength: null,
      yStrength: null,
      angle: 0,
      vel: 0,
      animReq: null
    };
  },
  computed: {
    sideColor: function() {
      return Color(this.color[0]).darken(0.2);
    }
  },
  mounted: function() {
    this.chip = this.$refs.chip;
    this.chipContainer = this.$refs.chipContainer;
    this.chipWrapper = this.$refs.chipWrapper;

    this.$root.eventHub.$on('route-showcase', ()=>{
      if (this.$root.store.routingToShowcase === this.id) {
        gsap.set(this.chipContainer, {scale: 1.25 });
        gsap.to(this.chipContainer, { scale: 1, ease: "back.in(10)", duration: 0.5 })
      }
    })
  },
  methods: {
    ON_MOUSE_OVER: function() {
      this.box = this.chipWrapper.getBoundingClientRect();

      if (!this.hovered) {
        this.chipContainer.style.transform = "scale(1.25)";
        this.hovered = true;
      }
    },
    ON_MOUSE_MOVE: function(e) {

      if (this.animReq) {
        window.cancelAnimationFrame(this.animReq);
      }

      this.ticks++;

      if (this.ticks > 6) {
        this.moveChip(e);
      }
    },
    ON_MOUSE_LEAVE: function(e) {
      this.chipContainer.style.transform = "scale(1)";
      this.hovered = false;

      this.vel = 0;
      this.ticks = 0;
      this.stabilize(e);
    },
    moveChip: function(e) {
      this.xStrength = (e.offsetX - this.box.width / 2) / (this.box.width / 2);
      this.yStrength = (this.box.width / 2 - e.offsetY) / (this.box.width / 2);
      this.angle = ((Math.abs(this.xStrength) + Math.abs(this.yStrength)) / 2) * this.ANGLE_MAX;

      if (this.xStrength > 1) {
        this.xStrength = 1;
      } else if (this.yStrength > 1) {
        this.yStrength = 1;
      }

      window.requestAnimationFrame(() => {
        this.chip.style.transform = `rotate3d(${this.yStrength}, ${this.xStrength}, 0, ${this.angle}deg)`;
      });
    },
    stabilize: function(e) {
      this.vel += this.ACCEL;

      if (this.vel > this.VEL_MAX) {
        this.vel = this.VEL_MAX;
      }

      let newXStrength = (this.xStrength - this.xStrength * this.vel).toFixed(3);
      let newYStrength = (this.yStrength - this.yStrength * this.vel).toFixed(3);
      let newAngle = (this.angle - this.angle * this.vel).toFixed(3);

      if (Math.abs(newAngle) < 1) {
        newAngle = 0;
      }

      if (Math.abs(newYStrength) < 0.1) {
        newYStrength = 0;
      }

      if (Math.abs(newXStrength) < 0.1) {
        newXStrength = 0;
      }

      this.xStrength = newXStrength;
      this.yStrength = newYStrength;
      this.angle = newAngle;

      this.chip.style.transform = `rotate3d(${newYStrength}, ${newXStrength}, 0, ${newAngle}deg)`;

      if ( !parseFloat(this.yStrength) && !parseFloat(this.xStrength) && !parseFloat(this.angle) ) {
        window.cancelAnimationFrame(this.animReq);
        return;
      }

      this.animReq = window.requestAnimationFrame(() => {
        this.stabilize(e);
      });
    },
    ON_CLICK() {
      this.$emit('clicked')
    }
  }
};
</script>