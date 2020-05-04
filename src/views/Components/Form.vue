<template>
  <div class="form-wrapper">
    <form>
      <div class="form-section">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-section">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-section">
        <label for="message">Message:</label>
        <textarea rows="4" id="message" v-model="message"></textarea>
      </div>
      <div>
        <Button localClickEvent="submitForm" @submitForm="ON_SUBMIT" white>
          <h4>Send</h4>
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  components: {
    Button
  },
  data: function() {
    return {
      email: null,
      name: null,
      message: null
    };
  },
  methods: {
    ON_SUBMIT: function() {
      console.log('ON SUBMIT');
      if (!this.email || !this.name || !this.message) return;

      let data = { name: this.name, email: this.email, message: this.message };

      console.log('data :>> ', data);

      this.axios.post("http://tedmoke.com/test/portfolio/php/process.php", data)
        .then(response => {
          console.log(response);
          if (response.data === 'success') {
            this.$root.eventHub.$emit('toggle-contact');
            this.name = '';
            this.email = '';
            this.message = '';
          }
        });
    }
  }
};
</script>