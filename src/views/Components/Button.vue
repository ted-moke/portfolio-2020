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
    localClickEvent: String,
    primary: Boolean,
    fourth: Boolean,
    small: Boolean,
    white: Boolean,
    circle: Boolean
  },
  methods: {
    emitEvent(e) {
      e.preventDefault();
      if (!this.clickEvent && !this.localClickEvent) return;
      
      if (this.clickEvent) {
        this.$root.eventHub.$emit(this.clickEvent);
      }

      if (this.localClickEvent) {
        this.$emit(this.localClickEvent)
      }
    }
  }
};
</script>