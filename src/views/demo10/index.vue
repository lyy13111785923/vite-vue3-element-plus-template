<template>
  <div class="demo10">
    <div style="width:800px;border:1px solid #000;padding:10px;margin-left:50px;">
      <WordHighlighter :query="query" :htmlToHighlight="content" :split-by-space="options.splitBySpace" :case-sensitive="options.caseSensitive" highlight-style="color:#000;background:red;">
        <!-- {{content}} -->
      </WordHighlighter>
    </div>
  </div>
</template>

<script setup>
import WordHighlighter from "vue-word-highlighter";
import txt from './txt';
import { ref, reactive } from "vue";

const content = ref('')
content.value = txt

const query = ref('React  antd')
const options = reactive({
  caseSensitive: false,
  // 可以多个关键词用空格隔开
  splitBySpace: true,
});

</script>

<style>
</style>
