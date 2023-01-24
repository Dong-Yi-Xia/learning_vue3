<template>
  <div>
    <h1>Watcher C</h1>
    <input type="text" placeholder="Name" v-model="name" />
    <hr />

    <input type="text" placeholder="Ref first Name" v-model="firstName" />
    <input type="text" placeholder="Ref Last Name" v-model="lastName" />
    <hr />

    <input type="text" placeholder="Reactive First Name" v-model="fName" />
    <input type="text" placeholder="Reactive Last Name" v-model="lName" />
    <input
      type="text"
      placeholder="Reactive Hero Name"
      v-model="options.heroName"
    />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'lodash';
export default {
  name: 'WatcherC',
  setup() {
    const firstName = ref('');
    const lastName = ref('Wayne');

    // Accept 2 arg, data source to watch, a function
    // watch(firstName, (newValue, oldValue) => {
    //   console.log('OldValue C', oldValue);
    //   console.log('NewValue C', newValue);
    // });

    // use array to watch multiple source, accept 3th optional arg to invoke immediate watch
    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        console.log('firstName OldValue C', oldValues[0]);
        console.log('firstName NewValue C', newValues[0]);
        console.log('lastName OldValue C', oldValues[1]);
        console.log('lastName NewValue C', newValues[1]);
      },
      { immediate: true }
    );

    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    });

    //This newValue and oldValue are the same
    // watch(state, (newValue, oldValue) => {
    //   console.log('Reactive firstName OldValue C', oldValue.fName);
    //   console.log('Reactive firstName NewValue C', newValue.fName);
    //   console.log('Reactive lastName OldValue C', oldValue.lName);
    //   console.log('Reactive lastName NewValue C', newValue.lName);
    // });

    //Instead use a getter function and return the ...state, to get the oldValue
    // watch(
    //   () => {
    //     return { ...state };
    //   },  //() => ({...state}) Condensed way of writing
    //   (newValue, oldValue) => {
    //     console.log('Reactive firstName OldValue C', oldValue.fName);
    //     console.log('Reactive firstName NewValue C', newValue.fName);
    //     console.log('Reactive lastName OldValue C', oldValue.lName);
    //     console.log('Reactive lastName NewValue C', newValue.lName);
    //   }
    // );

    //Watch individual property
    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log('fName OldValue C', oldValue);
        console.log('fName NewValue C', newValue);
      }
    );

    // watch deep nested
    watch(
      // () => _.cloneDeep(state.options), //deep value old and new are different
      // () => state.options   //deep value old and new are the same
      // () => {
      //   return {
      //     ...state.options,
      //   };
      // }, // to get different old and new value
      () => ({ ...state.options }), //Condensed way of writing
      (newValue, oldValue) => {
        console.log('Deep OldValue C', oldValue);
        console.log('Deep NewValue C', newValue);
      },
      { deep: true }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: '',
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log('OldValue', oldValue);
      console.log('NewValue', newValue);
    },
  },
};
</script>

<style scoped></style>
