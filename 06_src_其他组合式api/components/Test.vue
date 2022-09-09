<template>
  <div class="demo">
    <h1>我是Demo组件</h1>
    <p>{{ car }}</p>
    <button @click="changeData">修改车名</button>
    <Child></Child>
  </div>
</template>

<script>
import { provide,reactive } from "vue";
import Child from "./Child.vue";

let obj = { name: "宝马", price: 30 };

export default {
  name: "Demo",
  components: { Child },
  // provide: { car: obj },
  setup() {

    const car = reactive(obj)
    provide("car", car);

    const changeData = () => {
      car.name = "奔驰";
    };

    return {
      changeData,
      car
    };
  },
};
</script>
<style scoped>
.demo {
  background-color: gray;
  padding: 10px;
}
</style>