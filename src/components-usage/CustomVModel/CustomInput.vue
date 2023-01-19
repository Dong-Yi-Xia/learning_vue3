<template>
  <div>
    <!-- Binding v-model to a custom component -->
    <Input v-model="name"/>
  </div>
</template>

<script>
import Input from './Input.vue'
export default {
  name: 'CustomInput',
  components: {
    Input,
  },
  data() {
    return {
      name: ''
    };
  },
};
</script>

<style lang="scss" scoped></style>
