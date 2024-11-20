# 滚动小广告

应用场景：小广告、轮播等
技巧：

1. 利用 css 中元素定高, 设置 overflow:hidden;隐藏滚动条
2. 利用 js 中的 <a href='https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo#behavior'>scroll()</a> 属性控制滚动:

   ```
    element.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
    });
    // smooth 表示平滑滚动并产生过渡效果、instant 表示滚动会直接跳转到目标位置，没有过渡效果。auto 或缺省值表示浏览器会自动选择滚动时的过渡效果。
   ```
