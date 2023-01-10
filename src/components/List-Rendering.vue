// v-for directive, // array of strings, objects, arrays // Block of HTML
elements // Object key value pairs

<template>
  <h1>List Rendering</h1>

  <!-- array string -->
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>

  <!-- array objects -->
  <h2 v-for="(name, index) in fullNames" :key="name.first">
    {{ index }} {{ name.first }} {{ name.last }}
  </h2>

  <!-- array array -->
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>

  <!-- object -->
  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>

  <!-- :key is a special attribute to identify nodes with comparing new DOM with old DOM when there is a change in UI -->
  <!-- Without key and unique key will lead to problems, only primitive value -->
  <!-- key -->
  <template v-for="name in names" :key="name">
    <!-- the input is tied to this node when DOM changes -->
    <h2>{{ name }}</h2>
    <input type="text" placeholder="Last Name" />
    <hr />
  </template>
  <button @click="shuffle">Shuffle!</button>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
    return {
      names: ['Sam', 'Jim', 'Mac'],
      fullNames: [
        { first: 'Bruce', last: 'Wayne' },
        { first: 'Clark', last: 'Kent' },
        { first: 'Flash', last: 'Storm' },
      ],
      actors: [
        { name: 'George', movies: ['Batman', 'The Cowboy'] },
        { name: 'Peter', movies: ['Titanic', 'The Ship That Sank'] },
      ],
      myInfo: {
        name: 'Hojo',
        channel: 'TvChannel',
        course: 'Vue3',
      },
    };
  },
  methods: {
    shuffle() {
      // eslint-disable-next-line no-undef
      let removed = this.names.pop();
      this.names.unshift(removed);
    },
  },
};
</script>

<style></style>
