<template>
  <div class="form-wrapper">
    <form>
      <div class="form-section">
        <label for="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div class="form-section">
        <label for="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div class="form-section">
        <label for="message">Message:</label>
        <textarea rows="4" id="message"></textarea>
      </div>
      <a class="button primary" id="formSubmit">
        <h4>Send</h4>
      </a>
    </form>
  </div>
</template>