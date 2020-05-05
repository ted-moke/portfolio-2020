<template>
  <div ref="jumbotron" class="jumbotron page-wrapper">
    <div class="jumbotron-content content-left">
      <svg class="logo logo-tedmoke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 717 527.47">
        <title>logo-block-old</title>
        <rect
          x="11"
          y="11"
          width="695"
          height="500"
          style="fill: none;stroke: #0e1428;stroke-miterlimit: 10;stroke-width: 22px"
        />
        <text
          transform="translate(62.23 272.32)"
          style="font-size: 302.4959716796875px;fill: #0e1428;font-family: NunitoSans-Black, Nunito Sans;font-weight: 800"
        >TED</text>
        <text
          transform="translate(53.56 462.95)"
          style="font-size: 206.1366424560547px;fill: #0e1428;font-family: NunitoSans-Black, Nunito Sans;font-weight: 800"
        >MOKE</text>
      </svg>
    </div>
    <div class="jumbotron-content content-right">
      <Shutter
        v-bind:open="shutterOpen"
        v-bind:content="shutterContent"
        v-bind:percentMobile="mobileShutterHeight"
        @SHOW_COMPLETE="ON_SHUTTER_OPEN"
      ></Shutter>
    </div>
  </div>
</template>

<script>
import Shutter from "../Components/Shutter";

export default {
  props: {
    loaded: Boolean
  },
  data: function() {
    return {
      JOB_DESC: [
        { job: "javascript" },
        { job: "front-end" },
        { job: "interactive" }
      ],
      currentDesc: 0,
      shutterOpen: false,
      mobileShutterHeight: 50
    };
  },
  computed: {
    el: function() {
      return this.$refs.jumbotron;
    },
    shutterContent: function() {
      return [
        {
          title: "client",
          text: ""
        },
        {
          title: "project",
          text: this.JOB_DESC[0].job
        },
        {
          title: "role",
          text: "developer"
        },
        {
          title: "description",
          text: ""
        }
      ];
    }
  },
  // mounted: function() {
  //   this.shutterOpen = true;
  // },
  methods: {
    ON_SHUTTER_OPEN: function() {
      this.$root.eventHub.$emit("bounce-arrows");
    }
  },
  components: {
    Shutter
  },
  watch: {
    loaded: function(newVal) {
      if (newVal) {
        console.log('opening shutter');
        this.shutterOpen = true;
      }
    }
  }
};
</script>