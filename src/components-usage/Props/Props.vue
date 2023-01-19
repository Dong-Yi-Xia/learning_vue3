<template>
  <h1>Props</h1>

  <h2>Hello {{ name }} aka {{ heroName }}</h2>

</template>

<script>
export default {
  name: 'Props',
  // Get from the parent component, that will be accepted as array
  props: ['name', 'heroName'],
};
</script>

<style scoped></style>
