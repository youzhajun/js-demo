# 手风琴效果

目标：抽取创建动画化的函数，实现手风琴效果

## 涉及到的内容

1. css 属性选择器

```
ul[status=open]
```

2. js 中设置 html 元素自定义属性

```
document.setAttribute('属性名', '属性值')
document.getAttribute('status')
```

3. 抽取动画函数，实现动态持续某段时间从某个值匀速到达某个值

```
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

```
