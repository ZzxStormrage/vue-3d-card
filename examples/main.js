/*
 * @Author: zzx
 * @Date: 2020-05-27 15:36:52
 * @LastEditTime: 2020-07-23 19:21:38
 * @FilePath: /vue-3d-card/examples/main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import vue3dCard from '../packages/card/src/main.vue'

Vue.component("vue3dCard", vue3dCard);


new Vue({
  render: h => h(App),
}).$mount('#app')
