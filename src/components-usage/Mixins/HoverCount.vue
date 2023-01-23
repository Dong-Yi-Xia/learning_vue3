<template>
  <div>
    <h2 @mouseover="incrementCount()">Hover {{ count }} times</h2>
  </div>
</template>

<script>
// Use mixin script file for reusable functionality , import "Some Name" from script.js file
import MixCounter from './counter.js';
export default {
  name: 'HoverCount',
  mixins: [MixCounter],
};
</script>

<style scoped>
h2 {
  border: 2px solid black;
}
</style>
