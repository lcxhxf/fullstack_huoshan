// 服务器实例的模块化
import express from 'express'
import {defaultErrorHandler} from './app.middleware'
import router from '../post/post.router'

const app = express()
// 路由，中间件

app.use(router)

app.use(defaultErrorHandler)

export default app