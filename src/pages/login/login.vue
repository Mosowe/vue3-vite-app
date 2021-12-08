<template>
  <div>login</div>
  <van-button type="primary" @click="login">登录</van-button>
</template>

<script setup lang="ts">
import { sessions } from '@/utils/utils'
let store = useStore()
let router = useRouter()

const login = () => {
  sessions.set('token',1122323)
  store.commit('setToken', 1122323)
  let page:any = router.currentRoute.value.query.redirect
  router.replace(page)
}
</script>


<style lang="less">
</style>
