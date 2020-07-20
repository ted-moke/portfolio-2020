<template>
  <transition name="turn">
    <section v-show="shown" ref="el" class="work">
      <div class="section-header-container" v-if="!$root.store.clientInfo.isDesktop">
        <h2 class="section-header email-header">
          <svg class="logo logo-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1141.56 226.63">
          <title>logo-horizontal-baked</title>
          <g id="Layer_5" data-name="Layer 5">
            <rect class="cls-1" x="8" y="8" width="1125.56" height="210.63"/>
            <g class="cls-2">
              <path class="cls-3" d="M86.19,185.38V70.77H42.69V40.05H168V70.77h-43.5V185.38Z"/>
              <path class="cls-3" d="M183.69,185.38V40.05H287V69.32H220.59V97h62.25V126H220.59v30.1H287v29.27Z"/>
              <path class="cls-3" d="M306.75,40.05h59.17q24.1,0,41.53,8.66a61.23,61.23,0,0,1,26.7,25q9.27,16.4,9.28,38.86,0,22.68-9.18,39.07a60.59,60.59,0,0,1-26.59,25q-17.43,8.66-41.74,8.66H306.75Zm56.49,114.82q21.43,0,31.95-10.51t10.51-31.75q0-21.23-10.51-31.64T363.24,70.56H344.68v84.31Z"/>
            </g>
            <g class="cls-2">
              <path class="cls-3" d="M625.91,40.05h29.27V185.38h-33V109.11l-28,52.15H569.84L542,110.34l-.2,75h-33V40.05h29.89l43.7,82.66Z"/>
              <path class="cls-3" d="M712.39,178.06a62.47,62.47,0,0,1-25.25-26q-8.88-16.8-8.87-39.48t8.87-39.47a61.88,61.88,0,0,1,25.25-25.87Q728.77,38.19,751,38.2t38.65,9.07a61.3,61.3,0,0,1,25.15,25.87q8.76,16.8,8.76,39.47t-8.86,39.48a62.55,62.55,0,0,1-25.26,26q-16.38,9.18-38.44,9.18Q728.78,187.24,712.39,178.06Zm64.42-31.54q9.27-11.64,9.27-33.91t-9.38-33.8Q767.33,67.26,751,67.26q-16.5,0-25.77,11.44T716,112.61q0,22.47,9.27,34T751,158.17Q767.53,158.17,776.81,146.52Z"/>
              <path class="cls-3" d="M987.48,185.38H942.54L884,119.62v65.76H846.07V40.05H884v62.46l56.89-62.46h44.32L921.1,109.11Z"/>
              <path class="cls-3" d="M990,185.38V40.05h103.28V69.32h-66.38V97h62.26V126h-62.26v30.1h66.38v29.27Z"/>
            </g>
          </g>
        </svg>
          <p>- Work</p>
        </h2>
        </div>
      <ShowcaseWrapper :open="open" :shown="shown"></ShowcaseWrapper>
      <div ref="helperSwipe" class="helper helper-swipe">
        <svg class="icon icon-swipe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.01 490.65">
          <title>swipe</title>
          <path d="M437.33,42.65h-128a10.67,10.67,0,1,0,0,21.34h128a10.67,10.67,0,0,0,0-21.34Z" transform="translate(-21.32 0)"/>
          <path d="M444.88,45.79,402.21,3.12A10.66,10.66,0,1,0,387.13,18.2l35.11,35.12L387.11,88.45a10.67,10.67,0,0,0,15.1,15.09l42.67-42.67A10.67,10.67,0,0,0,444.88,45.79Z" transform="translate(-21.32 0)"/>
          <path d="M160,42.65H32A10.67,10.67,0,0,0,32,64H160a10.67,10.67,0,0,0,0-21.34Z" transform="translate(-21.32 0)"/>
          <path d="M47.08,53.32,82.19,18.2A10.66,10.66,0,1,0,67.11,3.12L24.44,45.79a10.67,10.67,0,0,0,0,15.08l42.67,42.67a10.7,10.7,0,0,0,7.55,3.11,10.56,10.56,0,0,0,7.53-3.13,10.68,10.68,0,0,0,0-15.09Z" transform="translate(-21.32 0)"/>
          <path d="M426.66,213.32a42.45,42.45,0,0,0-23.72,7.21,42.67,42.67,0,0,0-64-21.34,42.79,42.79,0,0,0-40.28-28.54,42.3,42.3,0,0,0-21.33,5.74V106.65a42.67,42.67,0,1,0-85.34,0V288l-37.07-27.79a55.93,55.93,0,0,0-72.73,5.16,32,32,0,0,0,0,45.25L234.11,462.53A95.38,95.38,0,0,0,302,490.65h50A117.47,117.47,0,0,0,469.33,373.32V256A42.71,42.71,0,0,0,426.66,213.32Zm21.33,160a96.12,96.12,0,0,1-96,96H302a74.19,74.19,0,0,1-52.82-21.87L97.28,295.52a10.68,10.68,0,0,1,0-15.09,34.53,34.53,0,0,1,44.86-3.18l54.12,40.6a10.67,10.67,0,0,0,17.07-8.53V106.65a21.34,21.34,0,0,1,42.67,0v160a10.67,10.67,0,1,0,21.33,0V213.32a21.34,21.34,0,1,1,42.67,0v53.33a10.67,10.67,0,1,0,21.33,0v-32a21.34,21.34,0,0,1,42.67,0v32a10.67,10.67,0,1,0,21.33,0V256A21.34,21.34,0,0,1,448,256V373.32Z" transform="translate(-21.32 0)"/>
        </svg>
      </div>
    </section>
  </transition>
</template>


<script>
import gsap from 'gsap';
import ShowcaseWrapper from "@/views/Components/ShowcaseWrapper";

export default {
  components: {
    ShowcaseWrapper
  },
  props: {
    shown: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let helperSwipeEl = this.$refs.helperSwipe;

    let helperTl = gsap.timeline({defaults: {duration: 0.35, ease: 'back.out(.75)'}})
    helperTl.to(helperSwipeEl, { opacity: 1, ease: 'power4.out' });
    helperTl.to(helperSwipeEl, { x: 50 });
    helperTl.to(helperSwipeEl, { x: 0 });
    helperTl.to(helperSwipeEl, { x: -50 });
    helperTl.to(helperSwipeEl, { x: 0 });
    helperTl.to(helperSwipeEl, { opacity: 0, delay: 0.25 });

    helperTl.pause();

    this.$root.eventHub.$once('showcase-in', ()=> {

      if (!this.$root.store.clientInfo.isDesktop) {
        window.setTimeout(()=> {
          helperTl.restart();

        }, 1500)
      }
    })
  }
};
</script>