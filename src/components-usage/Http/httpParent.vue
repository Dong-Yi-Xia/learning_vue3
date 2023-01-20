// Vue does not handle getting and sending data to the server // To get data
from server, its needs a http library such as axios, fetch

<template>
  <div><PostList /></div>
</template>

<script>
import PostList from './PostList.vue';
export default {
  name: 'HttpParent',
  components: {
    PostList,
  },
};
</script>

<style scoped></style>
