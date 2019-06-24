import axios from 'axios'
import path from './config'
// import storage from 'good-storage'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

// POST传参序列化
axios.interceptors.request.use((config) => {
  config.headers['Platform-Code'] = 'brand2c' // 设备类型
  return config
}, (error) => {
  return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

export function fetch (url, params, type, formData) {
  axios.defaults.baseURL = path.basePath.baseUrl
  if (formData) {
    let formDataObj = new FormData()
    for (let key in params) {
      formDataObj.append(key, params[key])
    }
    params = formDataObj
  }
  return new Promise((resolve, reject) => {
    let obj
    if (type === 'post') {
      obj = {
        method: type,
        url: url,
        data: params || {}
      }
    } else {
      obj = {
        method: 'get',
        url: url,
        params: params || {}
      }
    }
    axios(obj)
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default fetch
