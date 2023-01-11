<template>
  <h1>Watchers</h1>

  <h2>volume tracker</h2>
  <h3>current volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <hr />

  <label for="Movie">Movie</label>
  <input type="text" v-model="movie" />

  <label for="Title">Title</label>
  <input type="text" v-model.lazy="movieInfo.title" />

  <label for="Actor">Actor</label>
  <input type="text" v-model="movieInfo.actor" />

  <div>
    <button @click="movieList.push('hero')">Add movie</button>

    <!-- By creating a new references, in the watcher, the deep property is not needed  -->
    <!-- <button @click="movieList = movieList.concat(['hero'])">Add movie</button> -->
  </div>
</template>

<script>
export default {
  name: 'Watchers',
  data() {
    return {
      volume: 0,
      movie: 'superman',
      movieInfo: {
        title: '',
        actor: '',
      },
      movieList: ['batman', 'robin', 'flash'],
    };
  },
  methods: {},
  computed: {
    //1. Need to compose new data
    //2. Reduce logic
  },
  watch: {
    //1. Check if property had changed to a favorable value
    //2. API response to change in data
    //3. Apply transitions

    // during a change, watcher comes with 2 properties, newValue and oldValue, watch the return data
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert('You have been alert');
      }
    },

    // Only gets called when there is a change
    // movie(newValue){
    //   console.log('Calling API with movie name = ', newValue)
    // }

    // Use an object instead of function, set immediate to call watch on page load,
    // this will handle the inital value of movie
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name = ${newValue}`);
      },
      immediate: true,
    },

    //watching a object
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API with movie title ${newValue.title} and actor ${newValue.actor}`
        );
      },
      // need to call deep for complex type, objects and arrays
      deep: true,
    },

    //watching an array
    movieList: {
      handler(newValue) {
        console.log(`Updated list, ${newValue}`);
      },
      // need to call deep for complex type, objects and arrays
      deep: true,
    },
  },
};
</script>

<style></style>
