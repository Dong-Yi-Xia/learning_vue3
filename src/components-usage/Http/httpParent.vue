// Vue does not handle getting and sending data to the server // To get data
from server, its needs a http library such as axios, fetch

<template>
  <div>
    <CreatePost />
    <PostList />
  </div>
</template>

<script>
import PostList from './PostList.vue';
import CreatePost from './CreatePost.vue';
export default {
  name: 'HttpParent',
  components: {
    PostList,
    CreatePost,
  },
};
</script>

<style scoped></style>
