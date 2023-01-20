<template>
  <div>
    <!-- use ref attribute keyword to an element of DOM to be referenced -->
    <input type="text" ref="inputRef" />

    <!-- If used on a Child component, the ref is the component instance -->
    <CreatePost ref="createPostRef"/>
  </div>
</template>

<script>
import CreatePost from '../Http/CreatePost.vue'
export default {
  name: 'TemplateRef',
  components: {
    CreatePost,
  },
  mounted() {
    // To access ref attribute, use the $ref
    this.$refs.inputRef.focus();

    console.log(this.$refs.createPostRef)
  },
};
</script>

<style scoped></style>
