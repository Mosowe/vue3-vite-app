<template>
  <div>home</div>
  <HelloWorld />
</template>

<script setup lang="ts">
import HelloWorld from 'components/HelloWorld.vue'
window.hasOwnProperty("$cancelRequest") && window.$cancelRequest()
</script>


<style lang="less">
</style>
