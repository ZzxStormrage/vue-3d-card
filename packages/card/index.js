/*
 * @Author: zzx
 * @Date: 2020-05-27 15:36:52
 * @LastEditTime: 2020-08-24 11:09:55
 * @FilePath: /vue-3d-card/packages/card/index.js
 */
import vue3dCard from "./src/main.vue";

vue3dCard.install = function(Vue) {
  Vue.component(vue3dCard.name, vue3dCard);
};
export default vue3dCard;
