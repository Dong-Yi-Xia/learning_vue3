<template>
  <h1>Event Handlers</h1>

  <h2>{{ count }}</h2>
  <!-- v-on: shorthand @ -->
    <!-- event special parameter called $event not needed, when there is no additional parameters, automatically injected -->
  <button @click="increment">Increase</button>
  <!-- event special parameter called $event, when there is additional parameters -->
  <button v-on:click="decrement(1, $event)">Decrease 1</button>
  <button v-on:click="decrement(5)">Decrease 5</button>

  <h2>{{name}}</h2>
  <button @click="changeName">Change Name</button>

  <div>
    <!-- using multiple evulation, the $event isn't automatically injected -->
    <button @click="changeName($event), decrement(2, $event)"> Combined events</button>
  </div>

</template>

<script>
export default {
  name: 'EventHandlers',
  data() {
    return {
      name: 'Bruce',
      count: 0,
    };
  },
  methods: {
    increment(){
      this.count++
    },
    decrement(num, event){
      this.count -= num
      console.log('Event in decrement', event)
    },
    //events has the event property, when there is no additional arguments
    changeName(event){
      this.name = 'Batman'
      console.log('Event', event)
    }
  }
};
</script>

<style></style>
