<template>
  <div class="control-feature-container">
    <Button class="control-feature feature-next" circle fourth clickEvent="next-feature">
      <Arrow direction="right"></Arrow>
    </Button>
    <Button class="control-feature feature-previous" circle fourth clickEvent="previous-feature">
      <Arrow direction="left"></Arrow>
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