const accountValidator = new FieldValidator('account', async function (val) {
  if (!val) {
    return '请填写账号'
  }
  const res = await API.exists(this.inputDom.value)
  console.log(res)
  if (res.data) {
    return '该账号已存在，请修改'
  }
})

const nicknameValidator = new FieldValidator('nickname', async function (val) {
  if (!val) {
    return '昵称不能为空'
  }
})

const pwdValidator = new FieldValidator('pwd', async function (val) {
  if (!val) {
    return '密码不能为空'
  }
})

const pwd2Validator = new FieldValidator('pwd2', async function (val) {
  if (!val) {
    return '密码不能为空'
  }
  if (pwdValidator.inputDom.value && pwdValidator.inputDom.value !== val) {
    return '两次密码不同'
  }
})

const form = document.querySelector('form')
form.onsubmit = async function (e) {
  e.preventDefault()
  console.log('表单提交事件')
  const result = await FieldValidator.verifyList(
    accountValidator,
    nicknameValidator,
    pwdValidator,
    pwd2Validator
  )
  if(result.every(x=>x)) {
    const result = await API.reg({
      loginId: accountValidator.inputDom.value,
      loginPwd: pwdValidator.inputDom.value,
      nickname: nicknameValidator.inputDom.value
    })
    if(result.code === 0){
      // 跳转页面
      alert('注册成功，点击确定后跳转')
      location.href = './login.html'
    }
  }
}
