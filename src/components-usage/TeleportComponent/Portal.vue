<template>
  <div>
    <h2>Teleport Component</h2>

    <!-- Use the teleport tag specific to vue3, to= an element -->
    <!-- Still behave as a child component, useful for popup and model -->
    <teleport to="#portal-root">
      <h2>I have teleported, Teleport Component</h2>
    </teleport>
  </div>
</template>

<script>
export default {
  name: 'Portal',
};
</script>

<style scoped></style>
