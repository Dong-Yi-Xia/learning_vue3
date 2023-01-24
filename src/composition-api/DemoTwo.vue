<template>
  <div>
    <h1>{{ state.firstName }} {{ state.lastName }}</h1>
    <h1>{{ firstName }} {{ lastName }}</h1>
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

    // return {
    //   state,
    //   firstName: state.firstName, //Doing this way, you don't need state.firstName to bind, however its become not reactive
    //   lastName: state.lastName, //Doing this way, you don't need state.lastName to bind,, however its become not reactive
    // };

    return {
      ...toRefs(state), //Solution use toRefs() to now we don't need to call state.____ just the key property
    };
  },
};
</script>

<style scoped></style>
