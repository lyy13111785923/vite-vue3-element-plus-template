<template>
  <div style="padding:20px;">
    <el-button type="primary" @click="showWatermark">显示水印</el-button>
    <el-button type="danger" @click="hidenWatermark">删除水印</el-button>
  </div>
</template>

<script setup>
import { getWatermark, setWatermark } from '@/utils/auth';
import watermark from '@/utils/watermark';

const showWatermark = () => {
  watermark.set('水印测试')
  setWatermark(true)
}
const hidenWatermark = () => {
  watermark.del('watermark.20221212')
  setWatermark(false)
}
</script>

<style>
</style>
