<template>
  <h1>Conditional Rendering</h1>

  <h2 v-if="num === 0">Zero</h2>
  <h2 v-else-if="num > 0">Positive</h2>
  <h2 v-else-if="num < 0">Negative</h2>
  <h2 v-else> Not a number</h2>

  <!-- Use template to wrap a code block without added an addition div tag. Template block is not added to the DOM -->
  <template v-if="display">
    <h2>Title1</h2>
    <h2>title2</h2>
  </template>

   <!-- show will render onto the DOM and change the style of display:none or not, use when toggling-->
  <h2 v-show="showElement">Using v-show</h2>
  <!-- if will render or not onto the DOM, more expensive by keep mounting and unmounting from DOM, use when condition doesn't really change-->
  <h2 v-if="showElement">Using v-if</h2>

</template>

<script>
export default {
  name: "ConditionalRendering",
  data(){
    return {
      num: -5,
      display: true,
      showElement: true,
    }
  },
}
</script>

<style scoped>

</style>

