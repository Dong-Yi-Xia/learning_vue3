<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'DemoOne',
  setup() {
    // This way the UI doesn't change after 2 second, not reactive
    // let name = 'Megaman';
    //
    // setTimeout(() => {
    //   name = 'CoolMan';
    //   console.log(name);
    // }, 2000);

    // React to the change using ref() or reactive()
    const name = ref('Megaman');

    setTimeout(() => {
      name.value = 'CoolMan';
      console.log(name);
    }, 2000);

    return {
      name,
    };
  },
};
</script>

<style scoped></style>
