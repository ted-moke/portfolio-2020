<template>
  <nav class="nav">
    <div class="nav-section">
      <Shutter
        horizontal
        v-bind:content="navContent"
        v-bind:colors="this.$root.COLORS_GRAY"
        @triggerModal="triggerModal(modalName)"
      >
        <Button white clickEvent="triggerModal" @triggerModal="triggerModal('contact')">Contact</Button>
      </Shutter>
      <!-- <div class="link-container">
          <router-link to="/">Home</router-link>
          <router-link to="/work">work</router-link>
          <router-link to="/demos">demos</router-link>
          <Button white clickEvent="triggerModal" @triggerModal="triggerModal('contact')">Contact</Button>
      </div>-->
    </div>
  </nav>
</template>

<script>
import Button from "@/views/Components/Button";
import Shutter from "@/views/Components/Shutter";

export default {
  name: "Nav",
  props: {
    msg: String
  },
  data: function() {
    return {
      navContent: [
        {
          title: "Contact",
          component: true
        },
        {
          title: "Work",
          text: "Work",
          link: "/work"
        },
        {
          title: "Home",
          text: "Home",
          link: "/"
        },
      ]
    };
  },
  methods: {
    triggerModal(modalName) {
      this.$emit("triggerModal", modalName);
    }
  },
  components: {
    Button,
    Shutter
  }
};
</script>
