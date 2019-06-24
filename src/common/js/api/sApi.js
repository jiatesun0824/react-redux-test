import fetch from './fetch'

export default {
  login (params) { // 登录
    return fetch('/user/login', params, 'post', 'formData')
  }
}
