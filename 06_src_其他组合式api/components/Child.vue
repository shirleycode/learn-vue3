<template>
  <div class="child">
    <h1>我是Child组件</h1>
    <p>{{ car }}</p>
    <Son></Son>
  </div>
</template>

<script>
import {} from "vue";
import Son from "./Son.vue";

export default {
  name: "Child",
  components: { Son },
  inject: ["car"],
  setup() {},
};
</script>
<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>