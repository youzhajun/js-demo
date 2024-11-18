// ul 下静态结构如下：
// <li><span>Lorem.</span><a href="">删除</a></li>

// 监听input框中键盘按下事件，获取输入内容，如果为回车的话，取输入值，如果为空，不执行后续操作，如果为非空，则添加到ul中，并清空输入框

var input = document.querySelector('input')
console.log(input)
input.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') {
    return
  }
  var value = input.value
  addTask(value)
  input.value = ''
})

function addTask(value) {
  if (value.trim() === '') {
    return
  }
  var li = document.createElement('li')
  var span = document.createElement('span')
  var a = document.createElement('a')
  var ul = document.querySelector('ul')
  span.innerText = value

  a.addEventListener('click', function (e) {
    li.remove()
  })

  a.innerText = '删除'
  li.appendChild(span)
  li.appendChild(a)
  ul.append(li)
}
