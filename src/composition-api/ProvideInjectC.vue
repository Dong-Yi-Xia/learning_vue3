<template>
  <div>
    <h1>Provide Inject Parent</h1>
    <h2>Parent provided name - {{ name }}</h2>
    <h2>Parent provided count - {{ count }}</h2>
    <h2>Parent provided hero - {{ firstName }} {{ lastName }}</h2>
    <button @click="increaseCount">Increment Count</button>
    <hr />
    <ChildInjectA />
  </div>
</template>

<script>
import ChildInjectA from './ChildInjectA.vue';
import { provide, ref, reactive, toRefs } from 'vue';
export default {
  name: 'ProvideInjectC',
  components: {
    ChildInjectA,
  },
  data() {
    return {
      name: 'Option Name Megaman',
    };
  },
  provide() {
    return {
      userName: this.name,
    };
  },
  /////////////////////////////
  setup() {
    // 1st proivde it a label name, 2nd data to pass to child
    provide('c_userName', 'LovePizza');

    const count = ref(0);

    // Function to increase count
    const increaseCount = () => {
      count.value++;
    };

    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    provide('c_count', count);
    provide('c_hero', state);
    provide('c_increase', increaseCount)

    return {
      count,
      ...toRefs(state),
      increaseCount,
    };
  },
};
</script>

<style scoped></style>
