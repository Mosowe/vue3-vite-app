<template>
  <div>user</div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex'
window.$cancelRequest()
console.log(useStore().state.VX_TOKEN)
</script>


<style lang="less">
</style>
