<template>
  <div>
    <div>
      props:{{props.countVal}}
    </div>
    <el-button type="primary" @click="add">emit添加</el-button>
    <div>
      {{val}}
    </div>
    <div>
      {{val2}}
    </div>
    <el-button type="primary" @click="valClick">添加</el-button>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
const emit = defineEmits(['countAdd'])
const props = defineProps(['countVal'])
const add = () => {
  emit('countAdd')
}
const val = ref(100)
const val2 = ref(200)
const valClick = () => {
  val.value++
  val2.value++
}
watch(
  [val, val2],
  (newValue, oldValue) => {
    console.log('值发生了变更', newValue, oldValue);
  },
  { deep: true, immediate: true }
);
</script>

<style>
</style>
