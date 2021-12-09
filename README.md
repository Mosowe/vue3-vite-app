vue3语法糖

基于移动端的配置，基于vite+vue3。

[vite官网](https://cn.vitejs.dev/guide/why.html)

优点：

> 1. 光速启动
> 2. 热模块替换
> 3. 按需编译

脚手架功能

> 1. vant3.0移动端组件UI库
> 2. axios网络数据交互
> 3. vuex状态管理
> 4. vue-router路由管理
> 5. postcss-px-to-viewport移动端px转vw/vh
> 6. less预编译
> 7. autoprefixer自动补全
> 8. typescript语法
> 9. window.$cancelRequest()取消请求
> 10. `新`template组件自动引入，无需import，不是template组件的需要手动引入，如：Toast
> 11. `新`自动导入vue3 HOOKS

其他

> 2021-12-08
> 
> - 新增unplugin-vue-components插件自动导入src/compnents组件，第三方vant，element等组件无需import，不是template组件的需要手动引入，如：Toast
> - 新增unplugin-auto-import插件自动导入vue3 HOOKS
> - 新增vite-plugin-style-import用于解决非template组件样式失效问题
> - 新增vue-global-api解决eslint报错

相关文档：[基于vite搭建一个vue移动端脚手架](https://blog.csdn.net/skyblacktoday/article/details/120886112)