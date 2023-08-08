<!--
 * @Description: 文件内容描述
 * @Author: pangyawei
 * @Date: 2022-06-20 10:20:58
 * @LastEditTime: 2022-06-22 09:21:38
 * @LastEditors: xxx
-->
<template>
  <div>
    <div class="box-title">
      <div style="margin-left:20px">在线编辑器</div>
      <div style="margin-right:20px">
        <el-button type="primary" @click="runFn" size="small">运行</el-button>
      </div>
    </div>
    <div class="box-body">
      <div class="tree-box">
        <el-tree :data="dataList.data" :props="defaultProps" @node-click="handleNodeClick" style="height:100%;background-color:#444444" />
      </div>
      <div id="codeBox"></div>
      <div class="view-box">
        <div class="canvas-box">
          <iframe id="ifreamName" src="" frameborder="0" width="640px" height="500px" :srcdoc='dataList.contentHtml + "<script>" + dataList.contentValue + "</script>"'>
          </iframe>
        </div>
        <div class="console-box"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import res from '@/mock/demo2';
import * as monaco from 'monaco-editor'
import { onMounted, reactive, ref, toRaw } from 'vue'
const dataList = reactive({
  data: [],
  js: '',
  languageOption: [],
  javascriptVlaue: '',
  contentValue: '',
  contentHtml: '<!DOCTYPE html>' + '\n' +
    '<html lang="en">' + '\n' +
    '<body>' + '\n' +
    // '<div style="width:200px;height:200px;background:red;" id="boxId" onclick="boxClick()">点击' + '</div>' +
    '</body>' + '\n' +
    '</html>'
})
const editor = ref(null)

const defaultProps = {
  children: 'children',
  label: 'label',
}

//运行
const runFn = () => {
  dataList.contentValue = toRaw(editor.value).getValue()
  document.getElementById('ifreamName').contentWindow.location.reload(true);
}

const initEditor = () => {
  // 初始化编辑器，确保dom已经渲染
  editor.value = monaco.editor.create(document.getElementById('codeBox'), {
    theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
    value: dataList.contentValue, //编辑器初始显示文字
    readOnly: false,
    automaticLayout: true,
    language: "javascript",
    folding: true,  //代码折叠
    roundedSelection: false, // 右侧不显示编辑器预览框
    autoIndent: true // 自动缩进
    // language: 'javascript', //此处使用的python，其他语言支持自行查阅demo
    // selectOnLineNumbers: true,//显示行号
    // roundedSelection: false, // 右侧不显示编辑器预览框
    // readOnly: false, // 只读
    // cursorStyle: 'line', //光标样式
    // automaticLayout: true, //自动布局
    // glyphMargin: true, //字形边缘
    // useTabStops: false,
    // fontSize: 15, //字体大小
    // autoIndent: true, //自动布局
    // quickSuggestionsDelay: 100, //代码提示延时
  });



  // 监听值的变化
  editor.value.onDidChangeModelContent((val) => {
    console.log(val.changes[0].text)
    dataList.javascriptVlaue = toRaw(editor.value).getValue()
    console.log(toRaw(editor.value).getValue());    //获取输入的值
  })

  // 创建代码提醒
  monaco.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems: function(model, position) {
      // find out if we are completing a property in the 'dependencies' object.
      var textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      });
      var suggestions = [];
      var word = model.getWordUntilPosition(position);
      var range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      return { suggestions: suggestions };
    }
  });
}

function languageChange(val) {
  monaco.editor.setModelLanguage(this.monacoEditor.getModel(), val)
}


const getData = () => {
  // axios.get('./data.json').then((res) => {
  //   console.log(res);
  //   if (res.status == 200) {
  //     dataList.data =  res
  //     // dataList.contentValue = res.data.js
  //     // initEditor()
  //   }
  // })
  dataList.data = res
}

const handleNodeClick = (data) => {
  document.getElementById('codeBox').innerHTML = ''
  dataList.contentValue = data.js
  initEditor()
}


onMounted(() => {
  getData()
  initEditor()
  dataList.languageOption = monaco.languages.getLanguages()
})
</script>
<style lang="scss" scoped>
.box-title {
  height: 45px;
  line-height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(38, 38, 38);
  align-items: center;
  color: aquamarine;
}
.box-body {
  display: flex;
  height: calc(100% - 45px);
  .tree-box {
    width: 200px;
    height: 100%;
  }
  #codeBox {
    width: calc(100% - 840px);
    min-width: 500px;
    height: 100%;
    // background-color: #1a1a1a;
  }
  .view-box {
    width: calc(100% - 1000px);
    height: 100%;
    .canvas-box {
      width: 640px;
      height: 500px;
      background-color: rgb(190, 190, 190);
    }
    .console-box {
      width: 640px;
      height: calc(100% - 500px);
      background-color: rgb(81, 81, 81);
    }
  }
}
:deep(.el-tree) {
  --el-tree-node-hover-bg-color: #a1a1a1;
  --el-tree-text-color: #ffffff;
}
</style>
