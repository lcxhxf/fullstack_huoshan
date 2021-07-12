# 腾讯考题

1. 如何通过disabled 状态 选择我们的按钮
    让它开始的时候灰掉， 不能点
    query 属性选择器
    button [disabled]
2. 如何做滚到到最后呢？
    window.onScroll
    观察者 设计模式
    function callback(payload) {        
        payload[0].interSectionRatio
    }
    es6const ob = IntersectionObserver(cb, {
        root:观察的根元素 父元素
        threshold：1
    }) 盯紧元素
    被观察者
    ob.observe(要在root里监听的元素)
