<template>
  <div>
    <button @click="getPosts">Load Posts List</button>

    <!-- When the API endpoint is wrong -->
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>

    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      errorMsg: '',
    };
  },
  methods: {
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        // .get('https://jsonplaceholder.typicode.com/postsbbbb') Return error response
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMsg = `There was an Error, wahaha, error: ${error.message}`;
        });
    },
  },
};
</script>

<style scoped></style>
