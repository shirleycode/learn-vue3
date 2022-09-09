import { createApp } from 'vue'
// import App from './App.vue'
import App from './App02.vue'


// 创建应用实例对象-- app （类似于vue2中的vm，但是比vm要轻）
const app  = createApp(App) 
// 挂载
app.mount('#app')

// // 卸载
// setTimeout(()=>{
//   app.unmount('#app')
// },1000)

/** 
const vm = new Vue({
  render:h=>h(App)
})
vm.$mount('#app')
*/