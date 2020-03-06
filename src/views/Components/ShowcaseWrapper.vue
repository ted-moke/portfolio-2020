<template>
  <div class="showcase-wrapper">
    <div class="showcase-container">
      <div class="shutter-wrapper">
        <Shutter
          gray
          bottomExpands
          label
          v-bind:open="shutterOpen"
          v-bind:content="showcaseContent.slats"
          @HIDE_COMPLETE="ON_SHUTTER_CLOSE()"
        ></Shutter>
      </div>

      <FeatureWrapper v-bind:open="shutterOpen" v-bind:content="showcaseContent"></FeatureWrapper>
    </div>
    <ShowcaseNav v-bind:content="showcaseContent"></ShowcaseNav>
  </div>
</template>

<script>
import PROJECT_DATA from "@/js/projects.js";
import FeatureWrapper from "@/views/Components/FeatureWrapper.vue";
import ShowcaseNav from "@/views/Components/ShowcaseNav.vue";
import Shutter from "@/views/Components/Shutter.vue";

export default {
  data: function() {
    return {
      currentShowcaseId: PROJECT_DATA.order[0],
      nextShowcaseId: null,
      shutterOpen: true
    }
  },
  computed: {
    showcaseContent: function() {
      return PROJECT_DATA.list[this.currentShowcaseId];
    }
  },
  mounted: function() {
    this.$root.eventHub.$on("route-showcase", showcaseRoute => {

      if (showcaseRoute === this.$route.params.project) {
        return
      }

      this.shutterOpen = false;
      this.nextShowcaseId = showcaseRoute;
      return;
    });
  },
  methods: {
    ON_SHUTTER_CLOSE: function() {
      console.log("shutter close");
      if (this.nextShowcaseId) {
        this.currentShowcaseId = this.nextShowcaseId;
        this.shutterOpen = true;
        this.$router.push("/work/" + this.currentShowcaseId);
      }
    }
  },
  components: {
    FeatureWrapper,
    ShowcaseNav,
    Shutter
  },
  // watch: {
  //   shutterOpen: function() {

  //   }
  // }
};
</script>