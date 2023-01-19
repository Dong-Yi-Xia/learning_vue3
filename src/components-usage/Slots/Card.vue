<template>
  <div>
    <!-- Instad of prop in a props  -->
    <!-- <div class="card">{{ content }}</div> -->

    <!-- Use a slot instead  -->
    <div class="card1">
      <slot>Default Whatever Content when parent pass in empty</slot>
    </div>

    <!-- Named Slot, Multiply slot need a name, allow 1 empty as default slot -->
    <div class="card2">
      <div id="card-header"><slot name="header"></slot></div>
      <div id="card-content"><slot name="content"></slot></div>
      <div id="card-footer"><slot name="footer"></slot></div>
      <div id="card-content"><slot></slot></div>
    </div>
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
.card1,
card2 {
  border: 2px solid black;
  margin: 20px;
}
</style>
