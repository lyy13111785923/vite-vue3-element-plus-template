<template>
  <div>
    <div class="container" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
      <div v-for="(box, index) in boxes" :key="index" class="box" :style="{ marginLeft: index % 5 === 0 ? '20px' : '0' }" :class="{ selected: box.selected }" @mouseenter="handleMouseEnter(index)">
        {{ index + 1 }}
      </div>
    </div>
    <div ref="movableDom" :style="{ '--top': point.top+'px','--left': point.left+'px','--width': point.width+'px','--height': point.height+'px' }" class="move"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [],
      selecting: false,
      startX: null,
      startY: null,
      endX: null,
      endY: null,
      point: {
        startX: 0,
        startY: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }
    };
  },
  mounted() {
    // 初始化30个盒子
    for (let i = 0; i < 30; i++) {
      this.boxes.push({ selected: false });
    }
  },
  methods: {
    handleMouseDown(event) {
      event.preventDefault();
      this.selecting = true;

      // console.log(event);
      this.point.top = event.clientY;
      this.point.left = event.clientX;
      this.point.startX = event.x;
      this.point.startY = event.y;

      this.startX = event.clientX;
      this.startY = event.clientY;
      this.endX = event.clientX;
      this.endY = event.clientY;
      this.updateSelection();
    },
    handleMouseMove(event) {
      event.preventDefault();
      if (this.selecting) {

        this.point.width = Math.abs(event.x - this.point.startX);
        this.point.height = Math.abs(event.y - this.point.startY);


        this.endX = event.clientX;
        this.endY = event.clientY;
        this.updateSelection();
      }
    },
    handleMouseUp(event) {
      event.preventDefault();

      this.point.width = 0;
      this.point.height = 0;
      this.point.top = 0;
      this.point.left = 0;
      this.point.startX = 0;
      this.point.startY = 0;

      this.selecting = false;
    },
    handleMouseEnter(index) {
      if (this.selecting) {
        // 鼠标在移动时，即使不点击盒子也触发更新
        this.updateSelection();
      }
    },
    updateSelection() {
      this.$nextTick(() => { // 使用$nextTick确保元素渲染完毕
        const container = document.querySelector(".container");
        const rect = container.getBoundingClientRect();
        const left = Math.min(this.startX, this.endX) - rect.left;
        const top = Math.min(this.startY, this.endY) - rect.top;
        const width = Math.abs(this.endX - this.startX);
        const height = Math.abs(this.endY - this.startY);

        for (let i = 0; i < this.boxes.length; i++) {
          const box = this.boxes[i];
          const boxRect = container.children[i].getBoundingClientRect();
          const boxLeft = boxRect.left - rect.left;
          const boxTop = boxRect.top - rect.top;

          if (
            boxLeft + boxRect.width >= left &&
            boxLeft <= left + width &&
            boxTop + boxRect.height >= top &&
            boxTop <= top + height
          ) {
            box.selected = true;
          } else {
            box.selected = false;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  border: 1px solid #ccc;
}

.move {
  position: fixed;
  top: var(--top);
  left: var(--left);
  width: var(--width);
  height: var(--height);
  background: rgba(234, 23, 135, 0.3);
}

.box {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  user-select: none; /* 防止文本被选中 */
}

.selected {
  background-color: lightblue;
}
</style>
