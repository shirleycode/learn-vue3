<template>
  <h1>一个人的信息</h1>
  <div>
    <p>姓：<input type="text" v-model="person.firstName" /></p>
    <p>名：<input type="text" v-model="person.lastName" /></p>
    <p>全名：{{ person.fullName }}</p>
    <p>全名：<input type="text" v-model="person.fullName" /></p>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  name: "TEST01",
  setup() {
    const person = reactive({
      firstName: "zhang",
      lastName: "san",
    });

    // 计算属性-- 简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + " " + person.lastName;
    // })

    //计算属性-- 完整写法
    person.fullName = computed({
      get() {
        return person.firstName + " " + person.lastName;
      },
      set(value) {
        const nameArr = value.split(" ");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return { person };
  },
};
</script>

<style>
</style>
