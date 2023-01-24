<template>
  <div>
    <h1>Computed C</h1>
    <h2>Options Fullname is {{ fullName }}</h2>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <hr />

    <h2>Ref Fullname is {{ refFullName }}</h2>
    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <hr />

    <h2>Reactive Fullname is {{ reactiveFullName }}</h2>
    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue';
export default {
  name: 'ComputedC',
  setup() {
    // Using ref
    const refFirstName = ref('');
    const refLastName = ref('');

    const refFullName = computed(() => {
      return `${refFirstName.value} ${refLastName.value}`;
    });

    // using reactive
    const state = reactive({
      reactiveFirstName: '',
      reactiveLastName: '',
    });

    const reactiveFullName = computed(() => {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`;
    });

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    };
  },
  data() {
    return {
      fName: '',
      lName: '',
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style scoped></style>
