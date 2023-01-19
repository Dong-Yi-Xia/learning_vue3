<template>
  <!-- Binding v-model to a custom component, -->
  <!-- listen for input event and pass update a build in property update:, the data to emit is the target value --> 
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: String
  }
};
</script>

<style lang="scss" scoped></style>
