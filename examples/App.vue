<!--
 * @Author: zzx
 * @Date: 2020-05-27 15:36:52
 * @LastEditTime: 2020-08-24 10:24:12
 * @FilePath: /vue-3d-card/examples/App.vue
--> 
<template>
  <div id="app">
    <h1>测试</h1>
    <!-- <button @click="alertMsg()" style="margin-left: 80%">弹出消息</button> -->
    <vue3dCard>
      <img src="./WechatIMG1277.jpeg">
    </vue3dCard>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
#app .card {
  margin: 0 auto;
  height: 380px;
}
</style>
