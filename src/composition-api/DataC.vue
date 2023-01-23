<template>
  <div>
    <h1>Data</h1>
    <h2>option - {{ o_firstName }}</h2>
    <h2>composition - {{ c_firstName }}</h2>
    <h2>composition - {{ greet }}</h2>
    <hr />

    <h2>composition Ref- {{ c_firstName }}{{ c_lastName }}{{ c_heroName }}</h2>
    <h2>composition Ref - {{ greetHero }}</h2>
    <hr />

    <h2>
      Reactive Composition - {{ state.firstName }} {{ state.lastName }}
      {{ state.heroName }}
    </h2>
    <h2>Reactive Composition - {{ reactiveGreet }}</h2>
  </div>
</template>

<script>
// This ref function, returns a reactive reference to a value. Is different from the ref template, reference to a DOM element
// ref for primitive type string, boolean, number, and reactive is only objects type
import { ref, reactive } from 'vue';
export default {
  name: 'DataC',
  // need setup() as the entry point to use composition api
  setup() {
    // using ref(), accept the inital value
    const c_firstName = ref('Clark');
    const c_lastName = ref('Kent');
    const c_heroName = ref('Superman');
    console.log('c_firstname', c_firstName); //It is an object, not just a simple string

    // c_firstName.value = 'Diana';
    const greet = `Hello ${c_firstName.value}`;
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} aka ${c_heroName.value}`;

    // instead of calling ref() multi time on related grouping, could use reactive()

    //using reactive(), accept object
    const state = reactive({
      firstName: 'Princess',
      lastName: 'Diana',
      heroName: 'Wonder Women',
    });

    const reactiveGreet = `Hello ${state.firstName} ${state.lastName} aka ${state.heroName}`;

    // Need to 'return' to expose the property we want
    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      state,
      reactiveGreet,
    };
  },

  //data() internally uses reactive()
  data() {
    return {
      o_firstName: 'Bruce',
    };
  },
};
</script>

<style scoped></style>
