import axios from 'axios'
import { Toast, Cell, Button, Icon } from 'zarm';

// vite 中获取环境变量
const Mode = import.meta.env.MODE  // 'development'

axios.defaults.baseURL = Mode === 'development' ? '/api' : ''
console.log(axios.defaults.baseURL, '-----------');
axios.defaults.withCredentials = true //请求是否携带凭证
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

//响应拦截
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.show('服务器异常！')
        return Promise.reject(res)
    }
    if (res.data.code !== 200) {
        if (res,data.msg) Toast.show(res.data.msg)
        if (res.data.code == 401) {
            window,location.href = './login'
        }
        return Promise.reject(res.data)
    }

    return res.data
})

export default axios
