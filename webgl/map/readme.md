# 字节界面考题
    1.弹性布局
    布局的概念 row col
    弹性布局 绝对居中
    ```
    body{
        display:flex;
        align-item:center;
        justify-content:center;
    }

    ```

    flex:1 等比例分配
    flex-wrap: wrap;
    2.响应式方案
    @medai screen and (max-width: 480px){
        把要特殊处理的css都处理一下
    }