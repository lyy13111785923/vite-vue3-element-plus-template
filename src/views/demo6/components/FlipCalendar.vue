<template>
  <div class="container" v-on:animationiteration="pauseAnimation">
    <FlipCard :now="nowHour" :next="nextHour" :isPaused="hourPaused" />
    <div class="split">:</div>
    <FlipCard :now="nowMinute" :next="nextMinute" :isPaused="minutePaused" />
    <div class="split">:</div>
    <FlipCard :now="nowSecond" :next="nextSecond" :isPaused="secondPaused" :isSecond="true" />
  </div>
</template>

<script setup>
import FlipCard from './FlipCard.vue';
import { ref } from "vue";

const nowSecond = ref(0)
const nextSecond = ref(1)
const nowMinute = ref(0)
const nextMinute = ref(1)
const nowHour = ref(0)
const nextHour = ref(1)
const secondPaused = ref(true)
const minutePaused = ref(true)
const hourPaused = ref(true)
const init = ref(true)

const zeroFormat = (num) => {
  return num >= 10 ? num : '0' + num;
}
const startAnimation = () => {
  var now = new Date();
  var next = new Date(now.getTime() + 1000);
  nowSecond.value = zeroFormat(now.getSeconds());
  nextSecond.value = zeroFormat(next.getSeconds());
  if (next.getMinutes() !== now.getMinutes()) {
    minutePaused.value = false
  }
  if (next.getHours() !== now.getHours()) {
    hourPaused.value = false
  }
  if (init.value) {
    nowMinute.value = zeroFormat(now.getMinutes());
    nextMinute.value = zeroFormat(next.getMinutes());
    nowHour.value = zeroFormat(now.getHours());
    nextHour.value = zeroFormat(next.getHours());
    init.value = false
  }
}
const pauseAnimation = (e) => {
  if (e.target.classList.contains('second')) {
    startAnimation()
  } else {
    var now = new Date()
    nowMinute.value = zeroFormat(now.getMinutes());
    nextMinute.value = zeroFormat(nowMinute === 59 ? '00' : Number(nowMinute) + 1);
    nowHour.value = zeroFormat(now.getHours());
    nextHour.value = zeroFormat(nowHour === 23 ? '00' : Number(nowHour) + 1);
    minutePaused.value = true;
    hourPaused.value = true;
  }
}

startAnimation()

</script>
<style scoped>
.container {
  width: 708px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.split {
  font-size: 5em;
}
</style>
