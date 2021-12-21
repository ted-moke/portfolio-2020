<template>
<transition name="grow">
  <nav ref="nav" class="nav" >
    <div class="nav-section">
      <div
      v-for="(item) of navContent"
      v-bind:key="item.title"
      class="nav-item"
      :class="[$route.path.includes(item.title) ? 'active' : '']"
      @click="ON_CLICK(item.title)">
        <!-- <p v-if="false" class="nav-text" v-html="item.text"></p> -->
        <p class="nav-text" v-html="item.text"></p>
      </div>
      <div class="nav-item nav-item-logo" @click="ON_CLICK('home')">
        <svg class="logo logo-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1141.56 226.63">
          <title>logo-horizontal-baked</title>
          <g id="Layer_5" data-name="Layer 5">
            <rect class="cls-1" x="8" y="8" width="1125.56" height="210.63"/>
            <g class="cls-2">
              <path class="cls-3" d="M86.19,185.38V70.77H42.69V40.05H168V70.77h-43.5V185.38Z"/>
              <path class="cls-3" d="M183.69,185.38V40.05H287V69.32H220.59V97h62.25V126H220.59v30.1H287v29.27Z"/>
              <path class="cls-3" d="M306.75,40.05h59.17q24.1,0,41.53,8.66a61.23,61.23,0,0,1,26.7,25q9.27,16.4,9.28,38.86,0,22.68-9.18,39.07a60.59,60.59,0,0,1-26.59,25q-17.43,8.66-41.74,8.66H306.75Zm56.49,114.82q21.43,0,31.95-10.51t10.51-31.75q0-21.23-10.51-31.64T363.24,70.56H344.68v84.31Z"/>
            </g>
            <g class="cls-2">
              <path class="cls-3" d="M625.91,40.05h29.27V185.38h-33V109.11l-28,52.15H569.84L542,110.34l-.2,75h-33V40.05h29.89l43.7,82.66Z"/>
              <path class="cls-3" d="M712.39,178.06a62.47,62.47,0,0,1-25.25-26q-8.88-16.8-8.87-39.48t8.87-39.47a61.88,61.88,0,0,1,25.25-25.87Q728.77,38.19,751,38.2t38.65,9.07a61.3,61.3,0,0,1,25.15,25.87q8.76,16.8,8.76,39.47t-8.86,39.48a62.55,62.55,0,0,1-25.26,26q-16.38,9.18-38.44,9.18Q728.78,187.24,712.39,178.06Zm64.42-31.54q9.27-11.64,9.27-33.91t-9.38-33.8Q767.33,67.26,751,67.26q-16.5,0-25.77,11.44T716,112.61q0,22.47,9.27,34T751,158.17Q767.53,158.17,776.81,146.52Z"/>
              <path class="cls-3" d="M987.48,185.38H942.54L884,119.62v65.76H846.07V40.05H884v62.46l56.89-62.46h44.32L921.1,109.11Z"/>
              <path class="cls-3" d="M990,185.38V40.05h103.28V69.32h-66.38V97h62.26V126h-62.26v30.1h66.38v29.27Z"/>
            </g>
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
        // {
        //   title: "play",
        //   text: 'play',
        //   linke:'/play'
        // },
        // {
        //   title: "work",
        //   text: "Work",
        //   link: "/work"
        // },
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
