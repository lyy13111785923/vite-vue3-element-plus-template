<template>
  <div class="screen-container">
    <div class="screen-content" ref="screenRef">
      <span class="screen-title">基于scale的适配方案</span>
      <img class="screen-img" src="https://img2.baidu.com/it/u=1297807229,3828610143&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import windowResize from "../../utils/resize";
import { onMounted, onUnmounted } from "vue";

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize();

onMounted(() => {
  // 监听浏览器窗口尺寸变化
  windowDraw();
  calcRate();
});

onUnmounted(() => {
  unWindowDraw();
});
</script>

<style lang="scss" scoped>
.screen-container {
  height: 100%;
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;

  .screen-content {
    width: 1920px;
    height: 1080px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .screen-title {
      font-size: 32px;
    }

    .screen-img {
      margin-top: 20px;
    }
  }
}
</style>
