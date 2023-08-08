<template>
  <div class="demo12">
    <div>要求实现 dom2json 方法，该方法接收一个真实的 DOM 节点作为参数，将其转换为一个 JavaScript 对象表示的虚拟 DOM 树。</div>
    <img src="./1.png" style="width:500px;" />
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
const dom2json = (vnode) => {
  const element = {}
  const { tagName } = vnode
  element.tag = tagName
  if (vnode.attributes?.length > 0) {
    element.props = {}
    for (const attr of vnode.attributes) {
      // console.log(attr, attr.name, attr.value);
      element.props[attr.name] = attr.value;
    }
  }
  // 处理子节点
  const childNodes = Array.from(vnode.childNodes);
  const filteredChildNodes = childNodes.filter((childNode) => {
    return (
      childNode.nodeType === 1 || // 元素节点
      (childNode.nodeType === 3 && childNode.textContent.trim() !== "") // 非空白文本节点
    );
  });
  if (filteredChildNodes.length > 0) {
    element.children = filteredChildNodes.map((childNode) => {
      return dom2json(childNode);
    });
  }

  return element;
}

nextTick(() => {
  const node = document.getElementById("appDemo");
  const res = dom2json(node);
  console.log(res); // json
})
</script>

<style lang='scss' scoped>
.demo12 {
}
</style>
