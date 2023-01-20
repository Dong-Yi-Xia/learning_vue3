<template>
  <div>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

    <TabA v-if="activeTab === 'TabA'" />
    <TabB v-if="activeTab === 'TabB'" />
    <TabC v-if="activeTab === 'TabC'" />
  </div>
</template>

<script>
import TabA from './TabA.vue';
import TabB from './TabB.vue';
import TabC from './TabC.vue';

export default {
  name: 'DynamicParent',
  components: {
    TabA,
    TabB,
    TabC,
  },
  data() {
    return {
      activeTab: 'TabA',
    };
  },
};
</script>

<style scoped></style>
