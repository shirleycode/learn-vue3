<template>
  <h1>当前的值为 :{{ sum }}</h1>
  <button @click="add">点我加1</button>
  <h1>鼠标的位置 x:{{ point.x }},y:{{ point.y }}</h1>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from "vue";

export default {
  name: "App",
  setup() {
    const sum = ref(0);
    const point = reactive({
      x: 0,
      y: 0,
    });

    const add = () => {
      sum.value += 1;
    };

    const savePoint = (event) => {
      point.x = event.pageX;
      point.y = event.pageY;
      console.log('=== point ===',point)
    };

    onMounted(() => {
      window.addEventListener("click", savePoint);
    });
    
    onUnmounted(() => {
      window.removeEventListener("click", savePoint);
    });

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
