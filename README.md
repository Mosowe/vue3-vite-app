vue3语法糖

基于移动端的配置。

[vite官网](https://cn.vitejs.dev/guide/why.html)

优点：

> 1. 光速启动
> 2. 热模块替换
> 3. 按需编译

脚手架功能

>1. vant3.0移动端组件UI库
>2. axios网络数据交互
>3. vuex状态管理
>4. vue-router路由管理
>5. postcss-px-to-viewport移动端px转vw/vh
>6. less预编译
>7. autoprefixer自动补全
>8. typescript语法
>9. window.$cancelRequest()取消请求，再初始化即还没有axios请求数据前调用会报错。

## 环境变量、axios、px转vw/vh及浏览器前缀

参考vite-react

## 路由vue-router4.0

**安装**

`npm install vue-router@4`

**配置**

新建*src/router/router.ts*文件，内容如下：

```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { sessions } from '@/utils/utils'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',
    redirect: '/home'
  },
  { 
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home.vue'),// 懒加载
    meta: {
      showFooter: true, // 是否显示底部导航
      requireAuth: false, // 是否需要授权，即token
    }
  },
  { 
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about/about.vue'),
    meta: {
      showFooter: true,
      requireAuth: false,
    }
  },
  { 
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/pages/user/user.vue'),
    meta: {
      requireAuth: true,
    }
  },
  { 
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/login.vue'),
    meta: {
      requireAuth: false,
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !sessions.get('token')) { // 判断登录权限
    next({ path: '/login', query: {redirect:to.fullPath}});
  } else { 
    next()
  }
})

export default router;
```

## 状态管理vux4.0

**安装**

`npm install vuex@next --save`

**配置及使用**

新建`store/store.ts`：

```javascript
import { createStore } from 'vuex';

export default createStore({
  state: {
    VX_IS_LOGIN: false,
    VX_TOKEN: '',
  },
  mutations: {
    setToken(state, data) {
      state.VX_TOKEN = data
      state.VX_IS_LOGIN = data ? true : false
    }
  },
  actions: {
  },
  modules: {
  },
});
```

组合API：

```html
<template>
  <div>login</div>
  <Button type="primary" @click="login">登录</Button>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {useStore} from 'vuex' // 组合API函数
import {Button} from 'vant'
import { sessions } from '../../utils/utils'
let store = useStore()
let router = useRouter()

const login = () => {
  sessions.set('token',1122323)
  store.commit('setToken', 1122323) // 设置全局状态
  let page:any = router.currentRoute.value.query.redirect
  router.replace(page)
}
</script>


<style lang="less">
</style>
```



## UI组件vant@3

**安装**

`npm i vant@next -S  `

**使用**

在 `<script setup>` 中可以直接使用 Vant 组件，不需要进行组件注册。

```vue
<script setup>
  import { Button } from 'vant';
</script>

<template>
  <Button />
</template>
```

## Less

**安装less**

`npm install less less-loader --dev`

**使用**

```vue
<style scoped lang="less">
</style>
```

scoped：私有样式

**less全局变量**

新建src/global.less；

```less
@mainColor: #ff6600;
```

配置vite.config.ts

```typescript
const path = require("path");
export default defineConfig({
    css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            modifyVars: {
              hack: `true; @import (reference) "${path.resolve('src/global.less')}";`,
            },
          }
        },
     }
})
```

使用：

```vue
<style scoped lang="less">
h1{
  font-size: 32px;
  color: @mainColor;
}
</style>
```

