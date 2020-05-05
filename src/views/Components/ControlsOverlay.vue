<template>
<transition name="slide-right">
  <div class="overlay-controls">
    <!-- <Button v-show="!$root.store.clientInfo.isDesktop" class="control-menu" circle fourth clickEvent="menu-toggle">
      <svg class="icon icon-menu" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
        <defs>
          <clipPath id="icon-menu-clip-path" transform="translate(0 0.54)">
            <circle id="circle" class="cls-1" cx="256" cy="256" r="256"/>
          </clipPath>
        </defs>
        <title>Asset 3</title>
        <g class="cls-2">
          <rect class="cls-3" width="512" height="143.52"/>
          <rect class="cls-4" y="128" width="512" height="156.92"/>
          <rect class="cls-5" y="256" width="512" height="143.93"/>
          <rect class="cls-6" y="384" width="512" height="128"/>
        </g>
      </svg>
    </Button> -->
    <FeatureControlMobile v-show="!$root.store.clientInfo.isDesktop"></FeatureControlMobile>
    <Button class="control-message" primary clickEvent="toggle-contact" :circle="!$root.store.clientInfo.isDesktop || $root.store.clientInfo.short">
      <div class="button-content-container">
        <p v-show="$root.store.clientInfo.isDesktop && !$root.store.clientInfo.short">Contact</p>
        <div class="icon-container">
          <svg class="icon icon-message" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384">
            <title>Asset 1</title>
            <path d="M10.69,31.16C81,90.67,204.26,195.36,240.5,228c4.87,4.41,10.08,6.65,15.5,6.65s10.61-2.22,15.47-6.61C307.74,195.38,431,90.67,501.31,31.16a10.66,10.66,0,0,0,1.5-14.72A42.35,42.35,0,0,0,469.33,0H42.67A42.35,42.35,0,0,0,9.19,16.44,10.66,10.66,0,0,0,10.69,31.16Z"/>
            <path d="M505.81,63.41A10.6,10.6,0,0,0,494.44,65C416.51,131,317.05,215.69,285.76,243.89c-17.56,15.85-41.94,15.85-59.54,0-33.36-30.05-145-125-208.66-178.91A10.67,10.67,0,0,0,0,73.08V341.33A42.72,42.72,0,0,0,42.67,384H469.33A42.72,42.72,0,0,0,512,341.33V73.08A10.66,10.66,0,0,0,505.81,63.41Z"/>
          </svg>
        </div>
      </div>
      
    </Button>
  </div>
</transition>
</template>

<script>
import Button from './Button';
import FeatureControlMobile from './FeatureControlMobile';

export default {
  components: {
    Button,
    FeatureControlMobile
  }
}
</script>