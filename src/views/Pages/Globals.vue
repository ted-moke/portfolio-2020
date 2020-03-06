<template>
  <div class="globals">
    <Nav v-if="currentRoute != '/'" v-on:triggerModal="setModal"></Nav>
    <Prompt  v-if="this.$route.path === '/'"></Prompt>
    <Modal v-if="modalActive === 'contact'" ref="contact" name="contact" @close="setModal(null)">
      <template v-slot:modal-body>
        <p>
          <span class="bold">Email:</span> iam@tedmoke.com
        </p>
        <Form></Form>
        <div class="divider"></div>
        <div class="social-section">
          <a href="http://github.com/peppahjackk" target="_blank">
            <svg
              class="icon github"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                d="M16 .4C7.2.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.101 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.699 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5C23.1 6.6 24.4 7 24.4 7c.899 2.2.3 3.8.199 4.2 1 1.1 1.601 2.5 1.601 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.399c0 .4.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z"
              />
            </svg>
          </a>
          <a href="http://codepen.io/peppahjackk" target="_blank">
            <svg
              class="icon codepen"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                d="M32 10.9v-.7s0-.1-.1-.1V10s0-.1-.101-.1l-.1-.1s-.101 0-.101-.1h-.1L16.8.2c-.5-.3-1.1-.3-1.5 0L.6 10H.5s-.1 0-.1.1l-.1.1-.1.1v.1s0 .1-.1.1V22s0 .1.1.1v.101s0 .1.1.1l.1.101s.1 0 .1.1h.1l14.6 9.8c.2.2.5.2.8.2s.5-.1.8-.2L31.4 22h.1s.1 0 .1-.1l.101-.101.1-.1v-.101s0-.1.101-.1V10.899C32 11.1 32 11 32 10.9zm-14.6-7l10.8 7.2-4.8 3.2-6-4V3.9zm-2.8 0v6.4l-6 4-4.8-3.2 10.8-7.2zM2.8 13.7L6.2 16l-3.4 2.3v-4.6zm11.8 14.4L3.9 20.9l4.8-3.2 6 4v6.4h-.1zm1.4-8.8L11.1 16l4.9-3.3 4.9 3.3-4.9 3.3zm1.4 8.8v-6.4l6-4 4.8 3.2-10.8 7.2zm11.8-9.8L25.8 16l3.4-2.3v4.6z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/tedmoke/" target="_blank">
            <svg
              class="icon linkedin"
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
              />
            </svg>
          </a>
        </div>
      </template>
    </Modal>
    <div v-if="modalActive" ref="overlay" class="overlay" v-on:click="closeModal"></div>
  </div>
</template>

<script>
import gsap from 'gsap';

// @ is an alias to /src
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
  methods: {
    setModal(name) {
      
      this.modalActive = name || null;

        if (!this.overlayActive && name) {
          this.$nextTick(function() {
            this.showOverlay();
          })
        }
    },
    closeModal() {
      this.$refs[this.modalActive].close();
      this.hideOverlay();
    },
    showOverlay() {
      this.overlayActive = true;
      const overlay = this.$refs.overlay;
      const ROOT = this.$root;
      
      gsap.to(overlay, {opacity: 1, duration: ROOT.TRANSITION_DURATION, ease: ROOT.TRANSITION_EASE})
    },
    hideOverlay() {
      this.overlayActive = false;
      const overlay = this.$refs.overlay;
      const ROOT = this.$root;

      gsap.to(overlay, {opacity: 0, duration: ROOT.TRANSITION_DURATION, ease: ROOT.TRANSITION_EASE})
    },
  },
  components: {
    Form,
    Modal,
    Nav,
    Prompt
  },
};
</script>
