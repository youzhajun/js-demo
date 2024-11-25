# 轮播图无缝切换

核心思路：

1. html 结构设置最外层为溢出隐藏

   ```
   <div class="carousel">
       <div class="direction">
           <span class="left"><</span>
           <span class="right">></span>
       </div>
       <div class="img-div">
           <img src="./img/1381378.png" alt="" />
           <img src="./img/1381380.png" alt="" />
           <img src="./img/1381381.png" alt="" />
       </div>
       <div class="instruct">
           <span></span>
           <span class="checked"></span>
           <span></span>
       </div>
       </div>
   ```

2. 获取数据
3. init 设置图片容器宽度，宽度为 数据量\*单个宽度。设置图片容器内子元素内容与下标。其中实现无缝切换的关键在于图片列表中新增了第一张图片。
   ```
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
   ```
4. move(index) 核心方法
   ```
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
   ```
5. next(), prev() 上下翻页核心方法

   ```
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
   ```

## 涉及内容

1. 鼠标移入移出函数

   ```
    document.querySelector('.carousel').onmouseenter = stop
    document.querySelector('.carousel').onmouseleave = start
   ```
  