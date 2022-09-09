<template>
  <h1>Demo</h1>
  <div>
    {{ msg }}
  </div>
  <button @click="callHello">callHello</button><br />
  <slot name="center"></slot>
</template>

<script>
export default {
  name: "Demo",
  props: ["msg"],
  emits: ["hello"],
  beforeCreate() {
    console.log("beforeCreate"); // 在setup后执行
  },
  setup(props, context) {
    console.log("setup"); // 先执行setup
    console.log(context, props);

    const callHello = () => {
      context.emit("hello", "1"); // 自定义事件
    };

    return {
      callHello,
    };
  },
};
</script>

<style>
</style>
