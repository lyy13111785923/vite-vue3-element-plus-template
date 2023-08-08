<template>
  <div>
    <div>
      <button @click="changeTheme($event)">黑夜</button>
      <button @click="changeMode($event)">javascript</button>
      <button @click="submitBtn($event)">保存代码</button>
      <button @click="workingBtn($event)">运行</button>
    </div>
    <div style="width:50%;height:calc(100vh - 110px);display:inline-block;vertical-align:top;">
      <!-- @change="log('change', $event)"   @focus="log('change', $event)"   @ready="log('ready', $event)" -->
      <codemirror v-model="code" placeholder="编写javascript..." :style="style" :mode="mode" :spellcheck="spellcheck" :autofocus="autofocus" :indent-with-tab="indentWithTab" :tabSize="tabSize" :extensions="extensions" @blur="useEditedCode" />
    </div>
    <div style="background:#ccc;color:#000;width:50%;height:calc(100vh - 110px);display:inline-block;">
      <p style="text-align:center;font-size:22px;">显示代码</p>
      <pre style="font-size:18px;height:200px;overflow-y:auto;">{{ subCode }}</pre>
      <p style="text-align:center;font-size:22px;">显示结果</p>
      <pre style="font-size:18px;" id="subRes">{{ subresCode }}</pre>
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
    const code = ref(`function (){
      
    //return 你要输出的结果
    return 
}`);
    const subCode = ref(``);
    const subresCode = ref(``);
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
      subCode.value = code.value
    }


    // 运行代码
    function workingBtn() {
      let arr = `
        var outputFun = ${code.value}
        var output=outputFun()
        var res=''
        if(output instanceof Array){
           // res='['+output+']'
            res+='['
            for(var i=0;i<output.length;i++){
              if(output[i] instanceof Object){
                res+='<br/>'+'{'+'<br/>'
                for(var j in output[i]){
                  res+=j+':'+output[i][j]+'<br/>'
                }
                res+='}'+'<br/>'
              }else{
                res+=output[i]
              }
              if(i!=output.length-1) res+=','
            }
            res+=']'
        }else if(output instanceof Object){
            res+='{'+'<br/>'
            for(var i in output){
              if(output[i] instanceof Array){
                res+=i
                res+=':['
                for(var z=0;z<output[i].length;z++){
                  res+=output[i][z]
                  if(z!=output[i].length-1) res+=','
                }
                res+='],'+'<br/>'
              }else{
                res+=i+':'+output[i]+',<br/>'
              }
            }
            res+='}'
        }else if(output instanceof Number){
            res=output
        }else{
            res=output
        }
        document.getElementById('subRes').innerHTML = res
      `
      let scriptElement = document.createElement('script');
      scriptElement.textContent = arr;
      document.head.appendChild(scriptElement);
      setTimeout(() => {
        document.head.removeChild(scriptElement);
      }, 5000);
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
      subresCode,
      selectValue,
      dateTime,
      ...toRefs(options),
      log: console.log,
      useEditedCode,
      submitBtn,
      workingBtn,
      changeTheme,
      changeMode,
    };
  },
};
</script>
