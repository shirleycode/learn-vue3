<template>
  <div class="demo">
    <h1>我是Child组件</h1>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  name: "Child",
  components: { Dialog },
  setup() {},
};
</script>
<style scoped>
.demo {
  background-color: orange;
  padding: 10px;
}
</style>