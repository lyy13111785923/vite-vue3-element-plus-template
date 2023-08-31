<template>
  <div>
    <div class="box1">
      <span class="cursor"></span>
    </div>
    <el-button class="btn" @click="addText">添加文字</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomTextArr: ["萨嘎", '三', "agas", '大厦', '阿萨法施工', 'saf', '啊', '收到', '三个哈哈哈', '阿事实上事实上事实上', '事实上事实上少时诵诗书', '叫哦大家搜狗号度搜化工三打哈干撒的很尬山东干红手打很尬搜哈', '时间几节课MVvvvvvvvvvv啪啪啪啪啪啪PPT科技我IQ和瓦暖气，你', '撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊就你跟贵公司懂法守法收入与武器我先把发发花洒就你跟贵公司懂法守法收入与武器我先把发发花洒'],
      showText: '',
      addTextArr: [],
      timer: null,
    }
  },
  methods: {
    addText() {
      this.getRandomText();
      this.updateText();
    },

    getRandomText() {
      const randomTextArrLength = this.randomTextArr.length;
      let addText = this.randomTextArr[Math.floor(Math.random() * randomTextArrLength)];
      this.addTextArr.push(addText);
      console.log(addText)
    },

    updateText() {
      let index = 0;
      const box1 = document.querySelector('.box1')
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.addTextArr.length > 0) {
            if (index < this.addTextArr[0].length) {
              box1.innerHTML = this.showText + this.addTextArr[0][index] + `<span class="cursor"></span>`;
              this.showText += this.addTextArr[0][index];
              index++;
            } else {
              index = 0;
              box1.innerHTML = this.showText;
              this.addTextArr.shift();
            }
          } else {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 30)
      }
    }
  }
}
</script>

<style scoped>
.cursor {
  position: absolute;
  display: inline-block;
  width: 2px;
  height: 16px;
  background-color: #000;
  animation: blink 1s infinite;
  transform: translate(2px, 3px);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.box1 {
  line-height: 22px;
  width: 300px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid pink;
  margin-bottom: 10px;
  min-height: 100px;
}
</style>
