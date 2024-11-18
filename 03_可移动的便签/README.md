# 可移动便签 练习目标

# 涉及到的内容

1. DOM 事件监听
   事件监听有两种方式

```
元素.addEventListener('事件名', 监听函数)
```

或

```
元素.on事件名 = 监听函数
```

当想要灵活的控制元素的事件是否存在时,建议采用第二种方式,否则建议都采用第一种方式

2.  DOM 尺寸

    ![img](./img/1731921079795.jpg 'note')

    2.1 获取元素的宽高

        ```
            var w = document.clientWidth
            var h = document.clientHeight
        ```

    2.2 获取浏览器内容区的宽高

    ```
    var h = document.documentElement.clientHeight,
        w = document.documentElement.clientWidth
    ```

    2.3 获取元素距离浏览器内容区的 x,y 坐标

    ```
    var x = 元素.getBoundingClientRect().left
    var y = 元素.getBoundingClientRect().top
    ```

3.  元素内容可修改 css 属性: contenteditable="true"
