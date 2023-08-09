<template>
  <div class="demo17">
    <div> LRU算法(含有判断字段类型的方法js)</div>
    <div> 我们学习了 LRU 算法的基本概念和使用场景之后，那么我们就应该考虑如何实现它了。要想实现一个算法，我们很有必要梳理一下思路，这样才能让我们更好更快的编写出代码。</div>
    <div> 首先我们来梳理一下 LRU 算法的特点。</div>
    <div> 特点分析：</div>
    <ul>
      <li> 我们需要一块有限的存储空间，因为无限的化就没必要使用 LRU 算发删除数据了。</li>
      <li> 我们这块存储空间里面存储的数据需要是有序的，因为我们必须要顺序来删除数据，所以可以考虑使用 Array、Map 数据结构来存储，不能使用 Object，因为它是无序的。</li>
      <li>我们能够删除或者添加以及获取到这块存储空间中的指定数据。</li>
      <li>存储空间存满之后，在添加数据时，会自动删除时间最久远的那条数据。</li>
    </ul>
    <div>实现需求：</div>
    <ul>
      <li>实现一个 LRUCache 类型，用来充当存储空间</li>
      <li>采用 Map 数据结构存储数据，因为它的存取时间复杂度为 O(1)，数组为 O(n)</li>
      <li>实现 get 和 set 方法，用来获取和添加数据</li>
      <li> 我们的存储空间有长度限制，所以无需提供删除方法，存储满之后，自动删除最久远的那条数据</li>
      <li>当使用 get 获取数据后，该条数据需要更新到最前面</li>
      <li>现在我们已经把 LRU 算法的特点以及实现思路列了出来，那么接下来就然我们一起去实现它吧！</li>
    </ul>
    <div>LRUCache(5) 5长度,f12查看输出结果。</div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
class LRUCache {
  constructor(lenght) {
    this.length = lenght; // 存储长度
    this.data = new Map(); // 存储数据
  }
  // 存储数据，通过键值对的方式
  set(key, value) {
    const data = this.data;
    if (data.has(key)) {
      data.delete(key)
    }
    data.set(key, value);


    // 如果超出了容量，则需要删除最久的数据
    if (data.size > this.length) {
      console.log(data, data.keys(), data.keys().next());
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  // 获取数据
  get(key) {
    const data = this.data;
    // 未找到
    if (!data.has(key)) {
      return null;
    }
    const value = data.get(key); // 获取元素
    data.delete(key); // 删除元素
    data.set(key, value); // 重新插入元素
  }
}
const lruCache = new LRUCache(5);
lruCache.set('name', '小猪课堂');
lruCache.set('age', 22);
lruCache.set('sex', '男');
lruCache.set('height', 176);
lruCache.set('weight', '100');
lruCache.set('address', 'bjs');
lruCache.set('pos', '110');
console.log(lruCache);

</script>

<style lang='scss' scoped>
.demo17 {
  padding: 10px;
}
</style>
