<template>
  <!-- <Binding /> -->
  <!-- <ConditionalRendering /> -->
  <!-- <ListRendering /> -->
  <Methods />
</template>

<script>
// import Binding from './components/Binding.vue';
// import ConditionalRendering from './components/Conditional-Rendering.vue'
// import ListRendering from './components/List-Rendering.vue'
import Methods from './components/Methods.vue'

export default {
  name: 'App',
  components: {
    // Binding,
    // ConditionalRendering,
    // ListRendering,
    Methods,
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
