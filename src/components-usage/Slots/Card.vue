<template>
  <!-- Instad of prop in a props  -->
  <!-- <div class="card">{{ content }}</div> -->

  <!-- Use a slot instead  -->
  <div class="card">
    <slot>Default Whatever Content when parent pass in empty</slot>
  </div>
</template>

<script>
export default {
  name: 'Card',

  // instead of using props, use a slot instead
  // props: ['content'],
};
</script>

<style scoped>
.card {
  border: 2px solid black;
  margin: 20px;
}
</style>
