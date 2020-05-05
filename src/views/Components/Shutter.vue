<template>
  <div
    ref="shutter"
    class="shutter"
    v-bind:class="[{ 'horizontal': horizontal}, { 'bottom-expands': bottomExpands}, open ? '' : 'closed'] "
  >
    <Slat
      ref="slat"
      v-for="(piece, i) in content"
      v-bind:key="piece.title"
      v-bind:title="piece.title"
      v-bind:content="piece.text"
      v-bind:link="piece.link"
      v-bind:color="theColors[i]"
      v-bind:size="setSlatSize(i)"
      v-bind:contentSize="getSlatContentSize(i)"
      v-bind:horizontal="horizontal"
      v-bind:label="label"
      v-bind:button="buttons"
    ></Slat>
  </div>
</template>

<script>
import Slat from "../Components/Slat";
import gsap from "gsap";

export default {
  props: {
    bottomExpands: Boolean,
    buttons: Boolean,
    colors: Array,
    gray: Boolean,
    content: Array,
    desc: Array,
    label: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: 0
    },
    percentMobile: {
      type: Number,
      default: 100
    },
    percentDesktop: {
      type: Number,
      default: 100
    },
    horizontal: Boolean
  },
  data: function() {
    return {
      fixed: Boolean,
      Slats: Array
    };
  },
  computed: {
    shutterHeightBasePercentage() {
      console.log('store imobil', this.$root.store.clientInfo.isDesktop);
      if (this.$root.store.clientInfo.isDesktop) {
        return this.percentDesktop;
      } else {
        return this.percentMobile
      }
    },
    lastContentIdx() {
      return this.content.length - 1;
    },
    SHUTTER_STAGGER_ADJ() {
      if (this.bottomExpands) {
        return this.$root.SHUTTER_STAGGER;
      } else {
        return this.$root.SHUTTER_STAGGER * 2;
      }
    },
    slatHeight() {
      if (window.innerWidth < 768) {
        return window.innerHeight / 12;
      } else if(window.innerHeight < 799) {
        return window.innerHeight / 9;
      } else if (window.innerWidth < 1200) {
        return 80;
      } else {
        return 100;
      }
    },
    theColors() {
      if (this.gray) {
        return this.$root.COLORS_GRAY;
      }
      return this.colors || this.$root.COLORS;
    },
    unit() {
      if (this.fixed) {
        if (this.horizontal) {
          return "vw";
        } else {
          return "vh";
        }
      } else {
        return "%";
      }
    }
  },
  mounted() {
    this.Slats = this.$refs.slat;
    this.shutter = this.$refs.shutter;

    if (this.open) {
      this.toggleSlats(this.open, this.$root.SHUTTER_PAUSE);
    }
  },
  methods: {
    getSlatContentSize(i) {
      if (!this.bottomExpands) {
        return (this.shutterHeightBasePercentage - this.padding * 2) / this.content.length + this.unit;
      } else {
        if (i === this.content.length - 1) {
          return "100%";
        } else {
          return this.slatHeight + "px";
        }
      }
    },
    toggleSlats(toShow, pauseAfter) {
      for (let i in this.Slats) {
        window.setTimeout(() => {
          this.Slats[i].toggle();

          if (i == this.Slats.length - 1) {
            if (toShow) {
              window.setTimeout(this.ON_SHOW_COMPLETE, pauseAfter);
            } else {
              window.setTimeout(this.ON_HIDE_COMPLETE, pauseAfter);
            }
          }
        }, i * this.$root.TRANSITION_DURATION * this.SHUTTER_STAGGER_ADJ);
      }
    },
    setSlatSize: function(i) {
      if (!this.bottomExpands) {
        return (
          ((this.shutterHeightBasePercentage - this.padding * 2) / this.content.length) *
            (this.content.length - i) +
          this.unit
        );
      } else {
        return "calc(100% - " + this.slatHeight * i + "px)";
      }
    },
    show: function() {
      var callback = () => {
        this.$emit("SHOW_COMPLETE");
      };
      gsap.to(this.shutter, {
        height: "100%",
        duration: 0.5,
        onComplete: () => {
          if (callback) {
            callback();
          }
        }
      });
    },
    hide: function() {
      var callback = () => {
        this.$emit("HIDE_COMPLETE");
      };
      gsap.to(this.shutter, {
        height: "0%",
        duration: 0.5,
        onComplete: () => {
          if (callback) {
            callback();
          }
        }
      });
    },
    ON_HIDE_COMPLETE: function() {
      this.$emit("HIDE_COMPLETE");
    },
    ON_SHOW_COMPLETE: function() {
      this.$emit("SHOW_COMPLETE");
    }
  },
  watch: {
    open: function() {
      this.toggleSlats(this.open, this.$root.SHUTTER_PAUSE);
    }
  },
  components: {
    Slat
  }
};
</script>