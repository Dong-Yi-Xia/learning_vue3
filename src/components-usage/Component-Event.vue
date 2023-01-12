<template>
  <div>
    <h1>Handling Emits Events</h1>

    <button @click="showPopup = true">Open Popup</button>

    <!-- Listen to the custom name emitted  in child component-->
    <EventPopup v-show="showPopup" @close-popup="closePopupWindow" />
  </div>
</template>

<script>
import EventPopup from './Event-Popup.vue';

export default {
  name: 'ComponentEvent',
  components: {
    EventPopup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    //The emitted data, is automatically given
    closePopupWindow(data){
      console.log('Data: ', data)
      this.showPopup = false
    }
  }
};
</script>

<style scoped></style>
