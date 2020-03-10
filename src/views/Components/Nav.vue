<template>
  <nav ref="nav" class="nav" v-bind:class="[padding ? 'no-fill' : '']" >
    <div class="nav-section" v-bind:style="{'padding': `0  ${padding}vw`}">
      <Shutter
        buttons
        horizontal
        v-bind:open="open"
        v-bind:padding="padding"
        v-bind:content="navContent"
        v-bind:colors="['#444']"
        @triggerModal="triggerModal(modalName)"
      ></Shutter>
    </div>
  </nav>
</template>

<script>
import Color from 'color';
import gsap from 'gsap';
import Shutter from "@/views/Components/Shutter";

export default {
  name: "Nav",
  data: function() {
    return {
      open: true,
      padding: 20,
      navContent: [
        {
          title: "Contact",
          text: "Contact"
        },
        {
          title: "Work",
          text: "Work",
          link: "/work"
        },
        {
          title: "Demos",
          text: "Demos",
          link: "/demos"
        },
        {
          title: "Home",
          text: "Home",
          link: "/"
        },
      ]
    };
  },
  computed: {
    el: function() {
      return this.$refs.nav
    },
  },
  mounted: function(callback) {
    let ROOT = this.$root;

    gsap.to(this.el, {minWidth: '100vw', duration: .5, ease: ROOT.TRANSITION_EASE, onComplete: ()=>{if (callback){callback()}}})

    ROOT.eventHub.$on('routing', ()=> {
      let cb = ()=> {
        ROOT.eventHub.$emit('transitionComplete', false)
      }
      // this.open = false;
      gsap.to(this.el, {minWidth: '0vw', duration: .5, ease: ROOT.TRANSITION_EASE, onComplete: ()=>{if (cb){cb()}}})
    })
  },
  methods: {
    triggerModal(modalName) {
      this.$emit("triggerModal", modalName);
    },
    getBgColor(color) {
      return Color(color).alpha(0.5)
    }
  },
  components: {
    Shutter
  }
};
</script>
