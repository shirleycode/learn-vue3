<template>
  <div class="son">
    <h1>我是Son组件</h1>
    <p>{{ car }}</p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Child",
  // inject: ["car"],
  setup() {


    const car = inject('car')

    return {
      car
    }


  },
};
</script>
<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>