var imgBox = document.querySelector('.carousel .img-div')
var instructBox = document.querySelector('.carousel .instruct')
var itemWidth = 400
var curIndex = 0
var isPlaying = false

/**
 * 1.获取数据
 * 2.清空box
 * 3.设置imgBox 宽度\ 元素, 设置instructBox 数量
 *
 */
function init() {
  if (!db) {
    // 无数据
    return
  }
  imgBox.innerHTML = ''
  instructBox.innerHTML = ''
  var imgLength = db.length
  imgBox.style.width = (imgLength + 1) * itemWidth + 'px'
  for (let index = 0; index < imgLength; index++) {
    var span = document.createElement('span')
    var img = document.createElement('img')
    imgBox.append(img)
    img.src = db[index]
    instructBox.append(span)
  }
  var img = document.createElement('img')
  imgBox.append(img)
  img.src = db[0]
  instructBox.children[0].className = 'checked'
}

/**
 * 移动元素
 * @param {下标} index
 */
function move(index, onEnd) {
  if (isPlaying || index == curIndex) {
    return
  }
  isPlaying = true
  var from = parseFloat(imgBox.style.marginLeft) || 0
  var to = -index * itemWidth
  createAnimate({
    from: from,
    to: to,
    totalMS: 1000,
    stepDuration: 15,
    onMove: function (n) {
      imgBox.style.marginLeft = n + 'px'
    },
    onEnd: function () {
      isPlaying = false
      curIndex = index
      setInstructChecked(index)
      onEnd && onEnd()
    }
  })
}

/**
 * 下一张
 */
function next() {
  var newIndex = curIndex + 1
  var onEnd
  if (newIndex === imgBox.children.length - 1) {
    // 最后一张
    onEnd = function () {
      imgBox.style.marginLeft = '0'
      setInstructChecked(0)
      curIndex = 0
    }
  }
  move(newIndex, onEnd)
}

/**
 * 上一张
 */
function prev() {
  var newIndex = curIndex - 1
  if (newIndex < 0) {
    var maxLength = imgBox.children.length - 1
    imgBox.style.marginLeft = -(maxLength * itemWidth) + 'px'
    newIndex = maxLength - 1
  }
  move(newIndex)
}

/**
 * 设置指示器状态
 * @param {索引} index
 */
function setInstructChecked(index) {
  var checked = document.querySelector('.carousel .instruct span.checked')
  checked.className = ''
  if (index > instructBox.children.length - 1) {
    index = instructBox.children.length - 1
  }
  if (index < 0) {
    index = 0
  }
  instructBox.children[index].className = 'checked'
}

init()

/**
 * 索引 点击切换
 */
for (var index = 0; index < instructBox.children.length; index++) {
  ;(function (index) {
    var item = instructBox.children[index]
    item.onclick = function () {
      move(index)
    }
  })(index)
}

/**
 * 左侧切换
 */
document.querySelector('.carousel .direction .left').onclick = function () {
  prev()
}
/**
 * 右侧切换
 */
document.querySelector('.carousel .direction .right').onclick = function () {
  next()
}

var timerId = null

/**
 * 开始
 * @returns
 */
function start() {
  if (timerId) {
    return
  }
  timerId = setInterval(function () {
    next()
  }, 2000)
}
/**
 * 结束
 */
function stop() {
  clearInterval(timerId)
  timerId = null
}
start()
/**
 * 鼠标移入事件
 */
document.querySelector('.carousel').onmouseenter = stop
document.querySelector('.carousel').onmouseleave = start
