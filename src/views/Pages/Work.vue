<template>
  <!-- <div class="page-container page-work"> -->
    <section>
      <div class="section-header-container">
        <h2 class="section-header">My Work</h2>
      </div>
      <ProjectWrapper v-bind:projectContent="projectContent"></ProjectWrapper>
      <ProjectNav v-bind:content="projectData"></ProjectNav>
    </section>
</template>


<script>
import PROJECT_DATA from "@/js/projects.js";
import ProjectNav from "@/views/Components/ProjectNav";
import ProjectWrapper from "@/views/Components/ProjectWrapper";

export default {
  data: function() {
    return {
      projectData: PROJECT_DATA,
      projectIdx: 0,
      shutterOpen: true
    };
  },
  computed: {
    projectContent: function() {
      return this.projectData.list[this.projectData.order[this.projectIdx]];
    }
  },
  components: {
    ProjectWrapper,
    ProjectNav,
  }
};
</script>