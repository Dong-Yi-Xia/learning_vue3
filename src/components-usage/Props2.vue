<template>
  <!-- non-props attributes automatically apply to root node -->
  <div>
    <h2>Article</h2>
    <!-- use special v-bind $attrs for non-props attributes to element of choice-->
    <h3 v-bind="$attrs">{{ title }}</h3>
    <h3>Likes - {{ likes }}</h3>
    <h3>Published Status - {{ isPublished ? 'yes' : 'no' }}</h3>
  </div>
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
  //Use to prevent non-props attributes (not custom props) such as id, class, style to root node
  inheritAttrs: false,
};
</script>

<style scoped></style>
