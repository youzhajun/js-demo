// 注册事件
var userName = document.querySelector('#userName')
userName.addEventListener('input', userNameValidation)

var pwd = document.querySelector('#pwd')
pwd.addEventListener('input', pwdValidation)

var form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  console.log(formValidation())
  if (formValidation()) {
    console.log('请求后端')
  } else {
    e.preventDefault()
  }
})

// 校验用户名
function userNameValidation() {
  var userName = document.querySelector('#userName')
  var userNameValue = userName.value
  var errMsg = ''
  if (userNameValue.trim() === '') {
    errMsg = '用户名不能为空'
  }
  if (userNameValue.length < 6) {
    errMsg = '用户名长度不够'
  }
  if (userNameValue.length > 12) {
    errMsg = '用户名长度过长'
  }

  var nameBox = document.querySelector('#name-box')
  var msgBox = document.querySelector('#name-box p')
  msgBox.innerText = errMsg
  nameBox.className = errMsg ? 'form-item err' : 'form-item'
  return errMsg ? false : true
}

function pwdValidation() {
  var pwd = document.querySelector('#pwd')
  var pwdValue = pwd.value
  var errMsg = ''
  if (pwdValue.trim() === '') {
    errMsg = '密码不能为空'
  }
  if (pwdValue.length < 6) {
    errMsg = '密码长度不够'
  }
  var pwdBox = document.querySelector('#pwd-box')
  var msgBox = document.querySelector('#pwd-box p')
  msgBox.innerText = errMsg
  pwdBox.className = errMsg ? 'form-item err' : 'form-item'

  return errMsg ? false : true
}

function formValidation() {
  var pwd = pwdValidation(),
    userName = userNameValidation()
  return pwd && userName
}
