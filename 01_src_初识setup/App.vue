<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>vue2 A：{{ A }}</p>
    <p>vue2/vue3 b：{{ b}}</p>
    <button @click="sayHello">说话</button>
    <button @click="sayWelcome">vue2说话</button>
    <button @click="test1">测试一下Vue2中读取vue3中的数据和方法</button>
    <button @click="test2">测试一下Vue3中读取vue2中的数据和方法</button>
  </div>
</template>

<script>
// import {h} from 'vue'

export default {
  name: "App",
  data() {
    return {
      A: "aa",
      b: "vue2中的数据B",
    };
  },
  methods: {
    sayWelcome() {
      console.log("say welcome");
    },
    test1() {
      console.log(this.name);
      console.log(this.A);
      console.log(this.sayHello);
    },
  },
  setup() {
    // 数据
    let name = "张三";
    let age = 19;
    // let b = "vue3中的数据B";

    // 方法
    function sayHello() {
      alert(`我叫${name},今年${age}`);
    }

    function test2() {
      console.log(this.A);
      console.log(this.sayWelcome);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      // b,
      sayHello,
      test2,
    };

    // 返回一个渲染函数
    // return ()=>h('h1','hello')
  },
};
</script>

<style>
</style>
