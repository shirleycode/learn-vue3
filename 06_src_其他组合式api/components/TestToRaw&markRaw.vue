<template>
  <h1>一个人的信息</h1>
  <div>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <p>工作：{{ person.job.j1.salary }}</p>
    <p>座驾信息：{{ person.car }}</p>
    <button @click="changeName">更改名字</button>
    <button @click="changeSalary">更改薪水</button>
    <button @click="show">输出最原始的Person</button>

    <button @click="addCar">添加一台车</button>
    <button @click="changePrice">换价格</button>
  </div>
</template>

<script>
import { reactive, ref, toRaw, markRaw } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      // let person = ref({ // ref 定义的响应式数据 toRaw 为原始对象无效
      name: "zhangsan",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
      car: {},
    });

    const changeName = () => {
      person.value.name = "lisi";
    };
    const changeSalary = () => {
      person.value.job.j1.salary = "30";
    };

    const show = () => {
      const p = toRaw(person);
      console.log(p);
    };

    const addCar = () => {
      // person.car = { name: "宝马", price: 30 };
      person.car = markRaw({ name: "宝马", price: 30 }); // markRaw 标记的对象 不在是响应式数据
    };

    const changePrice = () => {
      person.car.price++;
    };

    return { person, changeName, changeSalary, show, addCar, changePrice };
  },
};
</script>

<style>
</style>
