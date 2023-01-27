<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from './userCounter'; //This is called a hook or composable
export default {
  name: 'ClickCountC',
  setup() {
    // Can destructure
    const { count, incrementCount } = useCounter(100, 5);

    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
