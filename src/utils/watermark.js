let watermark = {}
let setWatermark = (str) => {
    let id = 'watermark.20221212'
    if (document.getElementById(id) !== null) {
        document.body.removeChild(document.getElementById(id))
    }
    let can = document.createElement('canvas')
    can.width = 500
    can.height = 250
    let cans = can.getContext('2d')
    cans.rotate(-20 * Math.PI / 180)
    cans.font = '14px Microsoft JhengHei'
    cans.fillStyle = '#dddddd'
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
    cans.fillText(str, can.width / 3, can.height / 2)
    let div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '70px'
    div.style.left = '0px'
    div.style.position = 'fixed'
    div.style.zIndex = '100000'
    div.style.width = document.documentElement.clientWidth - 50 + 'px'
    div.style.height = document.documentElement.clientHeight - 100 + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    document.body.appendChild(div)
    return id
}
let delWatermark = (id) => {
  // 获取要删除的元素的引用
  const elementToDelete = document.getElementById(id);

  // 检查元素是否存在
  if (elementToDelete) {
    // 删除元素
    elementToDelete.parentNode.removeChild(elementToDelete);
  }
}
/**
 * 添加水印]
 * 该方法只允许调用一次
 * @param {*} str 水印名
 * @returns 
 */
watermark.set = (str) => {
    let id = setWatermark(str)
    if (document.getElementById(id) === null) {
      id = setWatermark(str)
    }

    window.onresize = () => {
        setWatermark(str)
    }
}
watermark.del = (id) => {
   if (document.getElementById(id) != null) {
      delWatermark(id)
   } 

    window.onresize = () => {
      delWatermark(id)
    }
}
export default watermark
