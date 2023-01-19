<template>
  <div>
    <!-- <h3 v-for="name in names" :key="name.firstNmae">{{ name.firstName }} {{ name.lastName }}</h3> -->

    <h3 v-for="name in names" :key="name.firstNmae">
      <!-- use slot props to pass value up to parents -->
      <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NameList',
  data() {
    return {
      names: [
        { firstName: 'Bruce', lastName: 'Wayne' },
        { firstName: 'Clark', lastName: 'Kent' },
        { firstName: 'Wonder', lastName: 'Women' },
      ],
    };
  },
};
</script>

<style scoped></style>
