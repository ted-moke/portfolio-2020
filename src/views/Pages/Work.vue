<template>
  <transition name="turn">
    <section v-show="shown" ref="el" class="work">
      <ShowcaseWrapper :open="shown"></ShowcaseWrapper>
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
      default: true
    },
    shown: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ShowcaseWrapper
  }
};
</script>