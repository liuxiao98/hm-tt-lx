
import axios from 'axios'
import local from '@/utils/local'
import router from '@/router'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// if (local.getUser()) {
//   axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
// }
// 请求拦截器
axios.interceptors.request.use((config) => {
  const user = local.getUser() || {}
  config.headers.Authorization = `Bearer ${user.token}`
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res => res, err => {
  if (err.response.status === 401) {
    return router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
