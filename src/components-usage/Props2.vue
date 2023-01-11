<template>
  <h2>Article</h2>
  <h3>{{ title }}</h3>
  <h3>Likes - {{ likes }}</h3>
  <h3>Published Status - {{ isPublished ? 'yes' : 'no' }}</h3>
</template>

<script>
export default {
  name: 'Props2',
  // Get from the parent component, that will be accepted, object, key is prop-name, value is prop-type
  // With object Type check
  props: {
    // title: String,

    //Can expand it
    title: {
      type: String,
      required: true,
      default: 'Article Default Title',
    },
    likes: Number,
    isPublished: Boolean,
  },
};
</script>

<style scoped></style>
