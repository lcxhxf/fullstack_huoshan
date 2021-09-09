- echarts 在react中用出来
    1. npm i echarts
    2. 两步
        init
        DOM节点
        - react 不能直接操作DOM的
        - ref 代替DOM
            useRef() ref 对象 current undefined
        - 挂载后
            useEffect 组件就生成了DOM
        - init 节点可以用了  ref.current 
        setOption(option)