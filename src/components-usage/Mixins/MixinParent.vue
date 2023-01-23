<template>
  <div>
    <ClickCount />
    <HoverCount />
  </div>
</template>

<script>
import ClickCount from './ClickCount.vue';
import HoverCount from './HoverCount.vue'
export default {
  name: 'MixinParent',
  components: {
    ClickCount,
    HoverCount,
  },
};
</script>

<style scoped></style>
