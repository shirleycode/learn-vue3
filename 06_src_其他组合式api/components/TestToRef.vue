<template>
  <h1>一个人的信息</h1>
  <!-- <div>
    <p>名字：<input type="text" v-model="person.name" /></p>
    <p>薪水：<input type="text" v-model="person.job.j1.salary" /></p>
  </div>
  <div>
    <p>名字: {{ person.name }}</p>
    <p>薪水：{{ person.job.j1.salary }}</p>
  </div> -->
  <hr />
  <div>
    <p>名字：<input type="text" v-model="name" /></p>
    <p>薪水：<input type="text" v-model="job.j1.salary" /></p>
  </div>
  <div>
    <p>名字: {{ name }}</p>
    <p>薪水：{{ job.j1.salary }}</p>
  </div>
</template>

<script>
import { reactive, toRef,toRefs } from "vue";

export default {
  name: "App",
  setup() {
    const person = reactive({
      name: "zhangsan",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // return { person };

    // return {
    //   person,
    //   name: toRef(person,'name'),
    //   salary: toRef(person.job.j1,'salary'),
    // };

    return {
      ...toRefs(person) // 对象的第一层数据批量toRef
    }
  },
};
</script>

<style>
</style>
