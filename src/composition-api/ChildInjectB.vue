<template>
  <div>
    <h1>Child Inject B</h1>
    <ChildInjectC />
  </div>
</template>

<script>
import ChildInjectC from './ChildInjectC.vue';
export default {
  name: 'ChildInjectB',
  components: { ChildInjectC },
};
</script>

<style scoped></style>
