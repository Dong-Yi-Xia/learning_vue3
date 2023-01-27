<template>
  <div>
    <ClickCountC />
    <HoverCountC />
  </div>
</template>

<script>
import ClickCountC from './ClickCounterC.vue';
import HoverCountC from './HoverCounterC.vue';
export default {
  name: 'MixinParentC',
  components: {
    ClickCountC,
    HoverCountC,
  },
};
</script>

<style scoped></style>
