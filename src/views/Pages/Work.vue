<template>
  <transition name="turn">
    <section v-show="shown" ref="el">
      <div class="section-header-container">
        <h2 class="section-header">My Work</h2>
      </div>
      <ShowcaseWrapper></ShowcaseWrapper>
    </section>
  </transition>
</template>


<script>
import ShowcaseWrapper from "@/views/Components/ShowcaseWrapper";

export default {
  data: function() {
    return {
      shown: false
    };
  },
  computed: {
    el: function() {
      return this.$refs.el;
    }
  },
  mounted: function() {
    this.shown = true;
  },
  components: {
    ShowcaseWrapper
  }
};
</script>