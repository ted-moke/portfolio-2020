<template>
  <!-- <div class="page-container page-work"> -->
    <section>
      <div class="section-header-container">
        <h2 class="section-header">My Work</h2>
      </div>
      <ShowcaseWrapper></ShowcaseWrapper>
    </section>
</template>


<script>
import ShowcaseWrapper from "@/views/Components/ShowcaseWrapper";

export default {
  components: {
    ShowcaseWrapper,
  },
};
</script>