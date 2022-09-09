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
import { reactive, ref, watch,watchEffect } from "vue";

export default {
  name: "App",
  // watch: {
  //   immediate:true,
  //   deep:true,
  //   sum: {
  //     handler(newVal,oldVal) {
  //       console.log("sum 的值变化了，oldVal=" + oldVal + ",newVal=" + newVal);
  //     },
  //   },
  // },
  setup() {
    const sum = ref(0);
    const msg = ref("你好");

    const person = reactive({
      name: "zhang",
      age: 19,
      job:{
        salary:'20k'
      }
    });

    // // 情况1：监视ref所定义的一个响应式数据
    // watch(sum, (newVal, oldVal) => {
    //   console.log("sum 的值变化了，oldVal=" + oldVal + ",newVal=" + newVal);
    // });

    // // 情况2：监视ref所定义的多个响应式数据
    // watch(
    //   [sum, msg],
    //   (newVal, oldVal) => {
    //     console.log(
    //       "sum、msg 的值变化了，oldVal=" + oldVal + ",newVal=" + newVal
    //     );
    //   },
    //   { immediate: true }
    // );

    // // 情况3：监视reactive所定义的一个响应式数据，
    // // 注意1：此处无法正确获取oldValue!!!
    // // 注意2: 强制开启了深度监视（deep配置无效）
    // watch(person, (newVal, oldVal) => {
    //   console.log("person的值变化", newVal, oldVal);
    // },{deep:false}); //此处的deep配置不再奏效

    // 情况4：监控对象中的某个属性
    // watch([()=>person.job,()=>person.name], (newVal, oldVal) => {
    //   console.log("person.job/person.name的值变化", newVal, oldVal);
    // },{deep:true,immediate:true}); 

    watchEffect(()=>{
      const x1 = person.name + '同学'
      console.log(x1)
    })


    return { sum, msg, person };
  },
};
</script>

<style>
</style>
