<template>
  <div class="demo18">
    <div style="width:560px;">
      <div v-for="(item,index) in boxArr" :key="index" :class="'box box'+index" yesClick='false' @click="boxClick(index,item,$event)">
        <span v-if="boxShow[index]">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue';
let count = ref(0)
let boxArr = reactive([])
let boxShow = reactive([])
// 随机生成1-10的数组
function generateRandomArray(length, min, max) {
  var array = [];
  while (array.length < length) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (array.indexOf(randomNum) === -1) {
      array.push(randomNum);
    }
  }
  return array;
}

const arr1 = generateRandomArray(10, 1, 10)
const arr2 = generateRandomArray(10, 1, 10)
boxArr = arr1.concat(arr2)
// boxArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// console.log(boxArr);

boxArr.forEach((item, index) => {
  if ([99].includes(index)) {
    boxShow[index] = true
  } else {
    boxShow[index] = false
  }
})

let showArr = reactive([])
let showIndexArr = reactive([])
const boxClick = (index, data, e) => {
  if (e.target.getAttribute('yesClick') === 'true') return
  boxShow[index] = !boxShow[index]
  if (count.value < 2) {
    // 判断是否有重复卡片
    if (showArr.includes(data)) {
      showIndexArr.push(index)
      showIndexArr.forEach(item => {
        document.querySelector(`.box${item}`).style.background = '#fff'
        document.querySelector(`.box${item}`).setAttribute('yesClick', 'true')
        boxShow[item] = false
      })
      count.value = 0
      showArr = []
      showIndexArr = []
    } else {
      showArr.push(data)
      showIndexArr.push(index)
      count.value++
    }
  } else {
    boxArr.forEach((item, index) => {
      boxShow[index] = false
    })
    count.value = 0
    showArr = []
    showIndexArr = []
    return
  }
}


</script>

<style lang='scss' scoped>
.demo18 {
  padding: 10px;
  height: 1000px;
  background: #fff;
  .box {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    background: #ccc;
    vertical-align: bottom;
  }
}
</style>
