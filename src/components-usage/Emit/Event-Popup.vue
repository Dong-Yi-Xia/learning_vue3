<template>
  <div>
    <h2>This is a popup</h2>

    <!-- To send info back to parent need special $emit() first arg is the custom event name, second arg is the data to pass back -->
    <button @click="$emit('closePopup', fightMe)">Close Popup</button>
    <hr>

    <input type="text" v-model="name" />
    <button @click="$emit('closePopup', name)">Close Popup2</button>
  </div>
</template>

<script>
export default {
  name: 'EventPopup',

  // List of custom event names, array
  // emits: ['closePopup'],

  // Can emit validation, just warn in console, use object, key is custom name, value is the function
  emits: {
    closePopup: (name) => {
      console.log('ahhh warning here')
      if (!name) return false;
      else return true;
    },
  },

  computed: {
    fightMe() {
      return 'I am some data to be returned';
    },
  },

  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped></style>
