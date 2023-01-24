<template>
  <div>
    <hr />
    <h1>Child Inject C</h1>
    <h2>Child inject username - {{ userName }}</h2>
    <h3>Child composition username - {{ childUserName }}</h3>
    <h3>Child composition count - {{ childCount }}</h3>
    <h3>Child composition hero - {{ firstName }} {{ lastName }}</h3>
    <button @click="childIncrease">Child increase count</button>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
  name: 'ChildInjectC',
  inject: ['userName'],
  ////////////////////
  setup() {
    //1st in the label from the provide, default value if no data is provide
    const childUserName = inject('c_userName', 'Any default stuff');

    const childCount = inject('c_count', 0);
    const childHero = inject('c_hero', {});
    const childIncrease = inject('c_increase')

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      childIncrease
    };
  },
};
</script>

<style scoped></style>
