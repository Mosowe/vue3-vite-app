<template>
  <div>login</div>
  <Button type="primary" @click="login">登录</Button>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {Button} from 'vant'
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
