<template>
<transition name="grow">
  <nav ref="nav" class="nav" v-bind:class="[padding ? 'no-fill' : '']" >
    <div class="nav-section" v-bind:style="{'padding-left': `${padding}vw`, 'padding-right': `${padding}vw`}">
      <Chip
      v-for="(item) of navContent"
      v-bind:key="item.title"
      v-bind:color="[$route.path.indexOf(item.title.toLowerCase()) > 0 ? $root.COLORS[0] : $root.COLORS_GRAY[2]]"
      @clicked="ON_CLICK(item.title)">
        <p v-html="item.text"></p>
      </Chip>
    </div>
  </nav>
</transition>
</template>

<script>
import Chip from '@/views/Components/Chip.vue';
import Color from 'color';
// import gsap from 'gsap';

export default {
  name: "Nav",
  data: function() {
    return {
      open: true,
      padding: 20,
      navContent: [
        {
          title: "contact",
          text: "Contact"
        },
        {
          title: "work",
          text: "Work",
          link: "/work"
        },
        {
          title: "home",
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
  methods: {
    getBgColor(color) {
      return Color(color).alpha(0.5)
    },
    ON_CLICK(id) {
      if (id === 'home') {
        this.$router.push("/");
      } else if (id === 'contact') {
        // this.$router.push("/" + id);
      } else if (id === 'work') {
        this.$router.push("/" + id + '/' + this.$root.store.currenShowcaseId);
      } else {
        this.$router.push("/" + id);
      }
      
    }
  },
  components: {
    Chip,
  }
};
</script>
