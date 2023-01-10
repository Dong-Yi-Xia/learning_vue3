<template>
  <h1>Methods</h1>

  <h2>{{ 2 + 4 + 6 }}</h2>
  <h2>Add method - {{ add(2, 4, 6) }}</h2>
  <h2>Multply method - {{ multiply(value) }}</h2>
</template>

<script>
export default {
  name: 'Methods',
  data() {
    return {
      baseMultiplier: 5,
      value: 3,
    };
  },
  methods: {
    //no arrow function
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return this.baseMultiplier * num;
    },
  },
};
</script>

<style></style>
