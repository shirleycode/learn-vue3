<template>
  <h1>一个人的信息</h1>
  <div>
    <p>sum<input type="text" v-model="sum" /></p>
    <p>msg<input type="text" v-model="msg" /></p>
  </div>
  <p>name<input type="text" v-model="person.name" /></p>
  <p>age<input type="text" v-model="person.age" /></p>
  <p>salary<input type="text" v-model="person.job.salary" /></p>
</template>

<script>
import {
  reactive,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "App",
  setup() {
    const sum = ref(0);
    const msg = ref("你好");

    const person = reactive({
      name: "zhang",
      age: 19,
      job: {
        salary: "20k",
      },
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return { sum, msg, person };
  },
  //#region 配置项的方式使用生命周期钩子函数
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeUnmount() {
  //   console.log("beforeUnmount");
  // },
  // unmounted() {
  //   console.log("unmounted");
  // },
  //#endregion
};
</script>

<style>
</style>
