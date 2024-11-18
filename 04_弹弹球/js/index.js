// 计时器

var timer = null
play()
// 定义定时器
function play() {
  if (!timer) {
    timer = setInterval(rectMove, 20)
  } else {
    console.log('计时器已经在运行了')
  }
}

// 获取窗口
var rect = document.querySelector('.rect')
var rectWidth = rect.offsetWidth,
  rectHeight = rect.offsetHeight,
  windowWidth = document.documentElement.clientWidth,
  windowHeight = document.documentElement.clientHeight,
  moveX = 5,
  moveH = 3

// 移动球球
function rectMove() {
  var left = rect.offsetLeft,
    top = rect.offsetTop,
    newLeft = left + moveX,
    newTop = top + moveH
  if (newLeft > windowWidth - rectWidth) {
    newLeft = windowWidth - rectWidth
    moveX = -moveX
    rect.style.backgroundColor = getRandomColor()
  }
  if (newTop > windowHeight - rectHeight) {
    newTop = windowHeight - rectHeight
    moveH = -moveH
    rect.style.backgroundColor = getRandomColor()
  }
  if (newLeft < 0) {
    newLeft = 0
    moveX = -moveX
    rect.style.backgroundColor = getRandomColor()
  }
  if (newTop < 0) {
    newTop = 0
    moveH = -moveH
    rect.style.backgroundColor = getRandomColor()
  }
  rect.style.left = newLeft + 'px'
  rect.style.top = newTop + 'px'
}

// 随机颜色
function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8)
}
