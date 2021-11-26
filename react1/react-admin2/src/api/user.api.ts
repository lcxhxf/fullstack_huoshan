import { request } from './request';
import { LoginParams } from '../interface/user/login';

// axios 封装 所有的请求 都有共同的需求
// 1. baseURL
// 2. 请求头 token localStorage
// 3. 失败
// 4. timeout
// 5. 成功 status: true massage

export const apiLogin = (data: LoginParams) => request('post', '/user/login', data)