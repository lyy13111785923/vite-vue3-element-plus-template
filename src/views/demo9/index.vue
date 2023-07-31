<template>
  <div class="demo9" style="padding:20px;text-align:center;" @click="stickClick">
    <div style="color:#fff;">分数:{{count}}</div>
    <!-- <img class="img" @click="stickClick" src="./images/muyu.png" style="width:260px;height:200px;" /> -->
    <!-- <div class="img" @click="stickClick" style="width:200px;height:200px;border:1px solid red;"> </div> -->
    <div class="stick">
      <div class="stick1"></div>
      <div class="stick2"></div>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup>
import children from './components/children.vue';
import { nextTick, ref } from "vue";
const count = ref(0)

const stickClick = () => {
  count.value++;
  const stick = document.querySelector('.stick');
  stick.classList.add('stickAnimation');
  setTimeout(() => {
    stick.classList.remove('stickAnimation');
  }, 300);
}

const widthCs = ref(210)
const heighCs = ref(145)

nextTick(() => {
  // 获取Canvas元素
  var canvas = document.getElementById('canvas');
  // 设置Canvas的宽度和高度
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 获取绘图上下文
  var ctx = canvas.getContext('2d');
  // 设置粒子数组
  var particles = [];
  // 鼠标点击事件监听
  canvas.addEventListener('mousedown', function(event) {
    // 获取鼠标点击位置
    var mouseX = event.clientX - widthCs.value;
    var mouseY = event.clientY - heighCs.value;
    // 设置起点
    var startX = mouseX;
    var startY = mouseY;
    // 生成烟花粒子
    var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    var numParticles = 50;
    for (var i = 0; i < numParticles; i++) {
      particles.push({
        x: startX,
        y: startY,
        size: Math.floor(Math.random() * 4) + 1,
        speed: Math.floor(Math.random() * 10) + 1,
        angle: Math.floor(Math.random() * 360),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    // 绘制烟花效果
    var numFrames = 50;
    var currentFrame = 0;
    function draw() {
      // 清除Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 绘制粒子
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var radians = p.angle * Math.PI / 180;
        var vx = Math.cos(radians) * p.speed;
        var vy = Math.sin(radians) * p.speed;
        p.x += vx;
        p.y += vy;
        p.size -= 0.1;
        if (p.size <= 0) {
          particles.splice(i, 1);
        }
        else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }
      // 更新帧计数器
      currentFrame++;
      // 判断是否达到总帧数
      if (currentFrame < numFrames) {
        requestAnimationFrame(draw);
      }
    }
    draw();
  });
})

</script>

<style lang="scss">
.demo9 {
  width: 100%;
  height: calc(100vh - 80px);
  // background: #000;
  background: url("./images/bg.png") no-repeat;
  background-size: cover;
  position: relative;
  .img {
    position: absolute;
    top: 300px;
    left: 700px;
  }
  .stick {
    position: absolute;
    top: 310px;
    left: 600px;
    width: 200px;
    // height: 20px;
    // background: #fff;
    .stick1 {
      width: calc(100% - 50px);
      height: 10px;
      background: #fff;
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 0;
    }
    .stick2 {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: #fff;
      display: inline-block;
      position: absolute;
      top: -10px;
      right: 0;
    }
    transform: rotate(-45deg);
  }
  .stickAnimation {
    animation: flip1 0.3s;
  }
  // .stick:hover {
  //   animation: flip1 0.5s;
  // }
  @keyframes flip1 {
    to {
      transform: rotate(45deg);
    }
  }
}
</style>
