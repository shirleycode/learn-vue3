<template>
  <h1>当前的值为 :{{ sum }}</h1>
  <button @click="add">点我加1</button>
  <h1>鼠标的位置 x:{{ point.x }},y:{{ point.y }}</h1>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";

export default {
  name: "App",
  setup() {
    const sum = ref(0);
    const add = () => {
      sum.value += 1;
    };

    const [point] = usePoint();
    
    return {
      sum,
      point,
      add,
    };
  },
};
</script>

<style>
</style>
