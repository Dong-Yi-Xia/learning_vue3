<template>
  <div>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

    <!-- <TabA v-if="activeTab === 'TabA'" />
    <TabB v-if="activeTab === 'TabB'" />
    <TabC v-if="activeTab === 'TabC'" /> -->

    <h2>Dynamic Component</h2>
    <!-- Dynamic Appoarch in rendering the register components -->
    <!-- Use the component tag, use :is, and bind the register components, :is point to component name-->
    <component :is="activeTab" />

    <hr />
    <h2>Cache The Component</h2>
    <!-- keep-alive will cache the component and won't create an new instance, even when inactive state -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
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
