- react + ts 深入解析
    1. ref对象
    @types/React index.d.ts
    d declare 声明一个类型
    T 专门类型参数
    interface RefObject <T> {
        元组
        类型不可改变
        readonly current: T | null
    }

    global.d.ts 全局，不需要引入
    HTMLDivElement