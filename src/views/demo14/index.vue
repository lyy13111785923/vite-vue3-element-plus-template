<template>
  <div class="demo12">
    <div>dfs 该方法是以纵向的维度对dom树进行遍历，从一个dom节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后在遍历它的兄弟节点。即如图所示（遍历顺序为红字锁标）：</div>
    <img src="./1.png" style="width:500px;" />
    <div>bfs 该方法是以横向的维度对dom树进行遍历，从该节点的第一个子节点开始，遍历其所有的兄弟节点，再遍历第一个节点的子节点，完成该遍历之后，暂时不深入，开始遍历其兄弟节点的子节点。即如图所示（遍历顺序为红字锁标）：</div>
    <img src="./2.png" style="width:500px;" />
    <hr>
    <div id="appDemo">
      <span>
        <a></a>
      </span>
      <span>
        <a demo="123"></a>
        <a></a>
      </span>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
// dfs
function deepFirstSearch(node, nodeList) {
  if (node) {
    nodeList.push(node);
    var children = node.children;
    for (var i = 0; i < children.length; i++)
      //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
      deepFirstSearch(children[i], nodeList);
  }
  return nodeList;
}


// bfs
function breadthFirstSearch(node) {
  var nodes = [];
  var i = 0;
  if (!(node == null)) {
    nodes.push(node);
    breadthFirstSearch(node.nextElementSibling);
    node = nodes[i++];
    breadthFirstSearch(node.firstElementChild);
  }
  return nodes;
}

nextTick(() => {
  // dfs
  let root = document.getElementById('appDemo')
  console.log(deepFirstSearch(root, []));
  // bfs
  let root1 = document.getElementById('appDemo')
  console.log(breadthFirstSearch(root1));
})

</script>

<style lang='scss' scoped>
.demo12 {
}
</style>
