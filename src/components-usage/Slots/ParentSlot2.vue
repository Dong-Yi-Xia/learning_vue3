<template>
  <div>
    <NameList>
      <!-- use the template v-slot: right hand side is access all the slot props as an object -->
      <template v-slot:default="giveMeProps">
        {{ giveMeProps.firstName }} {{ giveMeProps.lastName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="giveMeProps">
        {{ giveMeProps.lastName }}, {{ giveMeProps.firstName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="giveMeProps">
        {{ giveMeProps.firstName }}
      </template>
    </NameList>
  </div>
</template>

<script>
import NameList from './NameList.vue';
export default {
  name: 'ParentSlot2',
  components: {
    NameList,
  },
};
</script>

<style scoped></style>
