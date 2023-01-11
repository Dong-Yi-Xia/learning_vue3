<template>
  <h1>Components</h1>

  <!-- Using props, props use kebab-case (preferred) -->
  <Props name="Bruce" hero-name="Batman" />
  <!-- Props and v-bind -->
  <Props :name="name" :hero-name="channel" />
  <!-- v-bind stringnumber => number, use v-bind directive is bing non-string values -->
  <Props2 title="Does Feet Smell?" :likes="50" :isPublished="true" />
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
};
</script>

<style></style>
