<template>
  <div>
    <h1>Child Inject A</h1>
    <ChildInjectB />
  </div>
</template>

<script>
import ChildInjectB from './ChildInjectB.vue';
export default {
  name: 'ChildInjectA',
  components: { ChildInjectB },
};
</script>

<style scoped></style>
