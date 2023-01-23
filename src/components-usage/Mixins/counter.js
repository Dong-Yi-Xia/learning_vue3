// Can use any data, methods, watcher, computed, lifecycle ... aka(options API)

export default {
  data(){
    return {
      count: 0
    }
  },
  methods: {
    incrementCount(){
      this.count += 1
    }
  }
}
