<template>
  <div>
    <h1>V Model</h1>
    <!-- options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />

    <hr />
    <!-- Composition API -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
    <input type="text" placeholder="Hero Name" v-model="heroName" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/reactivity';
export default {
  name: 'VModelC',
  setup() {
    const heroName = ref('');
    const state = reactive({
      firstName: '',
      lastName: '',
    });

    return {
      heroName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      fName: '',
      lName: '',
    };
  },
};
</script>

<style scoped></style>
