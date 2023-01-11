<template>
  <h1>Form handling</h1>
  <!-- v-model way way binding the template to the script -->
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>

  <!-- @submit.prevent same as event.preventDefault() -->
  <form @submit="submitForm">
    <!-- text -->
    <div>
      <label for="name">Name</label>
      <!-- modifier trim get rid of whitespace, lazy update when out of focus rather than onChange -->
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>

    <!-- area text -->
    <div>
      <label for="profile">Profle Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary"></textarea>
    </div>

    <!-- select -->
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="Country1">country1</option>
        <option value="Country2">country2</option>
        <option value="Country3">country3</option>
      </select>
    </div>

    <!-- multi select -->
    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="">Select a country</option>
        <option value="Country1">country1</option>
        <option value="Country2">country2</option>
        <option value="Country3">country3</option>
      </select>
    </div>

    <!-- checkbox -->
    <div>
      <!-- use true-value & false-value if you don't want use true false return value -->
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote Work?</label>
    </div>

    <!-- multi checkbox -->
    <div>
      <label>Skills</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skills"
      />
      <label for="html">html</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
      <label for="css">css</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skills"
      />
      <label for="javascript">javascript</label>
    </div>

    <!-- radio button -->
    <div>
      <label>Year of Experiences</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.experiences"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.experiences"
      />
      <label for="3-5">3-5</label>
      <input type="radio" id="6+" value="6+" v-model="formValues.experiences" />
      <label for="6+">6+</label>
    </div>

    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model="formValues.age" />
    </div>

    <div>
      <!-- <input type="text" placeholder="submit" @keyup.enter="submitForm" /> -->
      <button>submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: 'no',
        skills: [],
        experiences: '',
        age: null,
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log('Form Values', this.formValues);
    },
  },
};
</script>

<style></style>
