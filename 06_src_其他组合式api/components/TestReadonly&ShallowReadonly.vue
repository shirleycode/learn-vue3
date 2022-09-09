<template>
  <h1>一个人的信息</h1>
  <div>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <p>工作：{{ person.job.j1.salary }}</p>
    <button @click="changeName">更改名字</button>
    <button @click="changeSalary">更改薪水</button>
  </div>
</template>

<script>
import { reactive, readonly, shallowReadonly } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "zhangsan",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // person = readonly(person); // 只读不能更改数据
    person = shallowReadonly(person); // 浅层次只读，第一层不能更改

    const changeName = () => {
      person.name = "lisi";
    };
    const changeSalary = () => {
      person.job.j1.salary = "30";
    };

    return { person, changeName, changeSalary };
  },
};
</script>

<style>
</style>
