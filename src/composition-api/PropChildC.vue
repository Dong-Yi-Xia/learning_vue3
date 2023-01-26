<template>
  <div>
    <h1>Prop Child</h1>
    <h2>Hello {{ firstName }} {{ lastName }}</h2>
    <h2>Hello {{ fullName }}</h2>
    <hr />

    <button @click="sendEvent">Call Heroes</button>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'PropChildC',
  props: ['firstName', 'lastName'],
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
  // Need to pass in props as first arg in setup()
  // 2nd arg, context, allows to use emit
  setup(props, context) {
    console.log('context has 3 properties attrs, emit, slots', context)
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent(){
      //Don't have access to "this" this.$emit(), need to pass in 2nd arg
      context.emit('callHeroes', fullName.value)
    }

    return {
      fullName,
      sendEvent
    };
  },
  emits: ['callHeroes']
};
</script>

<style lang="scss" scoped></style>
