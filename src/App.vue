<template>
<div class="page">
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="footer" v-if="showFooter">
    <router-link to="/home" class="item">home</router-link>
    <router-link to="/about" class="item">about</router-link>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref,watch } from "vue";
import { useRoute } from "vue-router";
const route:any = useRoute()
const showFooter = ref(true)
watch(
  () => route.fullPath,
  ()=>{
    showFooter.value = route.meta.showFooter || false
  }
)
</script>


<style lang="less" scoped>
.page{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow-y: auto;
  }
  .footer{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eee;
    .item{
      flex: 1;
      &.router-link-exact-active{
        color: #ff0000;
        font-weight: bold;
      }
    }
  }
}
</style>
