<template>
  <div class="control-feature-container">
    <Button class="control-feature feature-next" circle white clickEvent="next-feature">
      <Arrow color="fourth" direction="right"></Arrow>
    </Button>
    <Button class="control-feature feature-previous" circle white clickEvent="previous-feature">
      <Arrow color="fourth" direction="left"></Arrow>
    </Button>
  </div>
</template>

<script>
import Arrow from './Arrow';
import Button from './Button';

export default {
    components: {
        Arrow,
        Button
    }
}
</script>