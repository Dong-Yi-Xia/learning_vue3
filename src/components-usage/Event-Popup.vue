<template>
  <div>
    <h2>This is a popup</h2>

    <!-- To send info back to parent need special $emit() first arg is the custom event name, second arg is the data to pass back -->
    <button @click="$emit('closePopup', fightMe)">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: 'EventPopup',

  // List of custom event names
  emits: ['closePopup'],

  computed: {
    fightMe() {
      return 'I am some data to be returned';
    },
  },
};
</script>

<style scoped></style>
