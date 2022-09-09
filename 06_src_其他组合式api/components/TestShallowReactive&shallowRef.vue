<template>
  <h1>一个人的信息</h1>
  <div>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <p>工作：{{ person.job.j1.salary }}</p>
    <button @click="changeName">更改名字</button>
    <button @click="changeSalary">更改薪水</button>
  </div>
  <div>
    <h1>{{ num.x }}</h1>
    <button @click="num.x++">X++</button>
  </div>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">count ++</button>
  </div>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef } from "vue";

export default {
  name: "App",
  setup() {
    // const person = shallowReactive({ // 只考虑第一层的数据的响应式
    const person = reactive({
      name: "zhangsan",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    const num = ref({
      x: 0,
    });

    // const num = shallowRef({ // 
    //   x: 0,
    // });

    const count = shallowRef(0); // 浅层次的响应式

    console.log(count);

    const changeName = () => {
      person.name = "lisi";
    };
    const changeSalary = () => {
      person.job.j1.salary = "30";
    };

    return { person, num,count, changeName, changeSalary };
  },
};
</script>

<style>
</style>
