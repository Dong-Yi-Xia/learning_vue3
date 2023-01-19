<template>
  <div>
    <h1>GrandChild Using Provide and Inject</h1>
    <h2>Got my username from Provided Parent - {{ username }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PropComponentA',

  //Recieved from the parent, provide
  inject: ['username'],
};
</script>

<style scoped></style>
