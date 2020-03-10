<template>
  <nav ref="nav" class="nav" v-bind:class="[padding ? 'no-fill' : '']" >
    <div class="nav-section" v-bind:style="{'padding-left': `${padding}vw`, 'padding-right': `${padding}vw`}">
      <Chip
      v-for="(item) of navContent"
      v-bind:key="item.title"
      v-bind:color="[$route.path.indexOf(item.title.toLowerCase()) > 0 ? $root.COLORS[0] : $root.COLORS_GRAY[2]]">
        <p>{{item.text}}</p>
      </Chip>
    </div>
  </nav>
</template>

<script>
import Chip from '@/views/Components/Chip.vue';
import Color from 'color';
import gsap from 'gsap';

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
        // {
        //   title: "Demos",
        //   text: "Demos",
        //   link: "/demos"
        // },
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

    console.log(this.$route.path);

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
    Chip,
  }
};
</script>
