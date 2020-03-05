<template>
  <div ref="slat" class="slat" v-bind:class="[title, horizontal]" v-bind:style="{ [horizontal ? 'width': 'height']: size, 'background-color': color }">
    <div class="content-container" v-bind:style="{ [horizontal ? 'width': 'height']: contentSize, [horizontal ? 'right': 'top']: 0}">
      <p v-if="!button">{{ content }}</p>
      <Button v-if="button" v-bind:active="this.$route.name === content" small v-bind:white="content != 'Contact'" v-bind:primary="content === 'Contact'" clickEvent="triggerModal" @triggerModal="triggerModal('contact')">{{content}}</Button>
    </div>
    <div v-if="label" class="slat-label">
      <label>{{title}}</label>
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
    open: Boolean,
    size: String,
    title: String
  },
  computed: {
    el: function() {
      return this.$refs.slat
    },
  },
  mounted: function() {
    console.log(this.open);
    if (this.open) {
      this.show()
    } else {
      this.hide();
    }
  },
  methods: {
    show: function() {
      var callback = ()=>{
        this.$emit('SHOW_COMPLETE')
      }
      if (this.horizontal) {
        gsap.to(this.el, {x: '0%', duration: .5, onComplete: ()=>{if (callback){console.log(this.el); callback()}}})
      } else {
        gsap.to(this.el, {y: '0%', duration: .5, onComplete: ()=>{if (callback){console.log(this.el); callback()}}})
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
    }
  },
  watch: {
    open: function(newVal) {
      if (newVal) {
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