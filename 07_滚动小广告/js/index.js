;(function () {
  // 获取div
  var rightBox = document.querySelector('.container .right')
  var timerId = null
  // 总高度
  var allHeight = rightBox.scrollHeight
  // 单个高度
  var itemHeight = rightBox.offsetHeight
  function run() {
    timerId = setInterval(nextItem, 2000)
  }
  function nextItem() {
    var scrollTop = rightBox.scrollTop
    var offset = scrollTop + itemHeight
    if (offset >= allHeight) {
      offset = 0
    }
    rightBox.scrollTo({
      top: offset,
      left: 0,
      behavior: 'smooth'
    })
  }
  run()
})()
