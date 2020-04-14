<template>
  <div ref="slat" class="slat" v-bind:class="[title, horizontal]" v-bind:style="{ [horizontal ? 'width': 'height']: size, 'background-color': color }">
    <div class="content-container" v-bind:style="{ [horizontal ? 'width': 'height']: contentSize, [horizontal ? 'right': 'top']: 0}">
      <p v-if="!button" v-html="content"></p>
      <Button v-if="button" v-bind:active="this.$route.name === content" small v-bind:white="content != 'Contact'" v-bind:primary="content === 'Contact'" clickEvent="toggle-contact">{{content}}</Button>
      <div v-if="label" class="slat-label">
        <label v-html="title"></label>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Button from "../Components/Button";

export default {
  props: {
    button: Boolean,
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
      open: false
    }
  },
  computed: {
    el: function() {
      return this.$refs.slat
    },
  },
  methods: {
    show: function() {
      var callback = ()=>{
        this.$emit('SHOW_COMPLETE')
      }
      if (this.horizontal) {
        gsap.to(this.el, {x: '0%', duration: .5, onComplete: ()=>{if (callback){callback()}}})
      } else {
        gsap.to(this.el, {y: '0%', duration: .5, onComplete: ()=>{if (callback){callback()}}})
      }
    },
    
    hide: function() {
      var callback = ()=>{
        this.$emit('HIDE_COMPLETE')
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
  components: {
    Button
  }
};
</script>