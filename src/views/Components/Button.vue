<template>
  <button v-on:click="emitEvent" v-bind:class="[white ? 'white' : '', primary ? 'primary' : '', fourth ? 'fourth': '', small ? 'small': '', active ? 'active': '', circle ? 'circle': '' ]">
   <slot></slot>
  </button>
</template>

<script>

export default {
  name: "Button",
  props: {
    active: Boolean,
    clickEvent: String,
    primary: Boolean,
    fourth: Boolean,
    small: Boolean,
    white: Boolean,
    circle: Boolean
  },
  methods: {
    emitEvent() {
      if (!this.clickEvent) return;
      
      this.$root.eventHub.$emit(this.clickEvent);
    }
  }
};
</script>