<template>
  <div ref="slat" class="slat" v-bind:class="[title, horizontal]" v-bind:style="{ [horizontal ? 'width': 'height']: size, 'background-color': color }">
    <div class="content-container" v-bind:style="{ [horizontal ? 'width': 'height']: contentSize, [horizontal ? 'right': 'top']: 0}">
      <p v-html="currentContent"></p>
      <div v-if="label" class="slat-label">
        <label v-html="title"></label>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    color: String,
    content: String,
    contentSize: String,
    horizontal: Boolean,
    label: {
      type: Boolean,
      default: false
    },
    link: String,
    size: String,
    title: String
  },
  data: function() {
    return {
      open: false,
      currentContent: null
    }
  },
  computed: {
    el: function() {
      return this.$refs.slat
    },
  },
  mounted: function() {
    if (this.content) {
      this.currentContent = this.content;
    }
  },
  methods: {
    show: function(cb) {
      var callback = ()=>{
        this.$emit('SHOW_COMPLETE')

        if (cb) {
          cb();
        }
      }
      if (this.horizontal) {
        gsap.to(this.el, {x: '0%', duration: .5,ease: 'back.out(1.35)', onComplete: ()=>{if (callback){callback()}}})
      } else {
        gsap.to(this.el, {y: '0%', duration: .5,ease: 'back.out(1.35)', onComplete: ()=>{if (callback){callback()}}})
      }
    },
    
    hide: function(cb) {
      var callback = ()=>{
        this.$emit('HIDE_COMPLETE');

        if (cb) {
          cb();
        }
      }
      if (this.horizontal) {
        gsap.to(this.el, {x: '-100%', duration: .5, onComplete: ()=>{if (callback){callback()}}})
      } else {
        gsap.to(this.el, {y: '100%', duration: .5, onComplete: ()=>{if (callback){callback()}}})
      }
    },
    toggle: function() {
      this.open = !this.open;

      if (this.open) {
        this.show();
      } else {
        this.hide();
      }
    }

  },
  watch: {
    content: function(newVal) {
      this.hide(()=> {
        this.currentContent = newVal;

        this.show();
      })
    }
  },
};
</script>