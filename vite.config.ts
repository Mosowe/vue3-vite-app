import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  // ElementPlusResolver,
  // AntDesignVueResolver,
  VantResolver,
  // HeadlessUiResolver,
  // ElementUiResolver
} from 'unplugin-vue-components/resolvers'
import styleImport, {
  // AndDesignVueResolve,
  VantResolve,
  // ElementPlusResolve,
  // NutuiResolve,
  // AntdResolve
} from 'vite-plugin-style-import'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: 'src/components.d.ts',
      // ui库解析器，也可以自定义，需要安装相关UI库
      resolvers: [
        VantResolver(),
        // ElementPlusResolver(),
        // AntDesignVueResolver(),
        // HeadlessUiResolver(),
        // ElementUiResolver()
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts'
    }),
    styleImport({
      resolves: [
        // AndDesignVueResolve(),
        VantResolve(),
        // ElementPlusResolve(),
        // NutuiResolve(),
        // AntdResolve()
      ],
      // 自定义规则
      // libs: [
      //   {
      //     libraryName: 'vant',
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `ant-design-vue/es/${name}/style/index`
      //     }
      //   }
      // ]
    })
  ],
  server: {
    host: '127.0.0.1',
    port: 5000
  },
  base:'./',
  resolve: {
    alias: {
      '@':path.resolve(__dirname, "src"),
      'components':path.resolve(__dirname, "src/components")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/global.less')}";`,
        },
      }
    },
    postcss: {
      plugins: [
        require("autoprefixer"),
        require("postcss-px-to-viewport")({
          viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
          viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
          unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw',     // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false       // 允许在媒体查询中转换`px`
        })
      ]
    }
  }
})
