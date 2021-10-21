<template>
  <h1>{{ msg }}</h1>
  <div @click="clickThis">1111</div>
  <Button type="primary">vant</Button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Button } from 'vant';
  defineProps<{ 
    msg: string,
    num?: number
  }>()
  // const emit= defineEmits(['click'])
  const emit= defineEmits<{
    (e: 'click', num: number): void
  }>()
  const clickThis = () => {
    emit('click',2)
  }

const count = ref(123456)
defineExpose({
  count
})
</script>

<style scoped lang="less">
h1{
  font-size: 32px;
  color: @mainColor;
  animation: 1s infinite;
}
</style>
