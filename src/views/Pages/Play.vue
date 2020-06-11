<template>
  <transition name="turn">
    <section v-show="shown" ref="el" class="play">
      Demos page hun
    </section>
  </transition>
</template>


<script>
export default {
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
};
</script>