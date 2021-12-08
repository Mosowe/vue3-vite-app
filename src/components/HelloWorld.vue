<template>
  <h1>{{ msg }}</h1>
  <div class="count">count:{{count}}</div>
  <div class="count">cv:{{cv}}</div>
  <van-button type="primary" @click="clickThis" size="large">点我</van-button>
</template>

<script setup lang="ts">

  const { width, height } = useWindowSize(); // vant的组合式api
  const internalInstance = getCurrentInstance()
  console.log(internalInstance?.appContext.config.globalProperties)
	console.log('window宽高:',width.value, height.value)
  // 定义props，接收父级传参
  defineProps<{ 
    msg: string,
    num?: number
  }>()
  
  // 定义emit方法，向父级传递方法
  const emit= defineEmits<{
    (e: 'click', num: number): void
    (e: 'change', data: number): void
  }>()

  // 定义变量
  const count = ref(0)
  // 点击事件
  const clickThis = () => {
    count.value += 1
    emit('click',count.value)
  }
  // computed方法
  let cv = computed(()=>{
    return count.value * 2
  })
  // watch方法，同时监听多个且相同的处理方法可以采用数组形式
  watch(count,() => {
    console.log('count改变了',count.value)
  })
  watch(cv,() => {
    console.log('cv改变了',cv.value)
    emit('change',cv.value)
  })

  defineExpose({
    count,
    clickThis
  })
</script>

<style scoped lang="less">
h1{
  font-size: 32px;
  color: @mainColor;
  text-align: center;
}
.count{
  text-align: center;
  font-weight: bold;
  margin: 30px 0;
}
</style>
