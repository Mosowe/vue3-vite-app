import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store';

const app = createApp(App)
// 时间格式化
Date.prototype.Format = function (fmt?: string) {
  if (!fmt) { 
    fmt = 'YYYY-MM-DD'
  }
  let o:any = {
      'M+': this.getMonth() + 1, // 月份 
      'D+': this.getDate(), // 日 
      'h+': this.getHours(), // 小时 
      'm+': this.getMinutes(), // 分 
      's+': this.getSeconds(), // 秒 
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度 
      'S': this.getMilliseconds() // 毫秒 
  };
  if (/([yY]+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  } 
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      let sk = RegExp.$1.length === 1? o[k] : ('00' + o[k]).substr(('' + o[k]).length);
      fmt = fmt.replace(RegExp.$1, sk);
    } 
  }
  return fmt;
};

app
  .use(store)
  .use(router)
  .mount('#app')
