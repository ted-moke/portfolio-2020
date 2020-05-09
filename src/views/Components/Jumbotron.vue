<template>
  <div ref="jumbotron" class="jumbotron page-wrapper">
    <div ref="jumboLeft" class="jumbotron-content content-left">
      <svg ref="logo" class="logo logo-tedmoke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2473 1392">
        <title>logo-tedmoke-anim-box_counter-adj</title>
        <g ref="box-path">
          <polygon
            ref="boxFullClockwise"
            class="cls-1"
            points="1584 868.06 1584 945.66 889 945.66 889 445.66 1584 445.66 1584 868.06"
          />
          <polygon
            ref="boxFullCounterwise"
            class="cls-1"
            points="1584 897.4 1584 445.66 889 445.66 889 945.66 1584 945.66 1584 897.4"
          />
        </g>
        <g ref="mokePath">
          <path
            ref="mFullMoke"
            class="cls-2"
            d="M1060.39,752.08h29.27V897.4h-33V821.13l-28,52.15h-24.32l-27.83-50.91-.21,75h-33V752.08h29.89l43.7,82.66Z"
          />
          <path
            ref="oFullMoke"
            class="cls-2"
            d="M1146.86,890.08a62.59,62.59,0,0,1-25.25-26q-8.86-16.8-8.86-39.47t8.86-39.48a62,62,0,0,1,25.25-25.87q16.4-9.06,38.65-9.07t38.65,9.07a61.3,61.3,0,0,1,25.15,25.87q8.76,16.8,8.76,39.48t-8.86,39.47a62.59,62.59,0,0,1-25.25,26q-16.39,9.18-38.45,9.18Q1163.25,899.26,1146.86,890.08Zm64.42-31.53q9.27-11.65,9.28-33.91t-9.38-33.81q-9.39-11.55-25.67-11.54-16.48,0-25.76,11.44t-9.28,33.91q0,22.47,9.28,34t25.76,11.54Q1202,870.19,1211.28,858.55Z"
          />
          <g ref="kFullMoke">
            <path
              ref="kTopRMoke"
              class="cls-2"
              d="M1316,816.66l59.36-64.58h44.32l-103.16,108.1Zm2.47,15"
            />
            <path
              ref="kBottomRMoke"
              class="cls-2"
              d="M1349.55,815.11,1422,897.4H1377l-58.54-65.76Zm-31.08-.57"
            />
            <path ref="kTopLMoke" class="cls-2" d="M1280.54,859.66V752.08h37.93v79.56Z" />
            <path
              ref="kBottomLMoke"
              class="cls-2"
              d="M1318.47,831.64V897.4h-37.93V853.66l37.93-35v13Z"
            />
          </g>
          <g ref="eFullMoke">
            <path ref="eBaseMoke" class="cls-2" d="M1461.86,897.41h-37V751.66h37" />
            <path ref="eTopMoke" class="cls-2" d="M1427.82,751.66h100.61v29.39H1427.82Z" />
            <path ref="eMidMoke" class="cls-2" d="M1427.82,808.72h96.58v29.15h-96.58Z" />
            <path ref="eBottomMoke" class="cls-2" d="M1427.82,868.06h100.61v29.35H1427.82Z" />
          </g>
          <path
            ref="mokeSnake"
            class="cls-3"
            d="M1576.12,882.74H1441.43V768.41L1382,768l-106.4,114.7h-90.07c-73,0-72.11-118.38-.1-118.39,71.19,0,75.13,118.39.1,118.39l-112.38-1-.06-113.19h-3.16l-50.39,89.82h-5.67l-50.63-89.91h-3.53L959,1391.16"
          />
        </g>
        <g ref="tedPath">
          <g ref="tFullTed">
            <path ref="tBaseTed" class="cls-2" d="M999.33,705.89V532.66h56.27V705.89" />
            <path
              ref="tTopTed"
              class="cls-2"
              d="M999.33,537.7H935.51V492.63h183.91V537.7H999.33Z"
            />
          </g>
          <g ref="eFullTed">
            <path ref="eBaseTed" class="cls-2" d="M1196.56,705.89h-54.15V492.63h54.15" />
            <path ref="eTopTed" class="cls-2" d="M1143,492.63h151v43H1143Z" />
            <path ref="eMidTed" class="cls-2" d="M1143,576.12h144.91v42.65H1143Z" />
            <path ref="eBottomTed" class="cls-2" d="M1143,662.94h151v42.95H1143Z" />
          </g>
          <path
            ref="dFullTed"
            class="cls-2"
            d="M1323,492.63h86.81q35.4,0,61,12.71A89.78,89.78,0,0,1,1510,542.09q13.6,24,13.61,57,0,33.28-13.46,57.32t-39,36.75q-25.58,12.72-61.26,12.71H1323Zm82.88,168.49q31.45,0,46.89-15.43t15.4-46.58q0-31.15-15.42-46.43t-46.87-15.28h-27.23V661.12Z"
          />
          <path
            ref="tedSnake"
            class="cls-4"
            d="M0,515.24H1165.17v169h250c109,0,108-168,2-169H1345v191"
          />
        </g>
      </svg>
    </div>
    <div ref="jumboRight" class="jumbotron-content content-right">
      <Shutter
        v-bind:open="shutterOpen"
        v-bind:content="shutterContent"
        v-bind:percentMobile="mobileShutterHeight"
        v-show="shutterVisible"
        @SHOW_COMPLETE="ON_SHUTTER_OPEN"
      ></Shutter>
    </div>
  </div>
