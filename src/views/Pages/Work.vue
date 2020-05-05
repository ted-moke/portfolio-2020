<template>
  <transition name="turn">
    <section v-show="loaded" ref="el" class="work">
      <div class="section-header-container">
        <h2 class="section-header">Ted Moke - Work</h2>
      </div>
      <ShowcaseWrapper :open="loaded"></ShowcaseWrapper>
      <footer>
        <p><span class="highlight">Ted Moke</span> | JavaScript Developer</p>
      </footer>
    </section>
  </transition>
</template>


<script>
import ShowcaseWrapper from "@/views/Components/ShowcaseWrapper";

export default {
  props: {
    loaded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    el: function() {
      return this.$refs.el;
    }
  },
  components: {
    ShowcaseWrapper
  }
};
</script>