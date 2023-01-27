<template>
  <div>
    <h2 @mouseover="incrementCount">Hover {{ count }} times</h2>
  </div>
</template>

<script>
import useCounter from './userCounter'; //This is called a hook or composable
export default {
  methods: {},
  name: 'HoverCountC',
  setup() {
    // Can destructure
    const { count, incrementCount } = useCounter();

    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped>
h2 {
  border: 2px solid black;
}
</style>
