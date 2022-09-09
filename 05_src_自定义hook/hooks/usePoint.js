import { onMounted, onUnmounted ,reactive} from 'vue'

export default ()=> {
  // 数据
  const point = reactive({
    x: 0,
    y: 0,
  });

  const savePoint = (event) => {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log('=== point ===', point)
  };

  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onUnmounted(() => {
    window.removeEventListener("click", savePoint);
  });

  return [point]
}