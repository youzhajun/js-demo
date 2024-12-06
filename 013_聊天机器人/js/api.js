var API = (function () {
  // 封装系统 api
  const BASE_URL = 'https://study.duyiedu.com'
  const TOKEN_KEY = 'token'

  /**
   * 封装 get 请求
   * @param {请求路径} path
   * @returns
   */
  function get(path) {
    const headers = {}
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      headers.authorization = token
    }
    return fetch(BASE_URL + path, { headers })
  }

  /**
   * 封装 post 请求
   * @param {请求路径} path
   * @param {请求数据} dataObj
   * @returns
   */
  function post(path, dataObj) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      headers.authorization = token
    }
    return fetch(BASE_URL + path, {
      headers,
      method: 'POST',
      body: JSON.stringify(dataObj)
    })
  }

  // 注册接口
  async function reg(regInfo) {
    return await post('/api/user/reg', regInfo).then((res) => res.json)
  }

  // 登录接口
  async function login(loginInfo) {
    const resp = await post('/api/user/login', loginInfo)
    const body = await resp.then((res) => res.json)
    console.log('登录接口', resp, body)
  }

  // 检查用户是否存在接口
  async function exists(loginId) {
    return await get(`/api/user/exists?loginId=${loginId}`)
  }

  // 个人信息接口
  async function userInfo() {
    return await get('/api/user/profile')
  }

  // 发送聊天接口
  async function sendChat(content) {
    return await post('/api/chat', content)
  }
  // 获取历史聊天记录接口
  async function history() {
    return await get('/api/chat/history')
  }

  // 退出登录接口
  async function loginOut() {
    localStorage.removeItem(TOKEN_KEY)
  }

  return {
    reg,
    login,
    exists,
    userInfo,
    sendChat,
    history,
    loginOut
  }
})()
