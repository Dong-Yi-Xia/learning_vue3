<template>
  <div>
    <h1>Prop Child</h1>
    <h2>Hello {{ firstName }} {{ lastName }}</h2>
    <h2>Hello {{ fullName }}</h2>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'PropChildC',
  props: ['firstName', 'lastName'],
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
  // Need to pass in props as first arg in setup()
  setup(props) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    return {
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
