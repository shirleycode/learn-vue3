<template>
  <button @click="isShowDemo = !isShowDemo">切换Demo</button>
  <Test v-if="isShowDemo"></Test>
</template>

<script>
import { ref  } from "vue";
import Test from './components/Test.vue'

export default {
  name: "App",
  components:{Test},
  setup() {
    const isShowDemo = ref(true);

    return { isShowDemo };
  },
};
</script>
