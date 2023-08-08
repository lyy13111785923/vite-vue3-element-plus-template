<template>
  <div class="demo16">
    <div>IndexedDB</div>
    <el-button @click="btn1">存入</el-button>
    <el-button @click="btn2">读取</el-button>
    <el-button @click="btn3">删除</el-button>
    <el-button @click="btn4">清除</el-button>
    <el-button @click="btn5">获取离线仓库中的 key 的数量</el-button>
    <el-button @click="btn6">根据 key 的索引获取其名</el-button>
    <el-button @click="btn7">根据所有 keys 的索引获取其名</el-button>
    <el-button @click="btn8">迭代数据仓库中的所有 value/key 键值对</el-button>
    <el-button @click="btn9">创建并返回一个 localForage 的新实例</el-button>
  </div>
</template>

<script setup>
import localforage from 'localforage';
import { nextTick, ref } from 'vue';

const btn1 = () => {
  localforage.setItem('somekey', 'some value').then(function(value) {
    // 当值被存储后，可执行其他操作
    console.log('setItem', value);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

const btn2 = () => {
  localforage.getItem('somekey').then(function(value) {
    // 当离线仓库中的值被载入时，此处代码运行
    console.log('getItem', value);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

const btn3 = () => {
  localforage.removeItem('somekey').then(function() {
    // 当值被移除后，此处代码运行
    console.log('Key is cleared!');
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}


const btn4 = () => {
  localforage.clear().then(function() {
    // 当数据库被全部删除后，此处代码运行
    console.log('Database is now empty.');
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}


const btn5 = () => {
  localforage.length().then(function(numberOfKeys) {
    // 输出数据库的大小
    console.log(numberOfKeys);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

const btn6 = () => {
  localforage.key(0).then(function(keyName) {
    // key 名
    console.log(keyName);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

const btn7 = () => {
  localforage.keys().then(function(keys) {
    // 包含所有 key 名的数组
    console.log(keys);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

const btn8 = () => {
  // // 同样的代码，但使用 ES6 Promises, iterationNumber（类似索引）:1,2,3
  localforage.iterate(function(value, key, iterationNumber) {
    // 此回调函数将对所有 key/value 键值对运行
    console.log([key, value], iterationNumber);
  }).then(function() {
    console.log('Iteration has completed');
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });

  // 提前退出迭代：
  // localforage.iterate(function(value, key, iterationNumber) {
  //   if (iterationNumber < 2) {
  //     console.log([key, value]);
  //   } else {
  //     return [key, value];
  //   }
  // }).then(function(result) {
  //   console.log('Iteration has completed, last iterated pair:');
  //   console.log(result);
  // }).catch(function(err) {
  //   // 当出错时，此处代码运行
  //   console.log(err);
  // });
}

const btn9 = () => {
  var store = localforage.createInstance({
    name: "nameHere"
  });
  store.setItem("key", "value");
}

</script>

<style lang='scss' scoped>
.demo16 {
}
</style>
