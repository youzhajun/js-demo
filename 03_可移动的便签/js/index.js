var moveBar = document.querySelector('.top')
var container = document.querySelector('.container')
var rect = moveBar.getBoundingClientRect()
// 获取浏览器宽高
var h = document.documentElement.clientHeight,
  w = document.documentElement.clientWidth

moveBar.onmousedown = function (e) {
  // 记录鼠标按下的坐标值
  console.log(e)
  var mouseX = e.clientX,
    mouseY = e.clientY,
    moveBarX = rect.left,
    moveBarY = rect.top
  window.onmousemove = function (e) {
    var x = e.clientX - mouseX + moveBarX
    var y = e.clientY - mouseY + moveBarY
    // 防止溢出屏幕
    if (x < 0) {
      x = 0
    }
    if (y < 0) {
      y = 0
    }
    if (y > h - container.clientHeight) {
      y = h - container.clientHeight
    }
    if (x > w - container.clientWidth) {
      x = w - container.clientWidth
    }
    container.style.left = x + 'px'
    container.style.top = y + 'px'
  }
  window.onmouseup = function (e) {
    console.log('鼠标松开')
    window.onmousemove = null
    window.onmouseup = null
  }
}
