const accountValidator = new FieldValidator('account', async function (val) {
  if (!val) {
    return '请填写账号'
  }
  const res = await API.exists(this.inputDom.value)
  if (res.data) {
    return '该账号已存在，请求改'
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
  const result = FieldValidator.verifyList(
    accountValidator,
    nicknameValidator,
    pwdValidator,
    pwd2Validator
  )
}
