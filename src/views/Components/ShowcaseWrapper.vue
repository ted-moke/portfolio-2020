<template>
  <div class="showcase-wrapper" v-if="showcaseContent">
    <ShowcaseNav v-bind:content="showcaseContent"></ShowcaseNav>
    <div class="showcase-container">
      <div class="shutter-wrapper">
        <Shutter
          gray
          bottomExpands
          label
          v-bind:open="shutterOpen"
          v-bind:content="showcaseContent.slats"
          @SHOW_COMPLETE="ON_SHUTTER_SHOW()"
          @HIDE_COMPLETE="ON_SHUTTER_HIDE()"
        ></Shutter>
      </div>

      <FeatureWrapper v-bind:open="shutterOpen" v-bind:content="showcaseContent"></FeatureWrapper>
    </div>
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
      nextShowcaseId: null,
      shutterOpen: true
    }
  },
  computed: {
    currentShowcaseId: function() {
      return this.$root.store.currentShowcaseId;
    },
    showcaseContent: function() {
      return PROJECT_DATA.list[this.currentShowcaseId];
    }
  },
  mounted: function() {
    this.$root.eventHub.$on("next-feature", () => {
      var currIdx = PROJECT_DATA.order.indexOf(this.$root.store.currentShowcaseId);
      console.log(currIdx, PROJECT_DATA.order)
      var nextIdx = currIdx + 1;
      if (nextIdx >= PROJECT_DATA.order.length) {
        nextIdx = 0;        
      }

      console.log(PROJECT_DATA.order[nextIdx])

      this.$root.eventHub.$emit('route-showcase', PROJECT_DATA.order[nextIdx]);
    })

    this.$root.eventHub.$on("previous-feature", () => {
      var currIdx = PROJECT_DATA.order.indexOf(this.$root.store.currentShowcaseId);
      var prevIdx = currIdx - 1;
      if (prevIdx < 0) {
        prevIdx = PROJECT_DATA.order.length - 1;        
      }

      this.$root.eventHub.$emit('route-showcase', PROJECT_DATA.order[prevIdx]);
    })
    this.$root.eventHub.$on("route-showcase", showcaseRoute => {
      console.log(showcaseRoute)

      if (showcaseRoute === this.$route.params.project) {
        return
      }

      this.shutterOpen = false;
      this.nextShowcaseId = showcaseRoute;
      this.$root.store.routingToShowcase = showcaseRoute;

      return;
    });

    this.$root.eventHub.$on("currentShowcaseId-update", ()=>{
      this.currentShowcaseId = this.$root.store.currentShowcaseId;
    }) 
  },
  methods: {
    ON_SHUTTER_HIDE: function() {
      if (this.nextShowcaseId) {
        this.$root.store.currentShowcaseId = this.nextShowcaseId;
        
        this.shutterOpen = true;
        this.$router.push("/work/" + this.currentShowcaseId);
      }
    },
    ON_SHUTTER_SHOW: function() {
      this.$root.eventHub.$emit('showcase-in')
    }
  },
  components: {
    FeatureWrapper,
    ShowcaseNav,
    Shutter
  },
};
</script>