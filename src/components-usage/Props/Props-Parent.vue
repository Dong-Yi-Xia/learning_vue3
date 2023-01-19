<template>
  <h1>Components</h1>

  <!-- Using props, props use kebab-case (preferred) -->
  <Props name="Bruce" hero-name="Batman" />
  <!-- Props and v-bind -->
  <Props :name="name" :hero-name="channel" />
  <!-- v-bind stringnumber => number, use v-bind directive is bing non-string values -->
  <Props2
    title="Does Feet Smell?"
    :likes="50"
    :isPublished="true"
    id="my-article"
  />

  <h2>Parent Provide Component {{ name }}</h2>
</template>

<script>
import Props from './Props.vue';
import Props2 from './Props2.vue';

export default {
  name: 'PropsParent',
  components: {
    Props,
    Props2,
  },
  data() {
    return {
      name: 'Hero',
      channel: 'HeroYuber',
    };
  },
  methods: {},
  computed: {},

  //Provide is similar to data(), make available to childrens
  // This way, only children has access, parent does not have access.
  // provide: {
  //   username: 'SuperHeroes',
  // },

  //To pass in the data to the provide, need to use a function and return an object
  //To use data in parent component and down the tree
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style></style>
