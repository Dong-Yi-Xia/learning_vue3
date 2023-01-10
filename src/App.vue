<template>
  <!-- <Binding /> -->
  <!-- <ConditionalRendering /> -->
  <ListRendering />
</template>

<script>
// import Binding from './components/Binding.vue';
// import ConditionalRendering from './components/Conditional-Rendering.vue'
import ListRendering from './components/List-Rendering.vue'

export default {
  name: 'App',
  components: {
    // Binding,
    // ConditionalRendering,
    ListRendering,
  },
};
</script>

<style>
body {
  background: darkgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
