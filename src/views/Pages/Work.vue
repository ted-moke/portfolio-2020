<template>
  <transition name="turn">
    <section v-show="shown" ref="el" class="work">
      <div class="section-header-container">
        <h2 class="section-header">Ted Moke - Work</h2>
      </div>
      <ShowcaseWrapper></ShowcaseWrapper>
    <footer>
      <p><span class="highlight">Ted Moke</span> | JavaScript Developer</p>
    </footer>
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