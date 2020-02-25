<template>
  <button v-on:click="emitEvent" v-bind:class="[white ? 'white' : '', primary ? 'primary' : '' ]">
    <slot><h4>{label}</h4></slot>
  </button>
</template>

<script>

export default {
  name: "Button",
  props: {
    clickEvent: String,
    label: String,
    primary: Boolean,
    white: Boolean,
  },
  methods: {
    emitEvent(e) {
      if (!this.clickEvent) return;
      let eTarget = e.target;
      if (!eTarget.id) {
        eTarget = eTarget.closest('button')
      }
      this.$emit(this.clickEvent, eTarget);
    }
  }
};
</script>