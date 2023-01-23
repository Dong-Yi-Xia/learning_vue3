<template>
  <div>
    <h1>{{ state.firstName }} {{ state.lastName }}</h1>
    <h1>{{ fName }} {{ lName }}</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
export default {
  name: 'DemoTwo',
  setup() {
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    setTimeout(() => {
      (state.firstName = 'Clark'),
        (state.lastName = 'Kent'),
        console.log(state);
    }, 2000);

    return {
      state,
      fName: state.firstName,
      lName: state.lastName,
    };

    // return toRefs(state)
  },
};
</script>

<style scoped></style>
