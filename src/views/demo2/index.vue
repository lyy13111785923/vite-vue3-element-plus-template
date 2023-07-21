<template>
  <div>
    <div>
      <button @click="changeTheme($event)">黑夜</button>
      <button @click="changeMode($event)">javascript</button>
      <button @click="submitBtn($event)">保存代码</button>
    </div>
    <div style="width:50%;height:calc(100vh - 110px);display:inline-block;vertical-align:top;">
      <!-- @change="log('change', $event)"   @focus="log('change', $event)"   @ready="log('ready', $event)" -->
      <codemirror v-model="code" placeholder="编写javascript..." :style="style" :mode="mode" :spellcheck="spellcheck" :autofocus="autofocus" :indent-with-tab="indentWithTab" :tabSize="tabSize" :extensions="extensions" @blur="useEditedCode" />
    </div>
    <div style="background:#ccc;color:#000;width:50%;height:calc(100vh - 110px);display:inline-block;">
      <p style="text-align:center;font-size:22px;">显示代码</p>
      <pre style="font-size:18px;">{{ subCode }}</pre>
    </div>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";

import { oneDark } from "@codemirror/theme-one-dark";
// import "codemirror/addon/hint/show-hint.css";

import { reactive, ref, toRefs } from "vue";

export default {
  components: {
    Codemirror,
  },
  setup() {
    // 数据
    const code = ref(``);
    const subCode = ref(``);
    let selectValue = "javascript";
    let dateTime = "黑夜";
    const options = reactive({
      style: { width: "100%", height: "100%" },
      mode: "text/x-javascript",
      spellcheck: true,
      autofocus: true,
      indentWithTab: true,
      tabSize: 2,
      extensions: [javascript(), oneDark], //传递给CodeMirror EditorState。创建({扩展})
    });

    // 方法
    // 失去焦点时,使用已编辑的代码
    function useEditedCode() {
      // console.log("@@@blur@@@code:", code.value);
      // console.log("@@@blur@@@cpp:", cpp);
    }

    // 代码提交
    function submitBtn() {
      // console.log(code.value);
      subCode.value = code.value;
      console.log(subCode.value);
    }

    // 改变主题
    function changeTheme(e) {
      // console.log("options.extensions:", options.extensions);
      if (e.target.innerHTML === "黑夜") {
        options.extensions = [];
        dateTime = e.target.innerHTML = "白天";
      } else {
        options.extensions = [oneDark];
        dateTime = e.target.innerHTML = "黑夜";
      }
    }
    // 改变模式
    function changeMode(e) {
      return
      if (selectValue === "cpp") {
        if (dateTime === "黑夜") options.extensions = [javascript(), oneDark];
        else options.extensions = [javascript()];
        selectValue = "javascript";
        e.target.innerHTML = "javascript";
        options.mode = "text/x-javascript";
      } else {
        if (dateTime === "黑夜") options.extensions = [cpp(), oneDark];
        else options.extensions = [cpp()];
        selectValue = "cpp";
        e.target.innerHTML = "javascript";
        options.mode = "text/x-javascript";
      }
    }
    // 返回
    return {
      code,
      subCode,
      selectValue,
      dateTime,
      ...toRefs(options),
      log: console.log,
      useEditedCode,
      submitBtn,
      changeTheme,
      changeMode,
    };
  },
};
</script>
