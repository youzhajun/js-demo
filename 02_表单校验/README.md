# 表单校验练习目标

# 涉及到的 js 内容

1. 阻止浏览器默认事件

```
e.preventDefault()
```

2. DOM 事件

```
pwd.addEventListener('input', function(){})   // input 事件
```

3. css 选择器优先级，提示信息

```css
.container form .form-item p {
  margin-top: 5px;
  font-size: 10px;
  color: red;
  margin-left: 5px;
  margin-bottom: 10px;
  visibility: hidden;
}
.container form .form-item.err p {
  visibility: visible;
}
```
