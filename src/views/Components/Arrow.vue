<template>
<div class="arrow-container">
  <svg class="icon arrow arrow-down" :class="color" v-bind:style="{'transform': `rotate(${rotation}deg)`}" viewBox="0 0 292.36 164.46">
    <title>down-arrow-2</title>
    <path d="M286.93,5.42A17.55,17.55,0,0,0,274.09,0H18.27A17.59,17.59,0,0,0,5.42,5.42,17.62,17.62,0,0,0,0,18.27,17.59,17.59,0,0,0,5.42,31.12L133.33,159a17.92,17.92,0,0,0,25.7,0L286.93,31.12a17.56,17.56,0,0,0,5.43-12.85A17.59,17.59,0,0,0,286.93,5.42Z"/>
  </svg>
</div>
</template>

<script>

  export default {
    props: {
      direction: {
        type: String,
        default: 'down'
      },
      color: String
    },
    computed: {
      rotation: function() {
        let degrees = 0;

        switch(this.direction) {
          case 'left': {
            degrees = 90
            break;
          }
          case 'up': {
            degrees = 180
            break;
          }
          case 'right': {
            degrees = 270
            break;
          }
        }
        
        return degrees;
      }
    }
  }
</script>