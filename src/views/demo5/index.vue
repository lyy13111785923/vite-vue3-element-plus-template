<template>
  <div class="demo5" style="padding:20px;">
    <div>
      <table>
        <tr>
          <td class="bgColor"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style="text-align:center;">
            <el-button type="primary" @click="randomFun">随机</el-button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
let count = Math.floor(Math.random() * 9);

const randomFun = () => {
  for (let index = 0; index < 50; index++) {
    let timer = setTimeout(() => {
      count = Math.floor(Math.random() * 9);
      showTdClass()
      timer ? clearTimeout(timer) : null
    }, 100 * index);
  }
}

const showTdClass = () => {
  if (count == 4) {
    return
  }
  let tds = document.querySelectorAll('td')
  for (let index = 0; index < tds.length; index++) {
    tds[index].classList.remove('bgColor')
  }
  tds[count].classList.add('bgColor')
}

nextTick(() => {
  showTdClass()
})

</script>

<style lang="sass">
.demo5
  table
    border-collapse: collapse
    border: 1px solid #000
    margin-top: 10px
    td
      border: 1px solid #000
      width: 100px
      height: 100px
    .bgColor
      background-color: #ccc
</style>
