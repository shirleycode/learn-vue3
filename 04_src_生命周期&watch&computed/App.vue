<template>
  <button @click="isShowDemo = !isShowDemo">切换Demo</button>
  <TestLifeCycle v-if="isShowDemo"></TestLifeCycle>
</template>

<script>
import { ref  } from "vue";
import TestLifeCycle from './components/TestLifeCycle.vue'

export default {
  name: "App",
  components:{TestLifeCycle},
  setup() {
    const isShowDemo = ref(true);

    return { isShowDemo };
  },
};
</script>

<style>
</style>
