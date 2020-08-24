<!--
 * @Author: zzx
 * @Date: 2020-05-27 15:36:52
 * @LastEditTime: 2020-08-24 10:52:44
 * @FilePath: /vue-3d-card/packages/card/src/main.vue
--> 
<template>
  <div
    class="card"
    ref="card"
    @mousemove="move"
    @mouseleave="leave"
    @mouseover="over"
  >
    <div class="reflection" ref="refl"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vue3dCard',
  props: {
    // 角度的系数
    angle: {
      type: Number,
      default: 13
    },
    // hover 放大的系数
    scaleNumber: {
      type: Number,
      default: 1.1
    }
  },
  data: () => ({
    debounce: null
  }),
  computed: {},
  watch: {},
  methods: {
    over() {
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
    },
    leave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },

    move() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * this.angle}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * - this.angle}deg)`;
      card.style.transform = `perspective(500px) scale(${this.scaleNumber}) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, card.offsetWidth, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale: (val, inMin, inMax, outMin, outMax) =>
      outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin)
  }
};
</script>

<style scoped>
@import url("./style.css");
</style>
