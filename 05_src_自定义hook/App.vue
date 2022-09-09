<template>
  <button @click="isShowDemo = !isShowDemo">切换Demo</button>
  <Point v-if="isShowDemo"></Point>
</template>

<script>
import { ref  } from "vue";
// import Point from './components/Point.vue'
import Point from './components/Test.vue'

export default {
  name: "App",
  components:{Point},
  setup() {
    const isShowDemo = ref(true);

    return { isShowDemo };
  },
};
</script>

<style>
</style>
