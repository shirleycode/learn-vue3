<template>
  <div class="demo">
    <h1>我是Demo组件</h1>
    
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child.vue'

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