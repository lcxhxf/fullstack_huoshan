- 三元套路
    1. redux 放在pages/目录下
        数据驱动界面
    2. 切页面 样式组件
    3. 路由配置 react-router-config 数组 动态加载组件
    4. better-scroll load... common组件
- 转移到自己的项目
    业务打理经验

- 首页开发套路
    切页面 == 组件化
    1. 组件思路
        connect()(search + scroll(组件化) + tabBar)  
    2. 后端api  mockjs koa 两者都有

- 页面引入Scroll
    Scroll > div
- 组件化， 做一个组件
    1. 数据怎么来
        koa
    2. scroll
    3. 写组件切页面

- 三元页面模板
import React from "react";
import { connect } from "react-redux";
import Scroll from '../../baseUI/scroll/index'

// import './Server.style.js'

const Server = (props) =>{
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Server
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}

export default connect(mapStateToProps, {})(Server)

- swiper 组件打理流程
    1. 安装相应版本的swiper
    2. 引入swiper 及样式
    3. 固定的html结构 .swiper-container>(.swiper-wrapper>.swiper-item)+.swiper-pagination
    4. useEffect 实例化Swiper

- 电商menuBar
    1. swiper 提供了swiper-bar形式
    2. 使用容器组合组件
        menubar swiper
        menuBarItem
    3. flex 每行交给复用的组件
    4. 数据结构设计

- 金禅脱壳
    1. 把不想展示的功能直接截图， 放到assets下
    2. 切页面组件


- 项目考点
    1. 性能优化
        路由 懒加载
        组件memo
        connect(mapStateToProps, {})(memo(My))
        lazyload 图片
    2. 样式组件
    3. better-scroll
    4. 组件化风格