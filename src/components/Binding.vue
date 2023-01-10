<template>
  <h1>Binding</h1>

  <h2>{{ greet }} {{ name }}</h2>
  <h2 v-text="channel"></h2>
  <!--can use html, but very dangerous, hackers can insert here-->
  <h2 v-html="hack"></h2>

  <!-- v-bind:followed by the data property = evaluation-->
  <h2 v-bind:id="HeadingID">HeadingID</h2>
  <button v-bind:disabled="isDisable">Bind Disabled</button>

  <h2 class="underline">Underline</h2>
</template>

<script>
export default {
  name: 'Binding',
  data() {
    return {
      greet: 'Hello',
      name: 'Batman',
      channel: 'MyYoutube',
      hack: '<b>A Bold Channel</b>',
      HeadingID: 'heading',
      isDisable: true,
    };
  },
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
