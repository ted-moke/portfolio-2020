<template>
  <div ref="shutter" class="shutter">
    <Slat
      ref="slat"
      v-for="(piece, i) in content"
      v-bind:key="piece.job"
      v-bind:job="piece.job"
      v-bind:open="shutterOpen"
      v-bind:height="slatHeight"
      v-bind:style="{ 'height': setSlatHeight(i) }"
    />
  </div>
</template>

<script>
import Slat from "../Components/Slat";

export default {
  props: {
    bottomExpands: Boolean,
    content: Array
  },
  data: function() {
    return {
      Slats: Array,
      slatHeight: Number,
      shutterOpen: true
    };
  },
  computed: {
    // Slats: function() {
    //   return this.$refs.slat;
    // },
    // shutterHeight: function() {
    //   let shutter = this.$refs.shutter;
    //   console.log("this.$refs :", this.$refs);
    //   return shutter.getBoundingClientRect().height;
    // },
    // slatHeight: function() {
    //   if (!this.bottomExpands) {
    //     return this.shutterHeight / this.Slats.length;
    //   } else {
    //     return 120;
    //   }
    // }
  },
  mounted() {
    this.Slats = this.$refs.slat;
    this.shutter = this.$refs.shutter;

    if (!this.bottomExpands) {
        this.slatHeight = this.shutterHeight / this.Slats.length;
      } else {
        this.slatHeight = 120;
      }

    console.log('this.Slats :', this.Slats);
    // this.setSlatHeight();
  },
  methods: {
    setSlatHeight: function(i) {
      // let SlatMargin;
console.log(this.shutterHeight, this.slatHeight);
      return this.shutterHeight - this.slatHeight * i + "px";

      // this.Slats.forEach((Slat, i) => {
      //   Slat.elm.style.height = this.shutterHeight - this.slatHeight * i + "px";
      //   if (i < this.Slats.length - 1) {
      //     SlatMargin =
      //       (this.slatHeight - Slat.contentEl.getBoundingClientRect().height + 2) /
      //         2 +
      //       "px";
      //     Slat.contentEl.style.marginTop = SlatMargin;
      //   } else {
      //     Slat.contentEl.style.marginTop = SlatMargin;
      //   }
      // });
    }
  },
  components: {
    Slat
  }
};
</script>