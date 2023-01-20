<template>
  <!-- <Binding /> -->
  <!-- <ConditionalRendering /> -->
  <!-- <ListRendering /> -->
  <!-- <Methods /> -->
  <!-- <EventHandlers /> -->
  <!-- <Forms /> -->
  <!-- <Computed /> -->
  <!-- <Watchers /> -->
  <!-- <PropsParent /> -->
  <!-- <ComponentEvent /> -->
  <!-- <CustomInput /> -->
  <!-- <ParentSlot /> -->
  <!-- <ParentSlot2 /> -->
  <!-- <DynamicParent /> -->
  <!-- <Portal /> -->
  <HttpParent />
</template>

<script>
// import Binding from './components/Binding.vue';
// import ConditionalRendering from './components/Conditional-Rendering.vue';
// import ListRendering from './components/List-Rendering.vue';
// import Methods from './components/Methods.vue';
// import EventHandlers from './components/Event-Handler.vue';
// import Forms from './components/Forms.vue';
// import Computed from './components/Computed.vue';
// import Watchers from './components/Watchers.vue';
// import PropsParent from './components-usage/Props/Props-Parent.vue';
// import ComponentEvent from './components-usage/Emit/Component-Event.vue';
// import CustomInput from './components-usage/CustomVModel/CustomInput.vue';
// import ParentSlot from './components-usage/Slots/ParentSlot.vue';
// import ParentSlot2 from './components-usage/Slots/ParentSlot2.vue';
// import DynamicParent from './components-usage/DynamicComponent/DynamicParent.vue';
// import Portal from './components-usage/TeleportComponent/Portal.vue';
import HttpParent from './components-usage/Http/HttpParent.vue';

export default {
  name: 'App',
  components: {
    // Binding,
    // ConditionalRendering,
    // ListRendering,
    // Methods,
    // EventHandlers,
    // Forms,
    // Computed,
    // Watchers,
    // PropsParent,
    // ComponentEvent,
    // CustomInput,
    // ParentSlot,
    // ParentSlot2,
    // DynamicParent,
    // Portal,
    HttpParent,
  },
};
</script>

<style>
body {
  background: darkgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
