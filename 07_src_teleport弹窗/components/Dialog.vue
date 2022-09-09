<template>
  <div class="demo">
    <button @click="show = true">点我弹个窗</button>
    <teleport to="body">
      <div class="mask" v-if="show">
        <div class="dialog">
          <h3>我是弹窗</h3>
          <h4>我是内容</h4>
          <h4>我是内容</h4>
          <h4>我是内容</h4>
          <button @click="show = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Demo",
  setup() {
    const show = ref(true);

    return {
      show,
    };
  },
};
</script>
<style scoped>
.mask {
  position: absolute;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

}
.dialog {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
}
</style>