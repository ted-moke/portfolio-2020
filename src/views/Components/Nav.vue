<template>
<transition name="grow">
  <nav ref="nav" class="nav" v-bind:class="[padding ? 'no-fill' : '']" >
    <div class="nav-section">
      <div
      v-for="(item) of navContent"
      v-bind:key="item.title"
      class="nav-item"
      :class="[$route.path.includes(item.title) ? 'active' : '']"
      @click="ON_CLICK(item.title)">
        <p v-if="false" class="nav-text" v-html="item.text"></p>
      </div>
      <div class="nav-item nav-item-logo" @click="ON_CLICK('home')">
        <svg class="logo logo-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1141.56 226.22">
          <title>block-logo-simple-horizontal</title>
          <g id="Layer_5" data-name="Layer 5">
            <rect class="cls-1" x="8" y="8" width="1125.56" height="210.63"/>
            <text class="cls-2" transform="translate(40.22 185.38)">TED</text>
            <text class="cls-3" transform="translate(495.22 185.38)">MOKE</text>
          </g>
        </svg>
      </div>
    </div>
  </nav>
</transition>
</template>

<script>
import Color from 'color';

export default {
  name: "Nav",
  data: function() {
    return {
      open: true,
      navContent: [
        {
          title: "contact",
          text: "Contact"
        },
        {
          title: "play",
          text: 'play',
          linke:'/play'
        },
        {
          title: "work",
          text: "Work",
          link: "/work"
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
        document.documentElement.classList.add('disable-snap');
        this.$scrollTo('.jumbotron', {
          duration: 500,
          onDone: () => {document.documentElement.classList.remove('disable-snap');},
          onCancel: () => {document.documentElement.classList.remove('disable-snap');},
        })
      } else if (id === 'contact') {
        this.$root.eventHub.$emit('toggle-contact');
      } else if (id === 'work') {
        this.$router.push("/" + id + '/' + this.$root.store.currentShowcaseId);
      } else {
        this.$router.push("/" + id);
      }
      
    }
  },
};
</script>
