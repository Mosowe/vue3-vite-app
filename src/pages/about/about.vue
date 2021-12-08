<template>
  <div>about</div>
  <br/>
  <router-link to="/user?id=123" class="link">to user page</router-link>
</template>

<script setup lang="ts">
import {
  getPageCustomService
} from './services'

  // get请求
  const getData = async () => { 
    let { data, code } = await getPageCustomService()
    console.log(data,code)
  }
  getData()

</script>


<style lang="less" scoped>
.link{
}
</style>
