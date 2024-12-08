const accountValidator = new FieldValidator('account', async function (val) {
    if (!val) {
      return '请填写账号'
    }
  })
  
  const pwdValidator = new FieldValidator('pwd', async function (val) {
    if (!val) {
      return '密码不能为空'
    }
  })

  const form = document.querySelector('form')
  form.onsubmit =async (e)=>{
    e.preventDefault()
    console.log('登录')
    const result = await FieldValidator.verifyList(
        accountValidator,
        pwdValidator
    )
    if(!result.every(x=>x)) {
        return
    }
    const loginRes = await API.login({
        loginId: accountValidator.inputDom.value,
        loginPwd: pwdValidator.inputDom.value
    })
    if(loginRes.code === 0){
        alert('登陆成功，点击跳转首页')
        location.href = './index.html'
    } else {
        alert(`登陆失败: ${loginRes.msg}`)
    }
  }
  