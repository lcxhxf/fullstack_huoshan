- 面向对象设计模式之单例模式
    1. 它是未来大型应用开发的需求
    2. new Person() 类实例化的简单用法不合适了
    3. Person.getInstance() 静态方法
        怎么绕过new？绕过实例化的过程
        直接调用静态方法就可以了
        以后要获得单例，通过Person.getInstance()拿
    4. 把实例挂载在this.instance = null
        第一次调用getInstance时去实例化
        立即设置this.instance
        之后就直接返回this.instance