<template>
  <p>{{ sum }}</p>
  <p>{{ name }}</p>
  <p>{{ price }}</p>
  <p>{{ person.name }}</p>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  isReactive,
  isReadonly,
  isRef,
  isProxy,
  readonly,
} from "vue";

export default {
  name: "App",
  setup() {
    const sum = ref(0);
    const car = reactive({ name: "宝马", price: "30" });
    const person = readonly({ name: "zhang" });

    console.log(isReactive(sum));
    console.log(isReadonly(sum));
    console.log(isRef(sum)); //true
    console.log(isProxy(sum));
    console.log("---");
    console.log(isReactive(car)); //true
    console.log(isReadonly(car));
    console.log(isRef(car));
    console.log(isProxy(car)); //true
    console.log("---");
    console.log(isReactive(person));
    console.log(isReadonly(person));//true
    console.log(isRef(person));
    console.log(isProxy(person));//true

    return { ...toRefs(car), sum, person };
  },
};
</script>
