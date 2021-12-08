<template>
  <div class="title">home</div>
  <HelloWorld 
    ref="hello"
    msg="子组件" 
    @click="HelloWorldClick"
    @change="HelloWorldChange"
  />
  <br/>
  <br/>
  <br/>
  <van-button @click="showRef">查看子组件count</van-button>
  <van-button @click="eventChild">触发子组件clickThis</van-button>
</template>

<script setup lang="ts">
import {Toast} from 'vant'
// window.$cancelRequest()
const HelloWorldClick = (e:number) => {
  console.log('子组件click',e)
}
const HelloWorldChange = (e:number) => {
  console.log('子组件change',e)
}
const hello = ref()
const showRef = () => {
  Toast(hello.value.count)
  console.log(hello.value.count)
}
const eventChild = () => {
  hello.value.clickThis()
}

</script>


<style lang="less" scoped>
.title{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
}
</style>
