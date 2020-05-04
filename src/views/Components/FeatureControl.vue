<template>
  <div class="control-feature-container">
      <a @click="$root.eventHub.$emit('previous-feature')">
        <p>Previous</p>
      </a>
      <a @click="$root.eventHub.$emit('next-feature')">
        <p>Next</p>
      </a>
  </div>
</template>
