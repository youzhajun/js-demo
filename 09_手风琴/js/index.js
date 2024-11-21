var menuArr = document.querySelectorAll('.menu li span.title')
for (let index = 0; index < menuArr.length; index++) {
  menuArr[index].onclick = function () {
    operationMenu(this.nextElementSibling)
  }
}

var liItemHeight = 25
// 展开方法
function open(doc) {
  // 展开之前先关闭已经展开的元素
  beforeOpenHandler()

  var liList = doc.children
  doc.setAttribute('status', 'playing')
  createAnimate({
    from: 0,
    to: liList.length * liItemHeight,
    totalMS: 1000,
    stepDuration: 15,
    onMove: function (value) {
      doc.style.height = value + 'px'
    },
    onEnd: function () {
      doc.setAttribute('status', 'open')
    }
  })
}
// 关闭方法
function close(doc) {
  var liList = doc.children
  doc.setAttribute('status', 'playing')
  createAnimate({
    from: liList.length * liItemHeight,
    to: 0,
    totalMS: 1000,
    stepDuration: 15,
    onMove: function (value) {
      doc.style.height = value + 'px'
    },
    onEnd: function () {
      doc.setAttribute('status', 'close')
    }
  })
}

function beforeOpenHandler() {
  // 获取已经打开的菜单
  var openUl = document.querySelector('ul[status=open]')
  openUl && close(openUl)
}

/**
 * 状态分为： close 已关闭，playing 打开中，
 * @param {元素} doc
 */
function operationMenu(doc) {
  // 获取状态
  var status = doc.getAttribute('status')
  if (!status || 'close' === status) {
    open(doc)
  }
  if ('open' === status) {
    close(doc)
  }
}
