- 阿里非常喜欢考圣杯和双飞翼布局
- 页面的绘制由css决定 比如布局 
    但是绘制顺序由html标签顺序决定
- 页面的显示，先下载头部的css 在绘制前css 就全部到位了
    显示不会乱 
    如何就是html dom树
    #center就会早于 #left 先出现
    满足阿里网页打开速度第一位的需求
    1. 中间的先显示
    2. 分屏显示（上面的先显示）