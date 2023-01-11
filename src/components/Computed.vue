<template>
  <h1>Computed</h1>
  <!-- ways to display static html, text interpolation, expressions, methods -->

  <h2>Fullname - {{ first }} {{ last }}</h2>
  <h2>Computed FullName {{ fullName }}</h2>
  <button @click="changeFullName"> Change Name</button>
  <hr />

  <button @click="items.push({ id: 4, title: 'mouse', price: 40 })">
    Add Item
  </button>
  <h2>Computed total - {{ total }}</h2>
  <h2>Methods total - {{ getTotal() }}</h2>

  <!-- both computed and method are very similar, computed is cache and method is not -->
  <input type="text" v-model="country" />
  <hr />

  <!-- computed and v-for -->
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }}{{ item.price }}</h2>
  </template>

  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }}{{ item.price }}
  </h2>
</template>

<script>
export default {
  name: 'Computed',
  data() {
    return {
      first: 'Bruce',
      last: 'Wayne',
      items: [
        { id: 1, title: 'tv', price: 100 },
        { id: 2, title: 'phone', price: 200 },
        { id: 3, title: 'laptop', price: 300 },
      ],
      country: '',
    };
  },
  methods: {
    changeFullName(){
      this.fullName = 'Clark Kent'
    },
    getTotal() {
      console.log('Inside getTotal Method');
      return this.items.reduce((total, curr) => total + curr.price, 0);
    },
  },
  computed: {
    // fullName() {
    //   return `${this.first} ${this.last}`;
    // },
    // to read and write, instead of a function use an object
    fullName: {
      get() {
        return `${this.first} ${this.last}`;
      },
      set(value) {
        const names = value.split(' ')
        this.first = names[0]
        this.last = names[1]
      },
    },
    total() {
      console.log('Inside computed total');
      return this.items.reduce((total, curr) => total + curr.price, 0);
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
  },
};
</script>

<style></style>
