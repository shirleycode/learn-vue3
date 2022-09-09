<template>
  <div>
    <input type="text" v-model="keyword" />
    <h3>{{ keyword }}</h3>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // 自定义一个ref
    function myRef(value) {
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            console.log("有人从myRef容器中读取了数据");
            track(); // 告诉Vue这个value值是需要被“追踪”的
            return value;
          },
          set(newValue) {
            console.log("有人从myRef容器中写入了数据:" + newValue);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue 去重新解析模板
            }, 1000);
          },
        };
      });
    }

    // let keyword = ref("hello"); // 使用vue提供的ref
    let keyword = myRef("hello"); // 使用程序员自定义的ref

    return {
      keyword,
    };
  },
};
</script>