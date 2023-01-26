<template>
  <div>
    <h1>Prop Parent</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />

    <PropChildC
      :firstName="firstName"
      :lastName="lastName"
      @call-heroes="alertHero"
    />
  </div>
</template>

<script>
import PropChildC from './PropChildC.vue';
import { ref } from 'vue';
export default {
  name: 'PropParentC',
  components: {
    PropChildC,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    function alertHero(hero) {
      alert(`Calling ${hero}`);
    }

    return {
      firstName,
      lastName,
      alertHero
    };
  },
};
</script>

<style lang="scss" scoped></style>
