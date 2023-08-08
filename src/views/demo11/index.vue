<template>
  <div class="demo11">
    <div class="box">
      <div style="width:200px;height:200px;z-index:99;">
        <div v-for="(item,index) in 20" :key="index" class="bgboxFath">
          <div v-for="(item,index) in 20" :key="index" class="bgbox" @mousedown="mousedownFun" @mousemove="mousemoveFun" @mouseup="mouseupFun"></div>
        </div>
      </div>
      <div class="zhongjiang" style="text-align: center;">
        中奖概率1%
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const flag = ref(false)

const mousedownFun = (e) => {
  flag.value = true
}

const mousemoveFun = (e) => {
  if (flag.value) {
    console.log(e.currentTarget);
    e.currentTarget.style.opacity = 0
  }
}

const mouseupFun = (e) => {
  flag.value = false
}

</script>

<style lang='scss' scoped>
.demo11 {
  margin: 20px 0 0 20px;
  .box {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    // line-height: 200px;
    box-sizing: content-box;
    .bgboxFath {
      width: 200px;
      height: 10px;
      .bgbox {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #ccc;
      }
    }
    .bgboxFath:nth-child(1) {
      margin-top: -5px;
    }
    .zhongjiang {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      line-height: 200px;
      font-size: 20px;
      z-index: -1;
    }
  }
}
</style>
