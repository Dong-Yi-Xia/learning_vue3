<template>
  <div>
      <button @click="incrementCount()">Clicked {{count}} times</button>
  </div>
</template>

<script>
// Use mixin script file for reusable functionality , import "Some Name" from script.js file
import MixCounter from './counter.js'
  export default {
    name:'ClickCount',
    mixins: [MixCounter]
  }
</script>

<style scoped>

</style>
