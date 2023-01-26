<template>
  <div>
    <h1>Lifecycle Composition API</h1>

  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  name: 'LifeCycleC',

  setup() {
    onBeforeMount(() => {
      console.log('Parent beforeMount()()');
    });
    onMounted(() => {
      console.log('Parent mounted()');
    });
    onBeforeUpdate(() => {
      console.log('Parent beforeUpdate()');
    });
    onUpdated(() => {
      console.log('Parent updated()');
    });
    onBeforeUnmount(() => {
      console.log('Parent beforeUnmount()');
    });
    onUnmounted(() => {
      console.log('Parent unmounted()');
    });
  },
};
</script>

<style scoped></style>
