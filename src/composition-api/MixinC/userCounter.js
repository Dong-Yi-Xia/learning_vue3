// Follow a convention of having the word use_____
// using composition API

import { ref } from 'vue';

// export default function useCounter() {
//   const count = ref(0);

//   function incrementCount() {
//     count.value += 1;
//   }

//   return {
//     count,
//     incrementCount,
//   };
// }


// Allows for passing in parameters
export default function useCounter(initialCount = 0, stepSize = 1) { //default values
  const count = ref(initialCount);

  function incrementCount() {
    count.value += stepSize;
  }

  return {
    count,
    incrementCount,
  };
}
