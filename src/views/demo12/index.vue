<template>
  <div class="demo12">
    <div>要求实现 json2dom 方法，该方法接收一个 JavaScript 对象作为参数，该对象的结构如下：</div>
    <img src="./1.png" style="width:500px;" />
    <div>要求该函数返回结果是一个真实的 DOM，并且 DOM 的结构与给定的 JavaScript 对象相匹配。</div>
    <hr>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
const domtree = {
  tag: "div",
  props: {
    id: "myDiv",
    class: "container",
  },
  children: [
    "Hello,",
    {
      tag: "span",
      props: {
        style: "color: blue;",
      },
      children: ["World!"],
    },
  ],
};

const json2dom = (vnode) => {
  // const tag = document.createElement(data.tag)
  // tag.setAttribute('id', data.props.id)
  // tag.setAttribute('class', data.props.class)
  // tag.innerText = data.children[0]
  // const spanTag = document.createElement(data.children[1].tag)
  // spanTag.setAttribute('style', data.children[1].props.style)
  // spanTag.innerText = data.children[1].children[0]
  // tag.appendChild(spanTag)
  // return tag
  if (typeof vnode === "string") {
    // 处理文本节点
    return document.createTextNode(vnode);
  }
  const { tag, props, children } = vnode;
  const element = document.createElement(tag);
  // 设置属性
  if (props) {
    // for (const [key, value] of Object.entries(props)) {
    //   element.setAttribute(key, value);
    // }
    for (const key in props) {
      element.setAttribute(key, props[key]);
    }
  }
  // 处理子节点
  if (Array.isArray(children)) {
    for (const childVNode of children) {
      const childElement = json2dom(childVNode);
      element.appendChild(childElement);
    }
  }
  return element;
}

nextTick(() => {
  // 创建真实的DOM节点
  const realDOM = json2dom(domtree);
  // 将DOM节点添加到页面中
  const demo12 = document.querySelector('.demo12');
  demo12.appendChild(realDOM)
})
</script>

<style lang='scss' scoped>
.demo12 {
}
</style>
