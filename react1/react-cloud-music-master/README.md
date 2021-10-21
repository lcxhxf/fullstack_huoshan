- 把项目运行起来
  1. 安装依赖 并启动
  2. api 的端口改成 3300

- 全栈react 项目
  1. api 不用写 用的第三方sdk 后端
     http 跨域请求
     -  前后端分离
        独立的前端路由可以用
        react-route-dom exporess.Router
     -  职责分离
     -  www.baidu.com
     -  api.baidu.com

- 项目架构
  src 开发目录 webpack context
  - api
    songs 不是内在数据 -> store -> reducer 函数 -> dispatch action
    -> api -> backend(:3300/personalized)

  - bannerList [] -> 有数据 整个流程是怎么样的？
    config.js axios 配置   ->   api/request.js/getBanerList    ->   :3300/banner  url

    getBannerList->store/action -> dispatch(action) {type: '', data: []} -> reducer 重新计算

    defaultState = {
      bannerList: []
    }
      switch() {
        case
          bannerList: action.data
      }