</template>

<script>
import Shutter from "../Components/Shutter";

import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
gsap.registerPlugin(DrawSVGPlugin);

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
      shutterVisible: false,
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
  mounted: function() {
    this.masterTl = this.setupLogoAnim();

    let { logo, jumboLeft, jumboRight } = this.$refs;

    this.masterTl.eventCallback('onComplete', ()=> {
      window.setTimeout(()=>{

        let jumboChanges = {
          duration: 0.35,
          flexBasis: '50%',
          ease: 'power2.inOut',
          onComplete: () => {
            this.shutterVisible = true;
            this.shutterOpen = true;
          }
        };

        jumboChanges.maxHeight = this.$root.store.clientInfo.isDesktop ? '100%' : '50%';

        gsap.to([jumboLeft, jumboRight], jumboChanges );

        if (this.$root.store.clientInfo.isDesktop) {
          gsap.to(logo, { width: '140%', duration: 0.35 });
        }
      }, 50);
    })
  },
  methods: {
    ON_SHUTTER_OPEN: function() {
      this.$root.store.introComplete = true;
      this.$root.eventHub.$emit('intro-complete');
    },
    setupLogoAnim: function() {
      let masterTl = gsap.timeline();

      let { tedSnake, tTopTed, tBaseTed, eBaseTed, eTopTed, eMidTed, eBottomTed, dFullTed,
            mokeSnake, mFullMoke, oFullMoke, kTopRMoke, kBottomRMoke, kTopLMoke, kBottomLMoke, eBaseMoke, eTopMoke, eMidMoke, eBottomMoke,
            boxFullClockwise, boxFullCounterwise } = this.$refs;

      let tlTed = gsap.timeline({delay: 0.35, defaults: {ease: 'none'}});
      let tlMoke = gsap.timeline({defaults: {ease: 'none'}});

      masterTl.add(tlTed).add(tlMoke);

      gsap.set(tedSnake, {drawSVG:"-20% 0%"});
      gsap.set(tTopTed, {scaleY: 0});
      gsap.set(tBaseTed, {scaleY: 0});
      gsap.set(eBaseTed, {scaleX: 0});
      gsap.set(eTopTed, {scaleX: 0});
      gsap.set(eMidTed, {scaleX: 0});
      gsap.set(eBottomTed, {scaleX: 0});
      gsap.set(dFullTed, {scale: .975, opacity: 0, transformOrigin: 'left center'});

      gsap.set(mokeSnake, {drawSVG:"120% 100%"});
      gsap.set(mFullMoke, {opacity: 0});
      gsap.set(oFullMoke, {opacity: 0});
      gsap.set(kTopRMoke, {scale: 0, transformOrigin: 'left bottom'});
      gsap.set(kBottomRMoke, {scale: 0});
      gsap.set(kTopLMoke, {scaleY: 0, transformOrigin: 'center bottom'});
      gsap.set(kBottomLMoke, {scaleY: 0});
      gsap.set(eBaseMoke, {scaleX: 0});
      gsap.set(eTopMoke, {scaleX: 0});
      gsap.set(eMidMoke, {scaleX: 0});
      gsap.set(eBottomMoke, {scaleX: 0}); 

      gsap.set(boxFullClockwise, {drawSVG: "0% 0%"});
      gsap.set(boxFullCounterwise, {drawSVG: "0% 0%"});

      tlTed.to(tedSnake, {delay: 0.35, drawSVG:"-20% 42%", ease:'power1.in'});
      tlTed.to(tedSnake, {drawSVG:"30% 53%", duration: 0.275});
      tlTed.to(tTopTed, {scale: 1, ease:'power2.out', duration: 0.1});
      tlTed.to(tBaseTed, {scale: 1, ease:'power2.out', duration: 0.25});
      tlTed.to(tedSnake, {drawSVG:"49.3225% 64.2775%", duration: 0.2 }, '-=0.35');
      tlTed.to(eBaseTed, {scaleX: 1, ease:'power2.out', duration: 0.15}, '-=0.15');
      tlTed.to(eTopTed, {scaleX: 1, ease:'power2.out', duration: 0.35}, '-=0.25');
      tlTed.to(eMidTed, {scaleX: 1, ease:'power2.out', duration: 0.35}, '-=0.2');
      tlTed.to(eBottomTed, {scaleX: 1, ease:'power2.out', duration: 0.35}, '-=0.2');
      tlTed.to(tedSnake, {drawSVG:"72% 100%"}, '-=0.55');
      tlTed.to(dFullTed, {opacity: 1, duration: 0.0025},);
      tlTed.to(dFullTed, {scale: 1, duration: 0.125}, '-=0.0025');
      tlTed.to(tedSnake, {opacity: 0, duration: 0.125}, '-=0.125');

      tlMoke.to(mokeSnake,  {drawSVG:"100% 70%", delay: 1.325, ease:'power1.in'});
      tlMoke.to(mokeSnake,  {drawSVG:"78% 51.52%", duration: 0.2});
      tlMoke.to(mFullMoke, {opacity: 1, duration: 0.1});
      tlMoke.to(mokeSnake,  {drawSVG:"51% 28%", duration: 0.3}, '-=0.1');
      tlMoke.to(oFullMoke, {opacity: 1, duration: 0.1});
      tlMoke.to(mokeSnake,  {drawSVG:"25% 5%", strokeWidth: "29px", duration: 0.3}, '-=0.1');
      tlMoke.to(kTopLMoke, {scaleY: 1, duration: 0.35}, '-=0.15');
      tlMoke.to(kBottomLMoke, {scaleY: 1, duration: 0.35}, '-=0.3');
      tlMoke.to(kTopRMoke, {scale: 1, duration: 0.35}, '-=0.35');
      tlMoke.to(kBottomRMoke, {scale: 1, duration: 0.35}, '-=0.3');
      tlMoke.to(mokeSnake,  {drawSVG:"12% 0%", duration: 0.25}, '-=0.3');
      tlMoke.to(eBottomMoke, {scaleX: 1, ease:'power2.out', duration: 0.035});
      tlMoke.to(eBaseMoke, {scaleX: 1, ease:'power2.out', duration: 0.15});
      tlMoke.to(eTopMoke, {scaleX: 1, ease:'power2.out', duration: 0.35}, '-=0.25');
      tlMoke.to(eMidMoke, {scaleX: 1, ease:'power2.out', duration: 0.35}, '-=0.2');
      tlMoke.to(mokeSnake,  {drawSVG:"0% 0%", duration: 0.275}, '-=0.125');
      tlMoke.to(boxFullCounterwise, {drawSVG: "0% 100%", duration: .675}, '-=0.6');

      return masterTl;
    }
  },
  components: {
    Shutter
  }
};
</script>