<template>
  <div>
    <h1>Methods composition</h1>

    <h2>Increasing Count {{ count }}</h2>
    <button @click="increaseCount">Increase</button>

    <hr />
    <h2>ToRefs() reactive - {{ first }} - {{ last }}</h2>
    <button @click="changeHero">Change my hero</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
  name: 'MethodsC',

  //Composition API in setup()
  setup() {
    //ref
    const count = ref(0);

    //Composition API methods
    function increaseCount() {
      count.value += 1;
    }

    //Reactive
    const state = reactive({
      first: 'Bruce',
      last: 'Wayne',
    });

    function changeHero() {
      state.first = 'Clark';
      state.last = 'Kent';
    }

    return {
      count,
      increaseCount,
      ...toRefs(state),
      changeHero,
    };
  },
};
</script>

<style scoped></style>
