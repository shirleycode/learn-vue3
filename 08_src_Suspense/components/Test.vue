<template>
  <div class="demo">
    <h1>我是Demo组件</h1>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./Child.vue"; //  静态引入

import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./Child.vue")); // 动态引入

export default {
  name: "Demo",
  components: { Child },
  setup() {
   
  },
};
</script>
<style scoped>
.demo {
  background-color: gray;
  padding: 10px;
}
</style>