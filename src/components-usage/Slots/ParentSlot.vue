<template>
  <!-- <Card content="Card Content 1" /> -->

  <!-- Parent controller what get rendered in the child when using slot-->
  <Card> Card Content </Card>

  <Card> <h2>Card Content</h2></Card>

  <Card> <img src="https://picsum.photos/200" /> </Card>

  <Card></Card>
</template>

<script>
import Card from './Card.vue';
export default {
  name: 'ParentSlot',
  components: { Card },
};
</script>

<style lang="scss" scoped></style>
