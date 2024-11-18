# 弹弹球 练习目标

页面绘制一个圆形，在浏览器页面来回弹跳移动

# 涉及到的 js 内容

1. js 定时器的定义及使用技巧

```
// 为了防止定时器重复执行，此处定义一个变量，调用定时器时判断该变量值
var timer = null
play()
// 定义定时器
function play() {
  if (!timer) {
    // 定时器会返回一个时间戳
    timer = setInterval(定时器执行函数, 20)
  } else {
    console.log('计时器已经在运行了')
  }
}

```

2. 随机颜色

```
function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8)
}
```
