1. 集齐react全家桶
    - react + react-dom 组件还有组件挂载的问题
    - react-router-dom 路由 单页应用
    - react-redux 数据流管理 吸光所有的组件的状态 
2. 架构
    - view/pages 页面级别组件
    - components 普通组件 构成页面 复用
3. 数据管理
    - 组件的状态从本地到store 单一状态树
    - react-redux useSelector 直通车
    useSelector((state) => state.topics)
    - createStore redux 由节点构成
      combineReducers(
          topics 
      )
    - topics 一个reducer函数
      初始值是loading true  data：[] 