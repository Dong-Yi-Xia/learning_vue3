<template>
  <h1>Binding</h1>
  <!--
  v-bind:followed by the data property
  the shorthand, is just :followed by the data property
  v-bind:class
  :class
  -->

  <h2>{{ greet }} {{ name }}</h2>
  <h2 v-text="channel"></h2>
  <!--can use html, but very dangerous, hackers can insert here-->
  <h2 v-html="hack"></h2>
  <hr />

  <!-- v-bind:followed by the data property = evaluation-->
  <h2 v-bind:id="HeadingID">HeadingID</h2>
  <button v-bind:disabled="isDisable">Bind Disabled</button>
  <hr />

  <!-- class binding -->
  <h2 class="underline">Underline</h2>
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted</h2>
  <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">Sold Out?</h2>
  <h2 v-bind:class="['new', 'promoted']">array class</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
    Array Conditional class
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      'sold-out': !isSoldOut,
    }"
  >
    Object Conditional class
  </h2>
  <hr />

  <!-- style -->
  <h2 v-bind:style="{ color: highlightColor, 'font-size': headSize + 'px' }">
    Inline Style
  </h2>

  <h2 v-bind:style="styleObject">Inline Style Object</h2>
  <div v-bind:style="[baseStyle, successStyle]">Success Style Array</div>
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
      status: 'success',
      isPromoted: true,
      isSoldOut: false,
      highlightColor: 'purple',
      headSize: 50,
      styleObject: {
        color: 'orange',
        fontSize: '50px',
      },
      baseStyle: {
        fontSize: '25px',
        padding: '10px'
      },
      successStyle: {
        color: 'green',
        backgroundColor: 'lightgreen'
      }
    };
  },
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}
.sold-out {
  color: red;
}
.new {
  color: green;
}
</style>
