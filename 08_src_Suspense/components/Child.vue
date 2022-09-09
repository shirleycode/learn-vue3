<template>
  <div class="child">
    <h1>我是Child组件</h1>
    <h4>{{sum}}</h4>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  async setup() {
    const sum = ref(0);

    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve({sum});
      }, 3000);
    });
    return await p;
  },
};
</script>
<style scoped>
.child {
  background-color: orange;
  padding: 10px;
}
</style>