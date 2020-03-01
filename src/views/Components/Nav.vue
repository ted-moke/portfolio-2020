<template>
  <nav ref="nav" class="nav" v-bind:class="[padding ? 'no-fill' : '']" v-bind:style="{'background-color': getBgColor(this.$root.COLORS_GRAY[3])}">
    <div class="nav-section" v-bind:style="{'padding': '0 ' + padding + 'vw'}">
      <Shutter
        horizontal
        open
        v-bind:padding="padding"
        v-bind:content="navContent"
        v-bind:colors="this.$root.COLORS_GRAY"
        @triggerModal="triggerModal(modalName)"
      >
        <Button primary small clickEvent="triggerModal" @triggerModal="triggerModal('contact')">Contact</Button>
      </Shutter>
    </div>
  </nav>
</template>

<script>
import Color from 'color';
import gsap from 'gsap';
import Button from "@/views/Components/Button";
import Shutter from "@/views/Components/Shutter";

export default {
  name: "Nav",
  props: {
    msg: String
  },
  data: function() {
    return {
      padding: 20,
      navContent: [
        {
          title: "Contact",
          component: true
        },
        {
          title: "Work",
          text: "Work",
          link: "/work"
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
    gsap.to(this.el, {minWidth: '100vw', duration: .5, onComplete: ()=>{if (callback){callback()}}})
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
    Button,
    Shutter
  }
};
</script>
