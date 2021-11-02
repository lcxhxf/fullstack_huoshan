import axios from 'axios';
import {Toast} from 'zarm';

// vite 中获取环境变量
const MODE = import.meta.env.MODE; // 'development'


axios.defaults.baseURL = MODE === 'development' ? '/api' : '' ;//后面空字符串放线上IP地址

axios.defaults.withCredentials = true; // 请求是否携带凭证

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

//前端登录一次 后端就生成了一个加密的标记
//本地存储有token标记(相当于凭证),再多开几个页面也不用重新登录
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null }`;
axios.defaults.headers.post['Content-Type'] = 'application/json';


//响应拦截 统一处理后端相应错误的情况
axios.interceptors.response.use(res => {
    if(typeof res.data !== 'object'){
        Toast.show('服务器异常!');   
        return Promise.reject(res);
    }
    if(res.data.code != 200){
        if(res.data.msg) Toast.show(res.data.msg);
        // 401 登陆过期
        if(res.data.code == 401) {
            window.location.href = '/login';
        }
        return Promise.reject(res.data);
    }
    
    return res.data;
})

export default axios;

 