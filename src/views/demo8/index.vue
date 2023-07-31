<template>
  <div class="demo7" style="padding:20px;">
    <div>emit:{{count}}</div>
    <div>computed:{{com}}</div>
    <children :countVal="count" @countAdd="countAddClick"></children>
  </div>
</template>

<script setup>
import children from './components/children.vue';
import { computed, ref, watch } from "vue";

const count = ref(0)
const countAddClick = () => {
  count.value++
}

const com = computed(() => {
  console.log('computed', count.value);
  return count.value
})

watch(
  count,
  (newValue, oldValue) => {
    console.log('11值发生了变更', newValue, oldValue);
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss">
</style>
