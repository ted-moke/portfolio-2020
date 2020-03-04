<template>
  <div class="chapter">
    <img v-bind:src="chapterContent.thumbnail" />
  </div>
</template>

<script>

export default {
  props: {
    chapterContent: Object
  }
}

</script>