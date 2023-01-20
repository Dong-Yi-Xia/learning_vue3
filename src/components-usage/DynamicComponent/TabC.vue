<template>
  <div>
    <h1>Tab C Content</h1>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  name: 'TabC',
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped></style>
