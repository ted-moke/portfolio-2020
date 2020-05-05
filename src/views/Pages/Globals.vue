<template>
  <div class="globals">
    <Nav v-show="currentRoute != '/' && $root.store.clientInfo.isDesktop && false"></Nav>
    <ControlsOverlay v-show="currentRoute != '/' && !$root.store.overlayControlsHidden"></ControlsOverlay>
    <Prompt  v-show="this.$route.path === '/'"></Prompt>
    <Modal v-if="modalActive === 'contact'" ref="contact" name="contact" @close="setModal">
      <template v-slot:modal-body>
        <h1>Contact</h1>
        
          <p class="email-address-label">
            <span class="bold">Email:</span> iam@tedmoke.com
          </p>
          <Form></Form>
        
        <div class="boxed-content">
          <a href="#" class="social-link">
            <h3>Resume</h3>
          </a>
          <a href="http://github.com/peppahjackk" class="social-link" target="_blank" rel="noreferrer">
            <h3>Github</h3>
          </a>
          <a href="http://codepen.io/peppahjackk" class="social-link" target="_blank" rel="noreferrer">
            <h3>Codepen</h3>
          </a>
          <a href="https://www.linkedin.com/in/tedmoke/" class="social-link" target="_blank" rel="noreferrer">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </template>
    </Modal>
    <div v-show="modalActive" ref="overlay" class="overlay" v-on:click="closeModal"></div>
  </div>
</template>

<script>
import gsap from 'gsap';

// @ is an alias to /src
import ControlsOverlay from "@/views/Components/ControlsOverlay.vue";
import Nav from "@/views/Components/Nav.vue";
import Form from "@/views/Components/Form.vue";
import Prompt from "@/views/Components/Prompt.vue";
import Modal from "@/views/Components/Modal.vue";

export default {
  name: "globals",
  data: function() {
    return {
      navActive: false,
      modalActive: null,
      overlayActive: false
    };
  },
  computed: {
    currentRoute: function() {
      return this.$route.path;
    }
  },
  mounted: function() {
    this.$root.eventHub.$on('toggle-contact', () => {
      this.setModal('contact');
    })
  },
  methods: {
    setModal(name) {
      this.modalActive = name || null;

      console.log(name, this.modalActive);

      this.$forceUpdate();

        if (!this.overlayActive && name) {
          this.$nextTick(function() {
            this.showOverlay();
          })
        }
    },
    closeModal() {
      // this.modalActive = null;
      this.$refs[this.modalActive].close();
      this.hideOverlay();
    },
    showOverlay() {
      this.overlayActive = true;
      const overlay = this.$refs.overlay;
      const ROOT = this.$root;
      
      gsap.to(overlay, {opacity: 1, y: '0%', duration: ROOT.TRANSITION_DURATION, ease: ROOT.TRANSITION_EASE})
    },
    hideOverlay() {
      this.overlayActive = false;
      const overlay = this.$refs.overlay;
      const ROOT = this.$root;

      gsap.to(overlay, {opacity: 0, y: '100%', duration: ROOT.TRANSITION_DURATION, ease: ROOT.TRANSITION_EASE})
    },
  },
  components: {
    ControlsOverlay,
    Form,
    Modal,
    Nav,
    Prompt
  },
};
</script>
