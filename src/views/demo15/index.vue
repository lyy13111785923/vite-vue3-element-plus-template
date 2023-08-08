<template>
  <div class="demo12">
    <div>给定一个多叉树 tree 和一个节点的 ID id，编写一个函数 findNodeNameById，用于在多叉树中查找指定节点 ID 对应的节点名称。如果找到节点，则返回节点名称；如果未找到，则返回 null。</div>
    <hr>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
const tree = {
  name: "root",
  id: 1,
  children: [
    {
      name: "c1",
      id: 2,
      children: [
        {
          name: "c11",
          id: 3,
          children: [],
        },
        {
          name: "c12",
          id: 4,
          children: [],
        },
      ],
    },
    {
      name: "c2",
      id: 5,
      children: [
        {
          name: "c21",
          id: 6,
          children: [],
        },
        {
          name: "c22",
          id: 7,
          children: [],
        },
      ],
    },
  ],
};

let obj = {}
const findNodeNameById = (data, id) => {
  if (data.id === id) {
    obj[id] = data.name
  } else {
    for (let i = 0; i < data.children.length; i++) {
      const name = findNodeNameById(data.children[i], id)
      if (name) {
        break
      }
    }
  }
  return obj[id]
}

const findNodeNameById1 = (tree, id) => {
  const idToNameMap = {};
  const dfs = (node) => {
    idToNameMap[node.id] = node.name;
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        dfs(child);
      }
    }
  };
  dfs(tree);
  return idToNameMap[id] || null;
};

const nodeName = findNodeNameById(tree, 3);
console.log(nodeName); // 'c11'

</script>

<style lang='scss' scoped>
.demo12 {
}
</style>
