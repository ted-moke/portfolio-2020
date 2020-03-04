<template>
  <button v-on:click="emitEvent" v-bind:class="[white ? 'white' : '', primary ? 'primary' : '', small ? 'small': '', active ? 'active': '' ]">
    <h4><slot></slot></h4>
  </button>
</template>

<script>

export default {
  name: "Button",
  props: {
    active: Boolean,
    clickEvent: String,
    primary: Boolean,
    small: Boolean,
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