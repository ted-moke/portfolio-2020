<template>
  <div ref="jumbotron" class="jumbotron">
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
        <g>
          <path
            d="M184.53,318.08H213.8V463.4h-33V387.13l-28,52.15H128.46l-27.83-50.91-.21,75h-33V318.08H97.33L141,400.74Z"
            style="fill: #0e1428"
          />
          <path
            d="M271,456.08a62.47,62.47,0,0,1-25.25-26q-8.87-16.8-8.87-39.47t8.87-39.48A61.88,61.88,0,0,1,271,325.29q16.38-9.06,38.65-9.07t38.65,9.07a61.3,61.3,0,0,1,25.15,25.87q8.76,16.8,8.76,39.48t-8.86,39.47a62.55,62.55,0,0,1-25.26,26q-16.38,9.18-38.44,9.18Q287.39,465.26,271,456.08Zm64.42-31.53q9.27-11.66,9.27-33.91t-9.38-33.81q-9.37-11.55-25.66-11.54-16.5,0-25.77,11.44t-9.27,33.91q0,22.47,9.27,34t25.77,11.54Q326.14,436.19,335.42,424.55Z"
            style="fill: #0e1428"
          />
          <path
            d="M546.09,463.4H501.15l-58.54-65.76V463.4H404.68V318.08h37.93v62.46l56.89-62.46h44.32l-64.11,69.05Z"
            style="fill: #0e1428"
          />
          <path
            d="M548.56,463.4V318.08H651.83v29.27H585.46V375h62.25V404H585.46v30.09h66.37V463.4Z"
            style="fill: #0e1428"
          />
        </g>
        <g id="path_group">
          <path d="M131.22,271.56V104.42H131V59.63h56v44.79h.13V271.56Z" style="fill: #0e1428" />
          <path
            d="M273.41,271.56V59.63H424v42.69H327.22V142.6H418V185H327.22v43.89H424v42.68Z"
            style="fill: #0e1428"
          />
          <path
            d="M452.87,59.63h86.27q35.18,0,60.58,12.63a89.2,89.2,0,0,1,38.93,36.52q13.51,23.89,13.52,56.67,0,33.06-13.37,57T600,258.94q-25.41,12.62-60.88,12.62H452.87Zm82.36,167.44q31.28,0,46.6-15.33t15.33-46.29q0-31-15.33-46.15t-46.6-15.18H508.18v123Z"
            style="fill: #0e1428"
          />
        </g>
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
        @SHOW_COMPLETE="ON_SHUTTER_OPEN"
      ></Shutter>
    </div>
  </div>
</template>

<script>
import Shutter from "../Components/Shutter";

export default {
  data: function() {
    return {
      JOB_DESC: [
        { job: "javascript" },
        { job: "front-end" },
        { job: "interactive" }
      ],
      currentDesc: 0,
      shutterOpen: false
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
          title: "roles",
          text: "developer"
        },
        {
          title: "description",
          text: ""
        }
      ];
    }
  },
  mounted: function() {
    this.shutterOpen = true;
  },
  methods: {
    ON_SHUTTER_OPEN: function() {
      this.$root.eventHub.$emit("bounce-arrows");
    }
  },
  components: {
    Shutter
  }
};
</script>