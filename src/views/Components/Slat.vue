<template>
  <div ref="slat" class="slat">
    <p>{{ job }}</p>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    job: String,
    open: Boolean
  },
  computed: {
    el: function() {
      return this.$refs.slat
    },
  },
  mounted: function() {
    if (open) {
      this.show()
    } else {
      this.hide();
    }
  },
  methods: {
    show: function(callback) {
        gsap.to(this.el, {y: 0, duration: .5, onComplete: ()=>{if (callback){console.log(this.el); callback()}}})
    },
    
    hide: function(callback) {
        gsap.to(this.el, {y: '100%', duration: .5, onComplete: ()=>{if (callback){callback()}}})
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
  }
};
</script>