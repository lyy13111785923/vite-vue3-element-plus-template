<template>
  <div class="demo7" style="padding:20px;" @click="handleContextMenuClose">
    <div v-if="tagFlag">
      <el-tag v-for="(item,index) in arr" :key="index" style="margin-right:20px;" :id="index" @contextmenu.prevent="handleContextMenu">Tag {{item}}</el-tag>
    </div>
    <rightMenu v-if="menuFlag" :widthOrHeight="widthOrHeight" @close="remove" @closeOther="removeOther" @closeAll="removeAll"></rightMenu>
  </div>
</template>

<script setup>
import rightMenu from './components/rightMenu.vue';
import { ref } from 'vue';
const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const menuFlag = ref(false)
const tagFlag = ref(true)

const count = ref(0)
const widthOrHeight = ref({})
const timer = ref()

const remove = () => {
  tagFlag.value = false
  arr.value.splice(count.value, 1)
  tagFlag.value = true
}
const removeOther = () => {
  tagFlag.value = false
  arr.value = arr.value.filter((item, index) => index == count.value)
  tagFlag.value = true
}
const removeAll = () => {
  tagFlag.value = false
  arr.value = []
  tagFlag.value = true
}
// 右键 
const handleContextMenu = (event) => {
  event.preventDefault();
  menuFlag.value = false
  timer.value = setTimeout(() => {
    menuFlag.value = true
    count.value = event.target.parentNode.getAttribute('id')
    widthOrHeight.value.offsetX = event.clientX
    widthOrHeight.value.offsetY = event.clientY
  }, 100);
}
// 点空白关闭
const handleContextMenuClose = (event) => {
  event.preventDefault();
  menuFlag.value = false
  timer.value ? clearTimeout(timer.value) : null
  // console.log(event.offsetX, event.offsetY);
}
</script>

<style lang="scss">
.demo7 {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
