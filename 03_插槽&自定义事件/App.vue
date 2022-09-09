<template>
  <h1>一个人的信息</h1>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>工作：{{ job.type }}</p>
    <p>薪水：{{ job.salary }}</p>

    <button @click="changeName">changeName</button>

  </div>
  <Demo msg="hello" @hello = "showHelloMessage">
    <template v-slot:center>
    <span>你好啊</span>
    </template>
  </Demo>
</template>

<script>
import { ref } from "vue";
import Demo from './components/Demo.vue'

export default {
  name: "App",
  components:{Demo},
  setup() {
    // 数据
    let name = ref("张三");
    let age = 19;

    let job = ref({
      type: "web",
      salary: "30k",
    });

    function changeName() {
      name.value = "Liu";
    }

    console.log(name);
    console.log(job);

    const showHelloMessage = ()=>{
      alert('hello!!!');
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeName,
      showHelloMessage
    };
  },
};
</script>

<style>
</style>
