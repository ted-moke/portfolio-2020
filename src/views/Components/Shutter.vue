<template>
  <div ref="shutter" class="shutter">
    <Slat
      ref="slat"
      v-for="(piece, i) in content"
      v-bind:key="piece.title"
      v-bind:content="piece.content"
      v-bind:open="shutterOpen"
      v-bind:color="theColors[i]"
      v-bind:height="setSlatHeight(i)"
      v-bind:margin="getSlatMargin()"
    />
  </div>
</template>

<script>
import Slat from "../Components/Slat";


export default {
  props: {
    bottomExpands: Boolean,
    colors: Array,
    content: Array,
    desc: Array
  },
  data: function() {
    return {
      Slats: Array,
      slatHeight: 120,
      shutterOpen: true
    };
  },
  computed: {
    theColors() {
      return this.colors || this.$root.COLORS
    }
  },
  mounted() {
    this.Slats = this.$refs.slat;
    this.shutter = this.$refs.shutter;
  },
  methods: {
    getSlatMargin: function() {
      if (!this.bottomExpands) {
        return (100 / this.content.length) + "%";
      } else {
        return this.slatHeight + "px";
      }
    },
    setSlatHeight: function(i) {
      if (!this.bottomExpands) {
        return (100 / this.content.length) * (this.content.length - i) + "%";
      } else {
        return "calc(100% - " + this.slatHeight * (this.content.length - i - 1) + "px)";
      }
    }
  },
  components: {
    Slat
  }
};
</script>