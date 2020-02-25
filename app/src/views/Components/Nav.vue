<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nav</h2>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/work">work</router-link>
      <router-link to="/demos">demos</router-link>
      <Button white clickEvent="triggerModal" @triggerModal="triggerModal('contact')">
        Contact
      </Button>
    </p>
  </div>
</template>

<script>
import Button from "@/views/Components/Button";

export default {
  name: 'Nav',
  props: {
    msg: String
  },
  methods: {
    triggerModal(modalName) {
      this.$emit('triggerModal', modalName)
    }
  },
  components: {
    Button
  }
}
</script>
