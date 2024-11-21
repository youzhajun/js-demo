function createAnimate(obj) {
  var from = obj.from
  var to = obj.to
  var totalMS = obj.totalMS || 1000 // 动画的持续时间
  var stepDuration = obj.stepDuration || 15 // 每隔多长时间移动一次
  var times = Math.floor(totalMS / stepDuration)
  var step = (to - from) / times // 每次变化的值
  var index = 0
  var timerId = setInterval(function () {
    from += step
    index++
    if (index >= times) {
      from = to // 变化完成
      clearInterval(timerId)
      obj.onEnd && obj.onEnd(from)
    }
    // 变化了就执行回调
    obj.onMove && obj.onMove(from)
  }, stepDuration)
}
