<template>
  <div style="margin-top:20px;" class="centont">
    <div class="box" :style="'top:'+height1+'px;left:'+width1+'px;'">
      <div style="margin-top:10px;border-bottom:1px solid #ccc;">
        <el-button type="primary" link @click="close">关闭</el-button>
      </div>
      <div style="margin-top:10px;border-bottom:1px solid #ccc;">
        <el-button type="primary" link @click="closeOther">关闭其它</el-button>
      </div>
      <div style="margin-top:10px;">
        <el-button type="primary" link @click="closeAll">关闭所有</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
const props = defineProps(['widthOrHeight'])
const emit = defineEmits(['close', 'closeOther', 'closeAll'])

const width1 = ref(0)
const height1 = ref(0)

const widthCs = ref(210)
const heighCs = ref(145)

// console.log(props.widthOrHeight.offsetX);
// console.log(props.widthOrHeight.offsetY);

width1.value = props.widthOrHeight.offsetX - widthCs.value
height1.value = props.widthOrHeight.offsetY - heighCs.value

const close = () => {
  emit('close')
}
const closeOther = () => {
  emit('closeOther')
}
const closeAll = () => {
  emit('closeAll')
}
</script>

<style lang="scss">
.centont {
  position: relative;
  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    text-align: center;
    border: 1px solid #ccc;
    .btn {
      display: block;
    }
  }
}
</style>
