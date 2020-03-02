<template>
  <!-- <div class="page-container page-work"> -->
    <section>
    <ProjectWrapper v-bind:projectContent="projectContent"></ProjectWrapper>

    </section>
</template>


<script>
import PROJECT_DATA from "@/js/projects.js";
import ProjectWrapper from "@/views/Components/ProjectWrapper";

export default {
  data: function() {
    return {
      projectIdx: 0,
      shutterOpen: true
    };
  },
  computed: {
    projectContent: function() {
      return PROJECT_DATA.list[PROJECT_DATA.order[this.projectIdx]];
    }
  },
  components: {
    ProjectWrapper
  }
};
</script>