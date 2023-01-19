<template>
  <!-- <Card content="Card Content 1" /> -->

  <!-- Parent controller what get rendered in the child when using slot-->
  <Card> Card Content </Card>
  <Card> <h2>Card Content</h2></Card>
  <Card> <img src="https://picsum.photos/200" /> </Card>
  <Card></Card>

  <hr />

  <!-- Using mulitple slots -->
  <Card>
    <!-- Use template tag, v-slot: nameSlot -->
    <template v-slot:header>
      <h3>Header</h3>
    </template>

    <template v-slot:content>
      <img src="https://picsum.photos/200" />
    </template>

    <template v-slot:footer>
      <button>View Details</button>
    </template>

   <!-- Use v-slot:default is the empty default slot -->
    <template v-slot:default>
      <h2>This is some default text</h2>
    </template>
  </Card>
</template>

<script>
import Card from './Card.vue';
export default {
  name: 'ParentSlot',
  components: { Card },
};
</script>

<style lang="scss" scoped></style>
